"use client";

import { Board } from "@/types/board";
import { useState } from "react";

export default function BoardEditor({
  board,
}: {
  board: Board;
}) {

  const [title, setTitle] = useState(board.title);

  const [description, setDescription] = useState(
    board.description
  );

  const [notes, setNotes] = useState(board.notes);

  return (
    <div className="space-y-4">

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full text-black"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full text-black"
      />

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="border p-2 w-full text-black"
      />

      <button
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Save (Later)
      </button>

    </div>
  );
}