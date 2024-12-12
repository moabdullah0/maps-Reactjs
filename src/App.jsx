import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Login from "./Login";
import Counters from "./CounterState";
import ObjectState from "./ObjectState";
import ArrayState from "./ArrayState";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);
  return (
    <div className=" flex flex-col justify-center items-center">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn ? (
        "Welcome Back "
      ) : (
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
