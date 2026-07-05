import ChampionCard from "@/components/champions/ChampionCard";
import { Champion } from "@/types/champion";
type Props = {
  champions: Champion[];
  selected: Champion[];
  onSelect: (champ: Champion) => void;
};

export default function ChampionGrid({
  champions,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {champions.map((champ) => (
        <ChampionCard
          key={champ.id}
          champion={champ}
          selected={selected.some((c) => c.id === champ.id)}
          disabled={selected.length >= 2 && !selected.some(c => c.id === champ.id)}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}