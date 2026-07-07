"use client";

import { boards as initialBoards } from "@/data/boards";
import { Board } from "@/types/board";
import { useState } from "react";

export function useBoards() {

    const [boards,setBoards] = useState(initialBoards);

    function createBoard(board:Board){
        setBoards(prev=>[...prev,board]);
    }

    function deleteBoard(id:string){
        setBoards(prev=>prev.filter(b=>b.id!==id));
    }

    function updateBoard(board:Board){
        setBoards(prev=>
            prev.map(b=>
                b.id===board.id
                ? board
                : b
            )
        );
    }

    return {
        boards,
        createBoard,
        deleteBoard,
        updateBoard
    };

}