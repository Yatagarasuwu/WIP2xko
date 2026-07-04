import { Champion } from "@/types/champion";

type Props = {
  champion: Champion;
  selected: boolean;
  onClick: (champion: Champion) => void;
};

export default function ChampionCard({ champion, selected, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(champion)}
      className={`
        relative p-2 rounded-lg border transition
        ${selected ? "border-blue-500 scale-105" : "border-gray-700"}
        hover:scale-105
      `}
    >
      <img
        src={`/champions/${champion.image}`}
        alt={champion.name}
        className="w-24 h-24 object-cover rounded"
      />

      <div className="text-sm mt-1 text-center">
        {champion.name}
      </div>

      {selected && (
        <div className="absolute top-1 right-1 text-xs bg-blue-500 px-1 rounded">
          Selected
        </div>
      )}
    </button>
  );
}