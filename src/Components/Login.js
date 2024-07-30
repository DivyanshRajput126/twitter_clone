import React, { useState } from "react";
import img from "../img/thread.png";
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { USER_API_ENDPOINT } from "../Utils/Constant";
import { getUser } from "../Redux/UserSlice";

function Login() {
  const [isLogin, setisLogin] = useState(true);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // login
      try {
        const res = await axios.post(
          `${USER_API_ENDPOINT}/login`,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(getUser(res?.data?.user));
        console.log(res);
        if (res.data.success){
          navigate('/');
          toast.success(res.data.message)
        }
        // console.log(res);
      } catch (error) {
        toast.error(error.response.data.message);
      }
      // console.log(email,password);
    } else {
      // signup
      try {
        const res = await axios.post(
          `${USER_API_ENDPOINT}/register`,
          { name, userName, email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(res)
        if (res.data.success){
          setisLogin(true)
          toast.success(res.data.message)
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const loginSignupHandler = () => {
    setisLogin(!isLogin);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img src={img} alt="twitter-logo" width={"300px"} className="ml-5" />
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-bold text-6xl">Happening Now</h1>
          </div>
          <h1 className="mt-4 mb-2 text-2xl font-bold">
            {!isLogin ? "Register" : "Login"}
          </h1>
          <form className="flex flex-col w-[60%]" onSubmit={submitHandler}>
            {!isLogin ? (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                  required
                />
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username"
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                  required
                />
              </>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                  required
                />
              </>
            )}

            <button className="px-2 py-2 bg-[#1D9BF0] rounded-full text-white border-none text-lg my-4">
              {!isLogin ? "Register" : "Login"}
            </button>
            <h1>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span
                className="cursor-pointer text-blue-600"
                onClick={loginSignupHandler}
              >
                {" "}
                {!isLogin ? "Login" : "Register"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
