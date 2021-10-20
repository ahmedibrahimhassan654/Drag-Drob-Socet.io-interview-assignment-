import React, { useState, useEffect } from "react";

const Register = () => {
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");

  function handleSelectChange(event) {
    event.preventDefault();
    //setSelectedClient(event.target.value);
    setUserName(event.target.value);
  }
  function handleSelectTeamChange(event) {
    event.preventDefault();
    // setSelectedTeam(event.target.value);
    setRoom(event.target.value);
  }
  return (
    <div className="logIn">
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
        type="submit"
        className="btn btn-block btn-primary mt-3"
        disabled={
          !userName ||
          !room ||
          userName === "Select player" ||
          room === "Select team"
        }
      >
        {"Submit"}
      </button>
    </div>
  );
};

export default Register;
