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
    <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
      {champions.map((champ) => (
        <ChampionCard
          key={champ.id}
          champion={champ}
          selected={selected.some((c) => c.id === champ.id)}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}