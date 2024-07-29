import React from "react";
import img from "../img/img.jpeg";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

function Profile() {
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
            <h1 className="font-bold text-lg">Divyansh</h1>
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
          <button className="px-4 py-1 rounded-full border border-gray-400 hover:bg-gray-200">
            Edit Profile
          </button>
        </div>
        <div className="m-4">
          <h1 className="font-bold text-xl">Divyansh</h1>
          <p className="text-sm">@divyansh126</p>
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
