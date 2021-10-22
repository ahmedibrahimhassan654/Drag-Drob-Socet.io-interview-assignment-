import React from "react";

const Header = ({ logout }) => {
  const userName = window.localStorage.getItem("userName");
  const room = window.localStorage.getItem("room");
  return (
    <>
      <div className={"row"}>
        <p className={"page-header"}>
          Drag & drob & socket io assignment 🔥 ✌️{" "}
        </p>
        <h1 className="text-center text-success">{`welcom player ${userName} in room number ${room}`}</h1>
        <button
          className="btn btn-primary btn-sm btn-block mt-3"
          type="button"
          onClick={logout}
        >
          logout
        </button>
      </div>
    </>
  );
};

export default Header;
