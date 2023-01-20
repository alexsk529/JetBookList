import React from 'react';
import Paper from '@mui/material/Paper'

const Error = ({ isError, setIsError }) => {
    React.useEffect(()=> {
        let timer;
        if (isError) {
            timer = setTimeout(()=> setIsError(false), 2500)
        }
        return (()=> clearTimeout(timer))
    },[isError])
    return (
        <>
            {
                isError ?
                    <Paper elevation={8} sx={{ backgroundColor: '#d32f2f', color: 'white', width: 230, textAlign: 'center', p: 1 }}>
                        Заполните все поля и загрузите картинку!
                    </Paper> :
                    null
            }
        </>
    );
}

export default Error;