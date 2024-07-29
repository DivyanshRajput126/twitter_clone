import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

function RightSidebar() {
  return (
    <div className="w-[25%] mt-2">
      <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none w-full">
        <CiSearch />
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent px-2"
        />
      </div>
      <div className="p-2  bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg my-3">Who to Follow?</h1>
        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
                size="40"
                round={true}
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Divyansh</h1>
              <p className="text-sm">@divyansh126</p>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 ml-4 bg-black text-white rounded-full">
              Profile
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
                size="40"
                round={true}
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Divyansh</h1>
              <p className="text-sm">@divyansh126</p>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 ml-4 bg-black text-white rounded-full">
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightSidebar;
