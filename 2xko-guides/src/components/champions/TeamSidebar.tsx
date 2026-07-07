import { Champion } from "@/types/champion";
import SelectedChampions from "./SelectedChampions";

type Props = {
  selected: Champion[];
  onRemove: (champ: Champion) => void;
};

export default function TeamSidebar({
  selected,
  onRemove,
}: Props) {
  return (
    <div className="w-64 p-4 border-l border-zinc-800">
      <h2 className="text-sm mb-3 text-zinc-400">
        Your Team
      </h2>

      <SelectedChampions
        selected={selected}
        onRemove={onRemove}
      />

      <button className="mt-4 w-full bg-blue-600 text-white text-sm py-2 rounded">
        Open Guide
      </button>
    </div>
  );
}