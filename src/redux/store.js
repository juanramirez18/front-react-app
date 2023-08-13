import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/userData";

export default configureStore({
    reducer:{
        userData: userDataSlice
    },
    devTools: process.env.NODE_ENV !== "production"
})