import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {
    Input,
    InputLabel,
    InputAdornment,
    FormControl,
    TextField,
    AccountCircle,
    OutlinedInput,
    IconButton,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';


export default function InputWithIcon() {

    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const [visibility, setVisibility] = useState(false)
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',

        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                border: 1,
                borderColor: 'gray',
                borderRadius: 2
            }} >
                <FormControl sx={{ m: 1, width: '70vh' }} variant="outlined">
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <OutlinedInput
                        id="username"
                        type={'text'}
                        value={loginData.username}
                        onChange={(e) => {
                            setLoginData({
                                ...loginData,
                                username: e.target.value
                            })
                        }}
                        label="username"
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '70vh' }} variant="outlined">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        inputProps={{
                            autoComplete: 'new-password',
                        }}
                        id="password"
                        type={visibility ? 'text' : 'password'}
                        value={loginData.password}
                        onChange={(e) => {
                            setLoginData({
                                ...loginData,
                                password: e.target.value
                            })
                        }}

                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setVisibility(!visibility)}
                                    edge="end"
                                >
                                    {visibility ?
                                        <VisibilityOff />
                                        : <Visibility />
                                    }
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <FormGroup sx={{
                    ml: 1,
                    mr: 1
                }}>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />} label="Remember me" />
                </FormGroup>
                <Button variant="contained"
                    sx={{
                        ml: 1,
                        mr: 1
                    }}

                    onClick={() => navigate('/home')}
                >Login</Button>
            </Box>
        </Box>
    );
}
