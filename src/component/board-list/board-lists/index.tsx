import React from "react";
import { BoardListItem } from "./board-list-item";
import styles from "./board-list.module.css";

interface BoardList {
  id: string;
  name: string;
  dateCreated: string;
}
interface BoardListsProp {
  items: BoardList[];
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
          key={item.id}
          {...item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
