"use client";

import "leaflet/dist/leaflet.css";

import { useMemo, useState } from "react";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import { divIcon, latLngBounds } from "leaflet";
import type { RiskLocation } from "@/types";
import { MarkerDetail } from "./MarkerDetail";
import { getMarkerColor } from "./theme";

interface WorldRiskMapClientProps {
  locations: RiskLocation[];
}

function createRiskIcon(color: string) {
  return divIcon({
    className: "",
    html: `
      <div style="position:relative; width:18px; height:18px;">
        <span class="sentinel-marker-pulse" style="position:absolute; inset:0; border-radius:999px; background:${color};"></span>
        <span style="position:absolute; inset:3px; border-radius:999px; background:${color}; border:2px solid rgba(255,255,255,0.9); box-shadow:0 0 0 3px rgba(255,255,255,0.15);"></span>
      </div>
    `,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
}

export function WorldRiskMapClient({ locations }: WorldRiskMapClientProps) {
  const [selectedLocation, setSelectedLocation] = useState<RiskLocation | null>(
    locations[0] ?? null
  );

  const bounds = useMemo(
    () => latLngBounds(locations.map((location) => [location.lat, location.lng])),
    [locations]
  );

  return (
    <div className="relative overflow-hidden rounded-[1.5rem]">
      <MapContainer
        bounds={bounds}
        scrollWheelZoom={false}
        zoomControl={false}
        className="h-[28rem] w-full rounded-[1.5rem]"
        worldCopyJump
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution="Carto"
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={createRiskIcon(getMarkerColor(location.riskLevel))}
            eventHandlers={{
              click: () => setSelectedLocation(location),
            }}
          />
        ))}
      </MapContainer>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy/60 to-transparent" />

      <div className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-navy/70 px-4 py-3 text-white backdrop-blur-md">
        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
          Orbital Sentinel Layer
        </div>
        <div className="mt-2 grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-300">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-risk-critical" />
            Critical
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-risk-high" />
            High
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-risk-moderate" />
            Moderate
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-risk-low" />
            Low
          </span>
        </div>
      </div>

      {selectedLocation ? (
        <div className="absolute inset-x-3 bottom-3 md:inset-x-auto md:right-3 md:top-3 md:bottom-auto md:w-[23rem]">
          <MarkerDetail
            location={selectedLocation}
            onClose={() => setSelectedLocation(null)}
          />
        </div>
      ) : null}
    </div>
  );
}
