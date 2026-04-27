"use client";

import Link from "next/link";
import { SystemStatus } from "./SystemStatus";
import { usePathname } from "next/navigation";
import {
  Bell,
  Brain,
  ChevronLeft,
  ChevronRight,
  Globe2,
  LayoutDashboard,
  Radar,
  Satellite,
  Settings2,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { href: "/analysis", icon: Brain, label: "AI Analysis" },
  { href: "/dashboard", icon: Globe2, label: "Orbital Map" },
  { href: "/dashboard", icon: Bell, label: "Alert Stream" },
];

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`hidden border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex lg:flex-col ${
        collapsed ? "w-20" : "w-72"
      } transition-all duration-300`}
    >
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sidebar-accent">
          <Satellite className="h-4.5 w-4.5 text-cyan-accent" />
        </div>
        {!collapsed ? (
          <div>
            <p className="text-sm font-semibold text-white">Orbital AI Sentinel</p>
            <p className="text-xs text-slate-400">Global early warning system</p>
          </div>
        ) : null}
      </div>

      <div className="px-3 pt-5">
        <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8">
              <Radar className="h-4.5 w-4.5 text-cyan-accent" />
            </div>
            {!collapsed ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Monitoring mode
                </p>
                <p className="mt-1 text-sm text-white">Global sentinel watch</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                title={collapsed ? item.label : undefined}
                className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition-all ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/6 hover:text-white"
                }`}
              >
                <item.icon className="h-4.5 w-4.5 shrink-0" />
                {!collapsed ? <span>{item.label}</span> : null}
              </Link>
            );
          })}
        </div>
      </nav>

      {!collapsed && (
        <div className="px-3 pb-3">
          <SystemStatus />
        </div>
      )}
      <div className="border-t border-sidebar-border p-3">
        <button
          className="mb-2 flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm text-slate-400 hover:bg-white/6 hover:text-white"
          title={collapsed ? "Settings" : undefined}
        >
          <Settings2 className="h-4.5 w-4.5 shrink-0" />
          {!collapsed ? <span>Settings</span> : null}
        </button>
        <button
          onClick={onToggle}
          className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm text-slate-400 hover:bg-white/6 hover:text-white"
        >
          {collapsed ? (
            <ChevronRight className="h-4.5 w-4.5 shrink-0" />
          ) : (
            <>
              <ChevronLeft className="h-4.5 w-4.5 shrink-0" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
