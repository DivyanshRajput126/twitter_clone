import {createSlice} from '@reduxjs/toolkit';

const UserSilce = createSlice({
    name:"user",
    initialState:{
        user:null,
        otherUsers:null,
        profile:null
    },
    reducers:{
        // multiple actions
        getUser:(state,action)=>{
            state.user = action.payload;
        },
        getOtherUsers:(state,action)=>{
            state.otherUsers = action.payload;
        },
        getProfile:(state,action)=>{
            state.profile = action.payload;
        },
        followingUpdate:(state,action)=>{
            if(state.user.following.includes(action.payload)){
                // unfollow
                state.user.following = state.user.following.filter((itemId)=>{
                    return itemId !== action.payload;
                })
            }else{
                // follow
                state.user.following.push(action.payload);
            }
        }
    }
});

export const {getUser,getOtherUsers,getProfile,followingUpdate} = UserSilce.actions;
export default UserSilce.reducer;