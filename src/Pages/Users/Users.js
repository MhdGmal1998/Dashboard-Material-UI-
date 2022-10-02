import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container'
import DataTable from './DataTable'
import TableStyle from './TableStyle'
import { useDispatch, useSelector } from 'react-redux'
import FetchUserApi from '../../Redux/AsyncThunkApi/FetchUserApi'

export default (props) => {
    const [rows, setRows] = useState(null)
    const row = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    useEffect(() => {
        if (isLoading) {
            dispatch(FetchUserApi())
                .then((data) => {
                    setIsLoading(false)
                })
                .catch((error) => {

                })
        }
    }, [dispatch, isLoading])
    return (
        <Container>
            {
                !isLoading ?
                    <DataTable
                        rows={row}
                    />
                    :
                    <h1>
                        Loading the Data from the Server api ...
                    </h1>
            }
        </Container>
    )
}
