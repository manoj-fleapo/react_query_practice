import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/users"
import userDetails from "./slices/userDetails";
const store = configureStore({
    reducer: {
        users,
        userDetails
    }
})
export default store