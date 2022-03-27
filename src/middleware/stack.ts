import axios from "axios";
import { StackType } from "../models/stack";
import { Board } from "../models/board";

import { ENDPOINTS } from "./endpoints";
import { DOMAIN } from "./domain";

// /boards/622dcad0b6b6d6ef3c2ff640/stacks/62359fa9481f2d2780621cdc

export const getStackUrl = (boardId: string, stackId: string) =>
  `${DOMAIN}${ENDPOINTS.BOARD}/${boardId}/stacks/${stackId}`;
export const updateStack = (
  boardId: string,
  stackId: string,
  stackName: string,
  stackColor: string
) =>
  axios
    .put(getStackUrl(boardId, stackId), {
      name: stackName,
      color: stackColor,
    })
    .then(({ data }) => {
      console.log("stack update ", data);
      return data;
    })
    .catch((error) => console.log(error));