import axios from "axios";
import { Board } from "../models/board";

import { ENDPOINTS } from "./endpoints";
import { DOMAIN } from "./domain";

const BOARD_LIST_URL = `${DOMAIN}${ENDPOINTS.BOARD}`;
const getBoardUrl = (id: string) => `${BOARD_LIST_URL}/${id}`;

export const getBoardsList = async (): Promise<Board[]> =>
  axios
    .get(BOARD_LIST_URL)
    .then(({ data }) => data)
    .catch((error) => console.log(error));

export const updateBoard = (id: string, name: string) =>
  axios
    .put(getBoardUrl(id), {
      name,
    })
    .then(({ data }) => console.log("PUT : ", data))
    .catch((error) => console.log(error));

export const deleteBoard = (id: string) =>
  axios
    .delete(getBoardUrl(id))
    .then((response) => console.log("Delete :", response))
    .catch((error) => console.log(error));

export const createBoard = (name: string) =>
  axios
    .post(BOARD_LIST_URL, {
      name,
    })
    .then((response) => console.log("response :", response))
    .catch((error) => console.log(error));
