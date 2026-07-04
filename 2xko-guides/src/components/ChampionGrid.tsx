import { Champion } from "@/types/champion";
import ChampionCard from "./ChampionCard";

type Props = {
  champions: Champion[];
  selected: Champion[];
  onSelect: (champion: Champion) => void;
};

export default function ChampionGrid({
  champions,
  selected,
  onSelect,
}: Props) {
  return (
    <div>
      <h2 className="text-sm text-zinc-400 mb-3">
        Select Champions
      </h2>

      <div className="grid grid-cols-6 gap-3">
        {champions.map((champ) => (
          <ChampionCard
            key={champ.id}
            champion={champ}
            selected={selected.some((c) => c.id === champ.id)}
            onClick={onSelect}
          />
        ))}
      </div>
    </div>
  );
}