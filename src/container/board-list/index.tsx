import React, { useState, useEffect } from "react";
import { BoardListPage } from "../../component/board-list";
import {
  getBoardsList,
  updateBoard,
  deleteBoard,
} from "../../middleware/boards";
import { Board } from "../../models/board";

export const BoardListContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [boards, setBoards] = useState<Board[]>([]);
  const onEdit = (id: string, name: string) => updateBoard(id, name);
  const onDelete = (id: string) => deleteBoard(id);
  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      try {
        const res = await getBoardsList();
        setBoards(res);
        console.log("useEffect ", res);
      } catch {}
      setIsLoading(false);
    };
    fetch();
  }, []);
  return (
    <BoardListPage
      isLoading={isLoading}
      boards={boards}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};
