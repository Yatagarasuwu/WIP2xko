import { Board } from "@/types/board";

type Props = {
  board: Board;
};

export default function BoardCard({ board }: Props) {
  return (
    <div className="rounded-lg border border-zinc-800 p-4">
      <h2 className="font-bold">
        {board.title}
      </h2>

      <p className="text-sm text-zinc-400">
        {board.description}
      </p>

      <div className="mt-3 text-xs">
        Champions: {board.champions.join(" + ")}
      </div>

      <div className="mt-2 text-xs">
        {board.resourceIds.length} resources
      </div>
    </div>
  );
}