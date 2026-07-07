import { Champion } from "@/types/champion";

type Props = {
  champion: Champion;
  selected: boolean;
  disabled?: boolean;
  onClick: (champ: Champion) => void;
};

export default function ChampionCard({
  champion,
  selected,
  disabled,
  onClick,
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(champion)}
      className={`
        relative rounded-lg overflow-hidden border transition
        aspect-square w-full
        ${selected ? "border-blue-500" : "border-zinc-800"}
        ${disabled ? "opacity-40 pointer-events-none" : "hover:border-zinc-500"}
      `}
    >
      <img
        src={`/champions/${champion.image}`}
        alt={champion.name}
        className="w-full h-full object-cover"
      />

      {selected && (
        <div className="absolute top-1 right-1 text-[10px] bg-blue-500 px-2 py-0.5 rounded">
          PICKED
        </div>
      )}
    </button>
  );
}