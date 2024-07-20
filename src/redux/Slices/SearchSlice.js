import { createSlice } from "@reduxjs/toolkit"

const SearchSlice = createSlice({
    name: "search",
    initialState: (" "),
    reducers: {
        search: (state, action) => {
            return state = action.payload;
        },
    },
})
export const { search } = SearchSlice.actions
export default SearchSlice.reducer;