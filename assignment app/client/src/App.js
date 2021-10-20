import React, { useState, useEffect } from "react";
import Register from "./component/Register";

import "./App.css";
import MainPage from "./component/mainpage/MainPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return <div className="App">{!loggedIn ? <Register /> : <MainPage />}</div>;
}

export default App;
