import { Board } from "@/types/board";
import BoardCard from "./BoardCard";

export default function BoardList({
  boards,
}: {
  boards: Board[];
}) {
  return (
    <div className="grid gap-4">
      {boards.map((board) => (
        <BoardCard
          key={board.id}
          board={board}
        />
      ))}
    </div>
  );
}