import React, { useState } from "react";
import Todo from "./BackEndTest/TodoApi/Todo";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Navbar from "./Navbar";
import Todos from "./BackEndTest/TodoSessionTwo/Todos";

const App = () => {
  const [nav, setNav] = useState("home");
  return (
    <div>
      <Navbar setNav={setNav} />
      {nav == "home" && <HomePage />}
      {nav == "about" && <About />}
      {nav == "todo" && <Todos />}
      {/* <Todos/> */}
    </div>
  );
};

export default App;
