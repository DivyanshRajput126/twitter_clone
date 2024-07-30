import React, { useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import useOtherUsers from '../Hooks/useOtherUsers';
import { useSelector } from 'react-redux';
import useGetTweet from '../Hooks/useGetTweets';

const Home = () => {
  const {user,otherUsers} = useSelector(store=>store.user);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user){
      navigate('/login');
    }
  });
  
  //  custom hooks
  useOtherUsers(user?._id);
  useGetTweet(user?._id);

  return (
    <div className='flex justify-between w-[80%] mx-auto h-dvh'>
    <LeftSidebar/>
      <Outlet/>
      <RightSidebar otherUsers={otherUsers}/>
    </div>
  )
}
export default Home;