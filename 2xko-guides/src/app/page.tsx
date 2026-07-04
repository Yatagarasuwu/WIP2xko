"use client";

import ChampionGrid from "@/components/ChampionGrid";
import SelectedChampions from "@/components/SelectedChampions";
import { champions } from "@/data/champions";
import { Champion } from "@/types/champion";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<Champion[]>([]);

  const handleSelect = (champion: Champion) => {
    setSelected((prev) => {
      const exists = prev.find((c) => c.id === champion.id);

      if (exists) {
        return prev.filter((c) => c.id !== champion.id);
      }

      if (prev.length >= 2) {
        return [prev[1], champion];
      }

      return [...prev, champion];
    });
  };

  return (
    
    <main className="p-6 max-w-6xl mx-auto space-y-6">
      <SelectedChampions
        selected={selected}
        onClear={() => setSelected([])}
      />

      <div className="p-10 text-white bg-red-500 text-3xl">
  TAILWIND TEST
</div>

      <ChampionGrid
        champions={champions}
        selected={selected}
        onSelect={handleSelect}
      />
    </main>
  );
}