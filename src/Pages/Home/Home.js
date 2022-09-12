import { Box } from '@mui/material'
import React from 'react'
import Container from '../../Components/Container'
export default (props) => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                Home Pages
            </Box>
        </Container>
    )
}
