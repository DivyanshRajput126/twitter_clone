import React from "react";
import CreatePost from "./CreatePost";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

function Feed() {
  const {tweets} = useSelector(store=>store.tweets);
  return (
    <div className="w-[50%] border border-gray-200 h-dvh">
      <div>
        <CreatePost />
        <div className="overflow-y-scroll h-[65vh]">
        {
          tweets?.map((tweet) => <Tweet key={tweet._id} tweet={tweet}/>)
        }
        </div>
        

      </div>
    </div>
  );
}
export default Feed;
