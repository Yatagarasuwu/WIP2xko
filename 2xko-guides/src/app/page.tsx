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
        return [prev[1], champion]; // replace oldest pick
      }

      return [...prev, champion];
    });
  };

  const clear = () => setSelected([]);

  return (
    <main className="p-6 space-y-6">
      <SelectedChampions selected={selected} onClear={clear} />

      <ChampionGrid
        champions={champions}
        selected={selected}
        onSelect={handleSelect}
      />
    </main>
  );
}