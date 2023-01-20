import { createSlice, current } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('books')) || []

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook(state, action) {
            const form = action.payload;
            const slice = (str, n) => {
                if (str.length > n) {
                    str = str.slice(0,n)
                    str = str + '...'
                }
                return str
            } 
            form.author = slice(form.author, 16)
            form.book = slice(form.book, 21)
            
            state.push(form);
            localStorage.setItem('books', JSON.stringify(current(state)))
        }
    }
})

export default booksSlice.reducer;

export const { addBook } = booksSlice.actions