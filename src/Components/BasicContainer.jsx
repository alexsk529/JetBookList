import React from 'react';
import { Paper, Typography, Container } from '@mui/material'

const BasicContainer = ({ width, title, children }) => {
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', mt:3, mb:2 }}>
            <Paper elevation={8} sx={{ maxWidth: width, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                <Typography variant="h6">
                    {title}
                </Typography>
                {children}
            </Paper>
        </Container>
    );
}

export default BasicContainer;