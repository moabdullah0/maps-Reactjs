import React, { useRef } from "react";

const UseRefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const onSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log({ name, email });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input ref={nameRef} type="text" placeholder="Enter Name Here" />
        <label htmlFor="Email">Email</label>
        <input ref={emailRef} type="email" placeholder="Enter Email Here" />
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold px-5 py-2 rounded"
        >
          Submit
        </button>
      </form>
      <div></div>
    </div>
  );
};

export default UseRefForm;
