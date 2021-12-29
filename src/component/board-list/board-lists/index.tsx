import React from "react";
import { BoardListItem } from "./board-list-item";
import styles from "./board-list.module.css";
import { Board } from "../../../models/board";
interface BoardListsProp {
  items: Board[];
  onEdit: (id: string, name: string) => void;
  onDelete: (id: string) => void;
}
export const BoardLists: React.FC<BoardListsProp> = ({
  items,
  onEdit,
  onDelete,
}) => {
  if (items.length === 0) {
    return <div>Please Create Boards</div>;
  }
  return (
    <div className={styles.item_container}>
      {items.map((item) => (
        <BoardListItem
          key={item._id}
          id={item._id}
          name={item.name}
          dateCreated={item.createdAt}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
