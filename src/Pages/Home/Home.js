import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container'
import { useDispatch } from 'react-redux'
import FetchUserApi from '../../Redux/AsyncThunkApi/FetchUserApi'
import VersionInfo from './Components/VersionInfo'
import UpdateVersionApi from '../../Redux/AsyncThunkApi/UpdateVersionApi'
import Loading from '../../Components/Loading'
export default (props) => {
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        dispatch(UpdateVersionApi())
            .unwrap()
            .then(() => {
                setIsLoading(false)
                console.log('hello')
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
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
                {
                    isLoading ?
                        <Loading /> :
                        <VersionInfo />
                }
            </Box>
        </Container>
    )
}