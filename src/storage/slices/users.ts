import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userList: []
}
const users = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser(state, { payload }) {
            state.userList = payload
        }
    }
})
export const { setUser } = users.actions
export default users.reducer
