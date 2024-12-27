import React from "react";

const InputFiled = ({ regiser, label, type, id, className }) => {
  return (
    <div>
      <label htmlFor="inputField" className={className}>
        {label}
      </label>
      <input
        id={id} 
        type={type}
        placeholder="Type something..."
        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        {...regiser(id)}
      />
    </div>
  );
};

export default InputFiled;
