import BoardList from "@/components/boards/BoardList";
import { boards } from "@/data/boards";

export default function BoardsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Boards
      </h1>

      <BoardList boards={boards} />
    </main>
  );
}