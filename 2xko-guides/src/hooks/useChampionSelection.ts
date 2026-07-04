"use client";

import { champions } from "@/data/champions";
import { CharacterId } from "@/types/champion";
import { useMemo, useState } from "react";

export function useChampionSelection() {
  const [selected, setSelected] = useState<CharacterId[]>([]);

  function toggleChampion(id: CharacterId) {
    if (selected.includes(id)) {
      setSelected(selected.filter((c) => c !== id));
      return;
    }

    if (selected.length >= 2) return;

    setSelected([...selected, id]);
  }

  const selectedChampions = useMemo(() => {
    return champions.filter((c) => selected.includes(c.id));
  }, [selected]);

  const selectedTeamKey = [...selected].sort().join("-");

  const canRoute = selected.length === 2;

  return {
    selected,
    selectedChampions,
    selectedTeamKey,
    canRoute,
    toggleChampion,
  };
}