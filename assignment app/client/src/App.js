import React, { useState, useEffect } from "react";

import io from "socket.io-client";

import MainPage from "./MainPage";

const socket = io.connect("http://localhost:3001");

function App() {
  //befour login
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    isauth();
    share();
  }, [userName, room]);

  const connectToRoom = () => {
    window.localStorage.clear();
    setLoggedIn(true);
    window.localStorage.setItem("userName", JSON.stringify(userName));
    window.localStorage.setItem("room", JSON.stringify(room));
    if (userName && room) {
      socket.emit("join_room", { userName, room });
    }
  };
  const isauth = () => {
    const userName = window.localStorage.getItem("userName");
    const room = window.localStorage.getItem("room");
    if (userName && room) {
      socket.emit("is_auth", { userName, room });
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };
  const share = () => {
    // const result = window.localStorage.getItem("result");
    // return result;
    const columns = window.localStorage.getItem("columns");
    return columns;
  };
  return (
    <>
      <div className="App">
        {!loggedIn ? (
          <div className="logIn">
            <p className="text-primary"> {JSON.stringify(loggedIn)}</p>
            <div className="inputs">
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-sm example"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              >
                {" "}
                <option>Select player </option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
              <p className="text-primary"> {JSON.stringify(userName)}</p>
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-sm example"
                value={room}
                onChange={(event) => setRoom(event.target.value)}
              >
                {" "}
                <option>Select team </option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
              <p className="text-primary"> {JSON.stringify(room)}</p>
            </div>
            <button
              className="btn btn-block btn-primary mt-3"
              disabled={
                !userName ||
                !room ||
                userName === "Select player" ||
                room === "Select team"
              }
              onClick={connectToRoom}
            >
              {"Submit"}
            </button>
          </div>
        ) : (
          <MainPage
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            userName={userName}
            room={room}
            setUserName={setUserName}
            setRoom={setRoom}
            socket={socket}
          />
        )}
      </div>
    </>
  );
}

export default App;
