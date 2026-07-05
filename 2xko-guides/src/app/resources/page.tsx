"use client";

import { resources } from "@/data/resources";
import { filterResources } from "@/lib/filterResources";
import { useState } from "react";

export default function ResourcesPage() {
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    championId: "",
    tag: "",
  });

  const filtered = filterResources(resources, filters);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Phase 3 Test</h1>

      {/* SEARCH */}
      <input
        className="border p-2 text-black"
        placeholder="Search resources..."
        onChange={(e) =>
          setFilters((f) => ({
            ...f,
            search: e.target.value,
          }))
        }
      />

      {/* TYPE FILTER */}
      <select
        className="border p-2 text-black"
        onChange={(e) =>
          setFilters((f) => ({
            ...f,
            type: e.target.value,
          }))
        }
      >
        <option value="">All Types</option>
        <option value="combo">Combo</option>
        <option value="mixup">Mixup</option>
        <option value="oki">Oki</option>
        <option value="neutral">Neutral</option>
        <option value="pressure">Pressure</option>
        <option value="punish">Punish</option>
      </select>

      {/* RESULTS */}
      <div className="space-y-2">
        {filtered.map((r) => (
          <div
            key={r.id}
            className="border p-3 rounded"
          >
            <div className="font-bold">{r.title}</div>
            <div className="text-sm text-gray-500">
              {r.type} | {r.championId}
            </div>

            <div className="text-xs mt-1">
              Tags: {r.tags.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}