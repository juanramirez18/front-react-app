import { createSlice } from "@reduxjs/toolkit";


const userDataSlice = createSlice(
    {
        name:'userData',
        initialState:{
            token: null,
            isAuth: false,
            email: null,
            userName: null

        },
        reducers:{
            setSignIn:(state, action)=>{
                
                state.token = action.payload.token;
                state.isAuth = true;
                state.email = action.payload.email;
                state.userName = action.payload.userName
                localStorage.setItem("token", action.payload.token)
                

                
            },
            setLogOut:(state, action)=>{
                state.isAuth = false;
                localStorage.clear()


            }
          
        }

    }
);

export const {setSignIn, setLogOut} = userDataSlice.actions

export default userDataSlice.reducer