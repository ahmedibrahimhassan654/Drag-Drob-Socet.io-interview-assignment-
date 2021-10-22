import React, { useState, useEffect } from "react";

const Register = ({
  loggedIn,
  setLoggedIn,
  userName,
  setUserName,
  room,
  setRoom,
  connectToRoom,
}) => {
  function handleSelectChange(event) {
    //setSelectedClient(event.target.value);
    setUserName(event.target.value);
  }
  function handleSelectTeamChange(event) {
    // setSelectedTeam(event.target.value);
    setRoom(event.target.value);
  }

  return (
    <div className="logIn">
      <p className="text-primary"> {JSON.stringify(loggedIn)}</p>
      <div className="inputs">
        <select
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-sm example"
          value={userName}
          onChange={handleSelectChange}
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
          onChange={handleSelectTeamChange}
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
        onclick={connectToRoom}
      >
        {"Submit"}
      </button>
    </div>
  );
};

export default Register;
