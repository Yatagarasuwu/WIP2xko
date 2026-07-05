"use client";

import { champions } from "@/data/champions";
import { Champion } from "@/types/champion";
import { useState } from "react";

import ChampionGrid from "@/components/champions/ChampionGrid";
import TeamSidebar from "@/components/champions/TeamSidebar";

export default function Home() {
  const [selected, setSelected] = useState<Champion[]>([]);

  const handleSelect = (champ: Champion) => {
    setSelected((prev) => {
      const exists = prev.some((c) => c.id === champ.id);

      if (exists) {
        return prev.filter((c) => c.id !== champ.id);
      }

      if (prev.length >= 2) return prev;

      return [...prev, champ];
    });
  };

  const handleRemove = (champ: Champion) => {
    setSelected((prev) =>
      prev.filter((c) => c.id !== champ.id)
    );
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <ChampionGrid
          champions={champions}
          selected={selected}
          onSelect={handleSelect}
        />
      </div>

      <TeamSidebar
        selected={selected}
        onRemove={handleRemove}
      />
    </div>
  );
}