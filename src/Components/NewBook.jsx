import React from 'react';
import Error from './Error.jsx'
import { Container, Box, TextField, Button } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';

import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice.js';

const NewBook = () => {
    const [form, setForm] = React.useState({})
    const [isError, setIsError] = React.useState(false)

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setForm({ ...form, image: reader.result });
        }
    }
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        previewFile(file)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.author || !form.book || !form.image) {
            setIsError(true)
            return
        }
        dispatch(addBook(form))
        e.target.reset();
        setForm({})
    }

    return (
        <Container
            sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', mt: 3 }}
            component="form" onSubmit={handleSubmit}
        >
            <Box sx={{ display: 'flex', gap: 3 }}>
                <TextField
                    id="standard-basic"
                    label="Имя автора"
                    variant="standard"
                    name="author"
                    onChange={handleChange}
                    autoComplete="off"
                />
                <TextField
                    id="standard-basic"
                    label="Название книги"
                    variant="standard"
                    name="book"
                    onChange={handleChange}
                    autoComplete="off"
                />
            </Box>
            <Button variant="contained" component="label" endIcon={<PhotoCamera />} sx={{ width: 230 }}>
                Загрузить обложку
                <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleFileChange}
                />
            </Button>
            <Button
                variant="contained"
                endIcon={<SaveIcon />}
                sx={{ width: 230 }}
                type="submit"
            >
                Сохранить книгу
            </Button>
            <Error isError={isError} setIsError={setIsError}/>
        </Container>
    );
}

export default NewBook;