import { Board } from "@/types/board";
import Link from "next/link";

export default function BoardCard({
  board,
}: {
  board: Board;
}) {
  return (
    <Link href={`/boards/${board.id}`}>
      <div className="rounded-lg border border-zinc-800 p-4 hover:border-blue-500 transition cursor-pointer">

        <h2 className="text-lg font-bold">
          {board.title}
        </h2>

        <p className="text-sm text-zinc-400 mt-2">
          {board.description}
        </p>

        <div className="mt-4 text-xs">
          Team: {board.champions.join(" + ")}
        </div>

        <div className="text-xs mt-1">
          {board.resourceIds.length} resources
        </div>

      </div>
    </Link>
  );
}