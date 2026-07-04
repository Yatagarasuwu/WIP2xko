import { Champion } from "@/types/champion";

type Props = {
  selected: Champion[];
  onClear: () => void;
};

export default function SelectedChampions({
  selected,
  onClear,
}: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold">Your Team</h2>

        <button
          onClick={onClear}
          className="text-sm text-red-400 hover:text-red-300"
        >
          Clear
        </button>
      </div>

      <div className="flex gap-4">
        {selected.length === 0 && (
          <div className="text-zinc-500 text-sm">
            Select 2 champions
          </div>
        )}

        {selected.map((champ) => (
          <div
            key={champ.id}
            className="flex flex-col items-center gap-1"
          >
            <img
              src={`/champions/${champ.image}`}
              className="w-16 h-16 rounded-lg border border-zinc-700"
            />
            <span className="text-xs text-zinc-300">
              {champ.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}