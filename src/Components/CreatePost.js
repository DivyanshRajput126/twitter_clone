import React, { useState } from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import axios from 'axios';
import toast from 'react-hot-toast';
import {useDispatch, useSelector} from 'react-redux';
import { getIsActive, getRefresh } from "../Redux/TweetSlice";
import { TWEET_API_ENDPOINT } from "../Utils/Constant";

function CreatePost() {
  const [desc,setDesc] = useState('');
  const {user} = useSelector(store=>store.user);
  const {isActive} = useSelector(store=>store.tweets);
  const dispatch = useDispatch();

  const submitHandler = async () =>{
    try {
      const res = await axios.post(`${TWEET_API_ENDPOINT}/create`,{description:desc,id:user?._id},{
        headers:{
          'Content-Type': 'application/json'
        },
        withCredentials:true
      });
      dispatch(getRefresh());
      if (res.data.success){
        toast.success("Post Created Successfully");
        setDesc('');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  const forYouHandler =() =>{
    dispatch(getIsActive(true));
  }
  const followingHandler = () => {
    dispatch(getIsActive(false));
  }
  return (
    <div className="w-[100%]">
      <div>
        <div className="flex items-center justify-evenly border-b border-gray-200">
          <div className={`${isActive?"border-b-4 border-blue-600":null} cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`} onClick={forYouHandler}>
            <h1 className="font-semibold text-gray-600 text-lg ">For You</h1>
          </div>
          <div className={`${isActive?null:"border-b-4 border-blue-600"} cursor-pointer hover:bg-gray-200 w-full text-center p-4 py-3`} onClick={followingHandler}>
            <h1 className="font-semibold text-gray-600 text-lg">Following</h1>
          </div>
        </div>
        <div>
          <div className="flex items-center p-4">
            <div>
              <Avatar
                src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
                size="40"
                round={true}
              />
            </div>
            <input
              type="text"
              placeholder="What is happening?" value={desc} onChange={(e)=>setDesc(e.target.value)}
              className="w-full outline-none border-none ml-2 text-xl"
            />
          </div>
          <div className="flex items-center justify-between my-4 border-b border-gray-300 p-4">
            <div>
              <CiImageOn size={"24px"} color="blue" />
            </div>
            <button className="bg-[#1D9BF0] px-4 py-1 border-none rounded-full text-white text-lg text-right" onClick={submitHandler}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreatePost;
