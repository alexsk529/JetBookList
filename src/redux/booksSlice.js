import { createSlice, current } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('books')) || []

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook(state, action) {
            state.push(action.payload);
            localStorage.setItem('books', JSON.stringify(current(state)))
        }
    }
})

export default booksSlice.reducer;

export const { addBook } = booksSlice.actions