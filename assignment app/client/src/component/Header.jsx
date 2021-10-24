import React from "react";

const Header = ({ logout }) => {
  const userName = window.localStorage.getItem("userName");
  const room = window.localStorage.getItem("room");
  return (
    <>
      <div className={"row"} style={{ position: "sticky" }}>
        <p className={"page-header"}>
          Drag & drob & socket io assignment 🔥 ✌️ <br />
          {`welcom player ${userName} in room number ${room}`}
          <br />
          <button
            className="btn btn-primary btn-sm btn-block mt-3"
            type="button"
            onClick={logout}
          >
            logout
          </button>
          <br />
          <span>Created By Ahmed Ibrahim</span>
        </p>
      </div>
    </>
  );
};

export default Header;
