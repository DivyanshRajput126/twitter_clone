import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

function CreatePost() {
  return (
    <div className="w-[100%]">
      <div>
        <div className="flex items-center justify-evenly border-b border-gray-200">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg ">For You</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center p-4 py-3">
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
              placeholder="What is happening?"
              className="w-full outline-none border-none ml-2 text-xl"
            />
          </div>
          <div className="flex items-center justify-between my-4 border-b border-gray-300 p-4">
            <div>
              <CiImageOn size={"24px"} color="blue" />
            </div>
            <button className="bg-[#1D9BF0] px-4 py-1 border-none rounded-full text-white text-lg text-right">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreatePost;
