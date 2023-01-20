import './App.css';
import BasicContainer from './Components/BasicContainer.jsx';
import { Box, Typography } from '@mui/material';
import NewBook from './Components/NewBook.jsx';
import Book from './Components/Book.jsx';
import { useSelector } from 'react-redux';

function App() {
    const books = useSelector(state => state.books)
    return (
        <>
            <BasicContainer
                width={1000}
                title="Список добавленных книг:"
            >
                {
                    books.length !== 0 ?
                        <Box
                            sx={{
                                my: 2,
                                mx: 1,
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 4,
                                width: '100%'
                            }}
                        >
                            {books.map((book, index) => {
                                return (
                                    <Book book={book} key={index} />
                                )
                            })}
                        </Box> :
                        <Typography color="primary" variant='body2'>Добавьте свою первую книгу...</Typography>
                }
            </BasicContainer>
            <BasicContainer
                width={400}
                title="Добавить книгу в список"
            >
                <NewBook />
            </BasicContainer>
        </>
    );
}

export default App;
