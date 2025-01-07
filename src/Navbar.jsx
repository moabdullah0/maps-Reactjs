import React from "react";

const Navbar = ({ setNav }) => {
  return (
    <div>
      <ul className="flex justify-around items-center bg-blue-700 h-16 text-white ">
        <button onClick={() => setNav("home")}>Home</button>
        <button onClick={() => setNav("todo")}>Todos</button>
        <button onClick={() => setNav("about")}>About</button>
      </ul>
    </div>
  );
};

export default Navbar;
