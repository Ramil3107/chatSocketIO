import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    chatMessages: ["hello"]
}

const chatSlice = createSlice({
    name: "chatSlice",
    initialState,
    reducers: {
        setChatMessages: (state, action) => {
            console.log(action.payload)
            state.chatMessages.push(action.payload)
        }
    }
})

export const { setChatMessages } = chatSlice.actions
export default chatSlice.reducer