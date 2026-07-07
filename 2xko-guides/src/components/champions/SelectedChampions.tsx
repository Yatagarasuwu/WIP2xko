import { Champion } from "@/types/champion";

type Props = {
  selected: Champion[];
  onRemove: (champ: Champion) => void;
};

export default function SelectedChampions({
  selected,
  onRemove,
}: Props) {
  return (
    <div className="flex gap-3">
      {[0, 1].map((slot) => {
        const champ = selected[slot];

        return (
          <div
            key={slot}
            className="w-20 h-20 border border-zinc-700 rounded overflow-hidden flex items-center justify-center"
          >
            {champ ? (
              <button onClick={() => onRemove(champ)} className="w-full h-full">
                <img
                  src={`/champions/${champ.image}`}
                  alt={champ.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ) : (
              <span className="text-xs text-zinc-500">
                Empty
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}