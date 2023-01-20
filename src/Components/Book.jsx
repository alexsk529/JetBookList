import React from 'react';
import './Book.css';

import { Paper, Typography, Box } from "@mui/material";

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
                height: 300
            }}
            elevation={8}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant='body' sx={{ my: 0.5, textDecoration: 'underline' }}>Автор:</Typography>
                <Typography variant='body'>{book.author}</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant='body' sx={{ my: 0.5, textDecoration: 'underline' }}>Название книги:</Typography>
                <Typography variant='body' >{book.book}</Typography>
            </Box>

            <img className='image' src={book.image} alt="preview" />
        </Paper >
    );
}

export default Book;