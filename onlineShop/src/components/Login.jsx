import { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
        navigate('/')
    }

  },[])

  const submitHandler = () => {
    // console.log(email, password);
    axios
      .post("http://localhost:3000/user/login", { email, password })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
          navigate('/')
        } else {
          console.log("Invalid Credentials");
          alert("invalid credentials");

        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="">
      <div className=" w-1/2 m-auto flex flex-col gap-2 text-center p-10">
        <h1 className="text-3xl  font-bold">Login !</h1>

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
          value="Login"
          onClick={submitHandler}
          className="w-1/3 m-auto px-4 py-2 border bg-blue-500 hover:bg-blue-700 hover:text-white font-bold mt-5 rounded"
        />
      </div>
    </div>
  );
}

export default Login;
