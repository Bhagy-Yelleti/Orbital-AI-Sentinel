"use client";

import "leaflet/dist/leaflet.css";

import { useMemo, useState, useCallback } from "react";
import { MapContainer, Marker, TileLayer, ZoomControl, useMapEvents } from "react-leaflet";
import { divIcon, latLngBounds } from "leaflet";
import type { RiskLocation } from "@/types";
import { MarkerDetail } from "./MarkerDetail";
import { categoryMarkerColors, markerPulseClass } from "./theme";
import { useFilters, matchesFilters } from "./FilterContext";

interface WorldRiskMapClientProps {
  locations: RiskLocation[];
}

/** Category emoji for tooltip */
const categoryEmoji: Record<string, string> = {
  flood:      "🌊",
  conflict:   "⚔️",
  supply:     "📦",
  earthquake: "🌍",
  wildfire:   "🔥",
};

/** Risk level → ring size multiplier for the outer pulse */
const pulseSize: Record<string, number> = {
  critical: 28,
  high:     22,
  moderate: 18,
  low:      14,
};

function createRiskIcon(location: RiskLocation) {
  const color = categoryMarkerColors[location.riskCategory];
  const pulseClass = markerPulseClass[location.riskLevel];
  const size = pulseSize[location.riskLevel] ?? 18;
  const core = Math.round(size * 0.45);

  return divIcon({
    className: "",
    html: `
      <div style="position:relative;width:${size}px;height:${size}px;">
        <span
          class="${pulseClass}"
          style="position:absolute;inset:0;border-radius:999px;background:${color};opacity:0.55;"
        ></span>
        <span style="
          position:absolute;
          top:50%;left:50%;
          transform:translate(-50%,-50%);
          width:${core}px;height:${core}px;
          border-radius:999px;
          background:${color};
          border:2px solid rgba(255,255,255,0.9);
          box-shadow:0 0 0 2px ${color}55, 0 2px 8px ${color}88;
        "></span>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

/** Closes the panel when clicking the map background */
function MapClickHandler({ onMapClick }: { onMapClick: () => void }) {
  useMapEvents({ click: onMapClick });
  return null;
}

interface TooltipState {
  location: RiskLocation;
  x: number;
  y: number;
}

export function WorldRiskMapClient({ locations }: WorldRiskMapClientProps) {
  const [selectedLocation, setSelectedLocation] = useState<RiskLocation | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const { region, category } = useFilters();

  const filtered = useMemo(
    () => locations.filter((l) => matchesFilters({ region: l.region, riskCategory: l.riskCategory }, region, category)),
    [locations, region, category]
  );

  const bounds = useMemo(
    () => latLngBounds((filtered.length ? filtered : locations).map((l) => [l.lat, l.lng])),
    [filtered, locations]
  );

  const handleMarkerClick = useCallback(
    (location: RiskLocation) => {
      setSelectedLocation((prev) => (prev?.id === location.id ? null : location));
      setTooltip(null);
    },
    []
  );

  const handleMarkerMouseOver = useCallback(
    (location: RiskLocation, e: { originalEvent: MouseEvent }) => {
      const rect = (e.originalEvent.target as HTMLElement)
        .closest(".leaflet-container")
        ?.getBoundingClientRect();
      if (!rect) return;
      setTooltip({
        location,
        x: e.originalEvent.clientX - rect.left,
        y: e.originalEvent.clientY - rect.top,
      });
    },
    []
  );

  const handleMarkerMouseOut = useCallback(() => setTooltip(null), []);

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] satellite-scanline">
      {/* Live corner indicators */}
      <div className="pointer-events-none absolute left-3 top-3 z-[500] flex items-center gap-1.5 corner-blink">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-accent/80">
          Live
        </span>
      </div>
      <div className="pointer-events-none absolute right-3 top-3 z-[500] flex items-center gap-1 corner-blink" style={{ animationDelay: "1.2s" }}>
        <span className="h-1.5 w-1.5 rounded-full bg-risk-critical" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-risk-critical/80">
          REC
        </span>
      </div>

      <MapContainer
        bounds={bounds}
        scrollWheelZoom={false}
        zoomControl={false}
        className="h-[32rem] w-full rounded-[1.5rem]"
        worldCopyJump
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution="Carto"
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <MapClickHandler onMapClick={() => setSelectedLocation(null)} />
        {filtered.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={createRiskIcon(location)}
            eventHandlers={{
              click: () => handleMarkerClick(location),
              mouseover: (e) => handleMarkerMouseOver(location, e as unknown as { originalEvent: MouseEvent }),
              mouseout: handleMarkerMouseOut,
            }}
          />
        ))}
      </MapContainer>

      {/* Top gradient vignette */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-navy/50 to-transparent z-[400]" />

      {/* Legend overlay */}
      <div className="absolute left-4 bottom-4 z-[400] rounded-2xl border border-white/10 bg-navy/75 px-4 py-3 text-white backdrop-blur-md">
        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2">
          Signal type
        </div>
        <div className="grid grid-cols-1 gap-y-1.5 text-[11px] text-slate-300">
          {(["flood","conflict","supply","earthquake","wildfire"] as const).map((cat) => (
            <span key={cat} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ background: categoryMarkerColors[cat] }}
              />
              <span className="capitalize">{cat}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hover tooltip */}
      {tooltip && (
        <div
          className="pointer-events-none absolute z-[600] marker-tooltip-enter"
          style={{
            left: tooltip.x + 14,
            top: tooltip.y - 10,
            maxWidth: 220,
          }}
        >
          <div className="rounded-xl border border-white/10 bg-navy/90 px-3 py-2.5 text-white backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-1.5 mb-1">
              <span>{categoryEmoji[tooltip.location.riskCategory]}</span>
              <span className="text-xs font-semibold truncate">{tooltip.location.name}</span>
            </div>
            <div className="text-[11px] text-slate-400 leading-4 line-clamp-2">
              {tooltip.location.description}
            </div>
            <div className="mt-1.5 flex items-center gap-2 text-[10px]">
              <span
                className="rounded-full px-2 py-0.5 font-semibold uppercase"
                style={{
                  background: categoryMarkerColors[tooltip.location.riskCategory] + "22",
                  color: categoryMarkerColors[tooltip.location.riskCategory],
                }}
              >
                {tooltip.location.riskLevel}
              </span>
              <span className="text-slate-500">{tooltip.location.probability}% prob</span>
            </div>
          </div>
        </div>
      )}

      {/* Detail side panel */}
      {selectedLocation && (
        <div className="panel-slide-in absolute inset-x-3 bottom-3 z-[500] md:inset-x-auto md:right-3 md:top-3 md:bottom-auto md:w-[23rem]">
          <MarkerDetail
            location={selectedLocation}
            onClose={() => setSelectedLocation(null)}
          />
        </div>
      )}
    </div>
  );
}
