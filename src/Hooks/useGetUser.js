import axios from 'axios';
import { USER_API_ENDPOINT } from '../Utils/Constant.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getProfile} from '../Redux/UserSlice.js';

const useGetUser = (id) => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchMyprofile = async () =>{
            try {
                const res = await axios.get(`${USER_API_ENDPOINT}/profile/${id}`,{
                    withCredentials:true
                });
                dispatch(getProfile(res.data.user));
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyprofile();
    },[id]);
}
export default useGetUser;