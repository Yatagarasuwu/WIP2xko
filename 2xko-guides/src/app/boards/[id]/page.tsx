import { notFound } from "next/navigation";

import { boards } from "@/data/boards";
import { resources } from "@/data/resources";

import BoardHeader from "@/components/boards/BoardHeader";
import BoardResources from "@/components/boards/BoardResources";

export default async function BoardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const board = boards.find((b) => b.id === id);

  if (!board) {
    notFound();
  }

  const boardResources = resources.filter((resource) =>
    board.resourceIds.includes(resource.id)
  );

  return (
    <main className="space-y-8 p-8">

      <BoardHeader board={board} />

      <section>
        <h2 className="text-xl font-bold mb-3">
          Resources
        </h2>

        <BoardResources
          resources={boardResources}
        />

      </section>

      <section>
        <h2 className="text-xl font-bold">
          Notes
        </h2>

        <p className="text-zinc-400 mt-2">
          {board.notes}
        </p>
      </section>

    </main>
  );
}