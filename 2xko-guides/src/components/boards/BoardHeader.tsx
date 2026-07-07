import { Board } from "@/types/board";

export default function BoardHeader({
  board,
}: {
  board: Board;
}) {
  return (
    <div className="space-y-2">

      <h1 className="text-3xl font-bold">
        {board.title}
      </h1>

      <p className="text-zinc-400">
        {board.description}
      </p>

      <div className="text-sm">
        Team: {board.champions.join(" + ")}
      </div>

      <div className="text-xs">
        {board.isPublic ? "Public Board" : "Private Board"}
      </div>

    </div>
  );
}