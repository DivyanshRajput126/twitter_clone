import axios from 'axios';
import { USER_API_ENDPOINT } from '../Utils/Constant.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getOtherUsers} from '../Redux/UserSlice.js';

const useOtherUsers = (id) => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchOtherUsers = async () =>{
            try {
                const res = await axios.get(`${USER_API_ENDPOINT}/otheruser/${id}`,{
                    withCredentials:true
                });
                dispatch(getOtherUsers(res.data.otherUsers));
            } catch (error) {
                console.log(error)
            }
        }
        fetchOtherUsers();
    },[id]);
}
export default useOtherUsers;