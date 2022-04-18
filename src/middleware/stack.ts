import axios from "axios";

import { ENDPOINTS } from "./endpoints";
import { DOMAIN } from "./domain";

// /boards/622dcad0b6b6d6ef3c2ff640/stacks/62359fa9481f2d2780621cdc

export const getStackUrl = (boardId: string, stackId?: string) =>
  stackId
    ? `${DOMAIN}${ENDPOINTS.BOARD}/${boardId}/stacks/${stackId}`
    : `${DOMAIN}${ENDPOINTS.BOARD}/${boardId}/stacks`;
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

export const addStack = (
  boardId: string,
  stackName: string,
  stackColor: string
) =>
  axios
    .post(getStackUrl(boardId), {
      name: stackName,
      color: stackColor,
    })
    .then(({ data }) => {
      console.log("stack update ", data);
      return data;
    })
    .catch((error) => console.log(error));

export const deleteStack = (boardId: string, stackId: string) =>
  axios
    .delete(getStackUrl(boardId, stackId))
    .then(({ data }) => {
      console.log("stack update ", data);
      return data;
    })
    .catch((error) => console.log(error));
