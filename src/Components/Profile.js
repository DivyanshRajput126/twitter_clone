import React from "react";
import img from "../img/img.jpeg";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Avatar from "react-avatar";
import {useDispatch, useSelector} from 'react-redux';
import useGetUser from '../Hooks/useGetUser';
import toast from "react-hot-toast";
import axios from "axios";
import { USER_API_ENDPOINT } from "../Utils/Constant";
import { followingUpdate } from "../Redux/UserSlice";
import { getRefresh } from "../Redux/TweetSlice";

function Profile() {

  // hooks
  const {user, profile} = useSelector(store=>store.user);
  const dispatch = useDispatch();
  const {id} = useParams();
  useGetUser(id);

  const followandunfolowHandler = async () =>{
      if(user.following.includes(id)){
        try {
          // unfollow
          const res = await axios.post(`${USER_API_ENDPOINT}/unfollow/${id}`,{id:user?._id},{withCredentials:true});
          dispatch(followingUpdate(id));
          dispatch(getRefresh());
          toast.success(res.data.message);
        } catch (error) {
          toast.error(error.response.data.message);
          console.log(error);
        }
      }else{
        try{
          // follow
          const res = await axios.post(`${USER_API_ENDPOINT}/follow/${id}`,{id:user?._id},{withCredentials:true});
          dispatch(followingUpdate(id));
          dispatch(getRefresh());
          toast.success(res.data.message);
        }catch (error) {
          toast.error(error.response.data.message);
          console.log(error);
        }
      }
  } 


  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div>
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <IoMdArrowBack size="24px" />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">{profile?.name}</h1>
            <p className="text-gray-500 text-sm">10 Posts</p>
          </div>
        </div>
        <img src={img} alt="Profile-Image" />
        <div className="absolute top-52 ml-2 border-4 border-white rounded-full">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
            size="120"
            round={true}
          />
        </div>
        <div className="text-right m-4">
        {
          profile?._id === user?._id?( <button className="px-4 py-1 rounded-full border border-gray-400 hover:bg-gray-200 ">
            Edit Profile
          </button>)
          : (<button className="px-4 py-1 rounded-full border border-gray-400 bg-black text-white" onClick={followandunfolowHandler}>
            {user.following.includes(id)?"Following":"Follow"}
          </button>)
        }
          
        </div>
        <div className="m-4">
          <h1 className="font-bold text-xl">{profile?.name}</h1>
          <p className="text-sm">@{profile?.userName}</p>
        </div>
        <div className="m-4 text-sm text-justify">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            architecto minima magnam quasi debitis quae ratione fuga impedit
            dicta et commodi placeat ut veritatis aliquid distinctio laudantium,
            doloremque dolor mollitia beatae qui.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
