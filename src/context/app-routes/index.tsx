import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH_HOME, PATH_BOARDS } from "../../utils/constants";

//Container components
import { BoardListContainer } from "../../container/board-list";
import { BoardContainer } from "../../container/board";

function Boards() {
  return (
    <Routes>
      <Route index element={<BoardListContainer />}></Route>
      <Route path={":id"} element={<BoardContainer />}></Route>
      <Route path={"/me"} element={"Its me"}></Route>
    </Routes>
  );
}
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH_HOME} element={<BoardListContainer />}></Route>
        <Route path="boards/*" element={<Boards />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
