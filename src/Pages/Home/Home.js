import { Box, Button } from '@mui/material'
import React from 'react'
import Container from '../../Components/Container'
import { useDispatch } from 'react-redux'
import FetchUserApi from '../../Redux/AsyncThunkApi/FetchUserApi'
export default (props) => {
    const dispatch = useDispatch()
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                Home Pages
                <Button
                    onClick={()=>dispatch(FetchUserApi())}
                >
                    Hello
                </Button>
            </Box>
        </Container>
    )
}
