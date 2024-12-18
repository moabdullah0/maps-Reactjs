import React, { useState } from "react";

const UseStateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswords] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!name || !email) {
      setError("Both fields are required.");
      return;
    }

    setError("");
    console.log({ name, email, age, password });
  };

  return (
    <div className="h-screen">
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form
        onSubmit={onSubmit}
        className="flex justify-center items-center flex-col gap-5"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter Name Here"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPasswords(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Name Here"
          />
        </div>
        <div>
          <label htmlFor="name">Age</label>
          <input
            onChange={(e) => setAge(Number(e.target.value))}
            value={age}
            type="number"
            placeholder="Enter Name Here"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email Here"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold px-5 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseStateForm;
