import { Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import Container from '../../Components/Container'
import { useDispatch } from 'react-redux'
import FetchUserApi from '../../Redux/AsyncThunkApi/FetchUserApi'
import VersionInfo from './Components/VersionInfo'
import UpdateVersionApi from '../../Redux/AsyncThunkApi/UpdateVersionApi'
export default (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(UpdateVersionApi())
    }, [])
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                {/* Home Pages
                <Button
                    // onClick={()=>dispatch(FetchUserApi())}
                >
                    Hello
                </Button> */}
                <VersionInfo />
            </Box>
        </Container>
    )
}