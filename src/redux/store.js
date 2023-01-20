import booksReducer from './booksSlice.js';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        books: booksReducer
    }
})