"use client";

import { champions } from "@/data/champions";
import { useChampionSelection } from "@/hooks/useChampionSelection";
import Image from "next/image";

export default function HomePage() {
  const {
    selected,
    selectedChampions,
    canRoute,
    toggleChampion,
    selectedTeamKey,
  } = useChampionSelection();

  return (
    <main className="min-h-screen p-6 text-white bg-black">
      <h1 className="text-3xl font-bold mb-6">
        Pick your duo
      </h1>

      <p className="mb-4 text-sm text-gray-400">
        Team key: {selectedTeamKey || "none"}
      </p>

      <div className="grid grid-cols-3 gap-4">
        {champions.map((champ) => {
          const isSelected = selected.includes(champ.id);

          return (
            <button
              key={champ.id}
              onClick={() => toggleChampion(champ.id)}
              className={`p-2 border rounded ${
                isSelected ? "border-pink-500" : "border-gray-700"
              }`}
            >
              <Image
                src={champ.image}
                alt={champ.name}
                className="w-full h-auto"
              />
              <p>{champ.name}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <h2>Selected</h2>
        <ul>
          {selectedChampions.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ul>
      </div>

      <button
        disabled={!canRoute}
        className="mt-6 px-4 py-2 bg-pink-600 disabled:opacity-50"
        onClick={() => {
          alert(`Go to /boards/${selectedTeamKey}`);
        }}
      >
        Open Board
      </button>
    </main>
  );
}