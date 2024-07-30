import React from "react";
import img from "../img/thread.png";
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "../Utils/Constant";
import toast from "react-hot-toast";
import { getOtherUsers, getProfile, getUser } from "../Redux/UserSlice";

function LeftSidebar() {
  const {user} = useSelector(store=>store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async() =>{
    try {
      const res = await axios.get(`${USER_API_ENDPOINT}/logout`,{withCredentials:true});
      navigate('/login');
      dispatch(getUser(null));
      dispatch(getOtherUsers(null));
      dispatch(getProfile(null));
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img width={"25px"} src={img} alt="Threads Logo" className="ml-5 my-2" />
        </div>
        {/* Home */}
        <Link to="/" className="my-4">
          <div className="flex items-center my-2 hover:bg-gray-200 px-4 py-2 rounded-full cursor-pointer">
            <div>
              <CiHome size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </div>
        </Link>
        {/* Explore */}
        <div className="my-4">
          <div className="flex items-center my-2 hover:bg-gray-200 px-4 py-2 rounded-full cursor-pointer">
            <div>
              <CiHashtag size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>
        </div>
        {/* Notification */}
        <div className="my-4">
          <div className="flex items-center my-2 hover:bg-gray-200 px-4 py-2 rounded-full cursor-pointer">
            <div>
              <IoMdNotifications size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Notification</h1>
          </div>
        </div>
        {/* Bookmark */}
        <div className="my-4">
          <div className="flex items-center my-2 hover:bg-gray-200 px-4 py-2 rounded-full cursor-pointer">
            <div>
              <CiBookmark size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Bookmark</h1>
          </div>
        </div>
        {/*  Profile */}
        <Link to={`/profile/${user?._id}`} className="my-4">
          <div className="flex items-center my-2 hover:bg-gray-200 px-4 py-2 rounded-full cursor-pointer">
            <div>
              <CiUser size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Profile</h1>
          </div>
        </Link>
        {/*  Log Out */}
        <div className="my-4" onClick={logoutHandler}>
          <div className="flex items-center my-2 hover:bg-gray-200 px-4 py-2 rounded-full cursor-pointer">
            <div>
              <IoIosLogOut size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Logout</h1>
          </div>
        </div>
        <button className="px-4 py-2 border-none text-md bg-[#1D9BF0] rounded-full w-full text-white font-bold">Post</button>
      </div>
    </div>
  );
}
export default LeftSidebar;
