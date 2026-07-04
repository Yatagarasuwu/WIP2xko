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
    <div className="p-4 border rounded mb-4">
      <h2 className="font-bold mb-2">Selected Team</h2>

      <div className="flex gap-4">
        {selected.map((champ) => (
          <div key={champ.id} className="text-center">
            <img
              src={`/champions/${champ.image}`}
              className="w-16 h-16 rounded"
            />
            <div className="text-xs">{champ.name}</div>
          </div>
        ))}
      </div>

      <button
        onClick={onClear}
        className="mt-3 text-sm text-red-400"
      >
        Clear
      </button>
    </div>
  );
}