import React, { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Header from "./component/Header";
// import "./main.css";
const MainPage = ({
  userName,
  room,
  setUserName,
  setRoom,
  loggedIn,
  setLoggedIn,
  socket,
}) => {
  const logout = () => {
    window.localStorage.clear();
    //socket.emit("disconnect", { reson: "io server disconnect" });
    socket.emit("logout", { userName, room });
    setLoggedIn(false);
    setUserName("");
    setRoom("");
  };
  return (
    <>
      <Header logout={logout} userName={userName} room={room} />
      <Homepage />
    </>
  );
};

export default MainPage;
