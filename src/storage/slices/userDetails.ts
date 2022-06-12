import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    details: {}
}
const userDetails = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        setDetails(state, { payload }) {
            state.details = payload
        }
    }

})
export const { setDetails } = userDetails.actions
export default userDetails.reducer