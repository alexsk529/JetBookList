import React from 'react';
import './Book.css';

import { Paper, Typography } from "@mui/material";

const Book = ({ book }) => {
    return (
        <Paper
            sx={{ 
                backgroundColor: '#E8E3E8', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                p: 3,
                width: 280,
                height: 270
            }}
            elevation={8}
        >
            <Typography variant='body' align='left' sx={{ my: 0.5 }}>Автор: {book.author}</Typography>
            <Typography variant='body'>Название книги: {book.book}</Typography>

            <img className='image' src={book.image} alt="preview" />
        </Paper >
    );
}

export default Book;