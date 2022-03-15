import React, { useState, useEffect } from "react";
import { BoardListPage } from "../../component/board-list";
import {
  getBoardsList,
  updateBoard,
  deleteBoard,
  createBoard,
} from "../../middleware/boards";
import { Board } from "../../models/board";

export const BoardListContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [boards, setBoards] = useState<Board[]>([]);

  const onEdit = async (id: string, name: string) => {
    setIsLoading(true);
    try {
      updateBoard(id, name);
      const res = await getBoardsList();
      setBoards(res);
    } catch {}
    setIsLoading(false);
  };

  const onDelete = async (id: string) => {
    setIsLoading(true);
    try {
      deleteBoard(id);
      const res = await getBoardsList();
      setBoards(res);
    } catch {}
    setIsLoading(false);
  };

  const onCreate = async (name: string) => {
    setIsLoading(true);
    try {
      await createBoard(name);
      const res = await getBoardsList();
      setBoards(res);
    } catch {}
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      try {
        const res = await getBoardsList();
        setBoards(res);
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
      onCreate={onCreate}
    />
  );
};
