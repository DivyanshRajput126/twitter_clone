import axios from "axios";
import { TWEET_API_ENDPOINT } from "../Utils/Constant.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets } from "../Redux/TweetSlice.js";

const useGetTweet = (id) => {
    const dispatch = useDispatch();
    const { refresh, isActive } = useSelector((store) => store.tweets);

    const fetchTweet = async () => {
        try {
            const res = await axios.get(`${TWEET_API_ENDPOINT}/getalltweets/${id}`, {
                withCredentials: true,
            });
            dispatch(getAllTweets(res.data.tweets));
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    
    const followingTweetHandler = async () => {
        try {
            const res = await axios.get(`${TWEET_API_ENDPOINT}/getfollowingtweets/${id}`,{ withCredentials: true });
            dispatch(getAllTweets(res.data.tweets));
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        if (isActive){
            fetchTweet();
        }else{
            followingTweetHandler();
        }
    }, [isActive,refresh]);
};
export default useGetTweet;
