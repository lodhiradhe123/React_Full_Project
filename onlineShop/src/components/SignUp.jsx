import React, { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitData = () => {
    console.log("Data submitted", name, email, password);
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="">
      <div className=" w-1/2 m-auto flex flex-col gap-2 text-center p-10">
        <h1 className="text-3xl  font-bold">Regisetr !</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border-b border-black p-2 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your Email"
          className="w-full border-b border-black p-2 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your password"
          className="w-full border-b border-black p-2 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          onClick={submitData}
          className="w-1/3 m-auto px-4 py-2 border bg-blue-500 hover:bg-blue-700 hover:text-white"
        />
      </div>
    </div>
  );
}

export default SignUp;
