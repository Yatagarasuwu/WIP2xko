import { Board } from "@/types/board";
import BoardCard from "./BoardCard";

type Props = {
  boards: Board[];
};

export default function BoardList({ boards }: Props) {
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