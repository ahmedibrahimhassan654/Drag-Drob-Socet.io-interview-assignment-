import React, { useState, useEffect } from "react";

import "./main.css";
const MainPage = ({
  userName,
  room,
  setUserName,
  setRoom,
  loggedIn,
  setLoggedIn,
  socket,
}) => {
  // useEffect(() => {
  //   isauth();
  // }, [userName]);
  // const isauth = () => {
  //   if (userName && room) {
  //     setLoggedIn(true);
  //   }
  // };
  const logout = () => {
    window.localStorage.clear();
    //socket.emit("disconnect", { reson: "io server disconnect" });
    setLoggedIn(false);
    setUserName("");
    setRoom("");
  };
  return (
    <div className="main-comp">
      <div className="first-area">
        <button className="btn btn-primary" onClick={logout}>
          {" "}
          log out{" "}
        </button>
        <div className="left-area">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut deleniti
          ut beatae, atque itaque ducimus mollitia eaque expedita, optio aperiam
          eius necessitatibus tempora sit iure voluptatem. Ratione porro
          voluptates commodi.
        </div>
        <div className="right-area">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut deleniti
          ut beatae, atque itaque ducimus mollitia eaque expedita, optio aperiam
          eius necessitatibus tempora sit iure voluptatem. Ratione porro
          voluptates commodi.
        </div>
      </div>
      <p> {JSON.stringify(userName, room)}</p>
      <p> {JSON.stringify(room)}</p>
      <div className="second-area">
        <div className="left-second-area">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut deleniti
          ut beatae, atque itaque ducimus mollitia eaque expedita, optio aperiam
          eius necessitatibus tempora sit iure voluptatem. Ratione porro
          voluptates commodi.
        </div>
        <div className="right-second-area">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut deleniti
          ut beatae, atque itaque ducimus mollitia eaque expedita, optio aperiam
          eius necessitatibus tempora sit iure voluptatem. Ratione porro
          voluptates commodi.
        </div>
      </div>
    </div>
  );
};

export default MainPage;
