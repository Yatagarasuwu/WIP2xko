import { Champion } from "@/types/champion";

type Props = {
  champion: Champion;
  selected: boolean;
  onClick: (champion: Champion) => void;
};

export default function ChampionCard({
  champion,
  selected,
  onClick,
}: Props) {
  return (
    <button
      onClick={() => onClick(champion)}
      className={`
        w-full aspect-square
        rounded-lg
        overflow-hidden
        border
        transition
        ${selected ? "border-blue-500 scale-105" : "border-zinc-800"}
      `}
    >
      <img
        src={`/champions/${champion.image}`}
        className="w-full h-full object-cover block"
      />
    </button>
  );
}