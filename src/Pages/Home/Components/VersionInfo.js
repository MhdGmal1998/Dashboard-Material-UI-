import React, { useState, useEffect } from 'react';
import {
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Box,
    Select,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { updateVersion } from '../../../Redux/AsyncThunkApi/UpdateVersionApi';

export default function BasicSelect() {


    const state = useSelector(state => state.version.versionInfo)
    const [mode, setMode] = useState(parseInt(state.waring_degree))
    const [msg, setMsg] = useState(state.message)
    const [version, setVersion] = useState(state.new_version)

    const dispatch = useDispatch()
    const handleMode = (e) => {
        setMode(e.target.value)
    }

    const handleMsg = (e) => {
        setMsg(e.target.value)
    }


    const handleVersion = (e) => {
        setVersion(e.target.value)
    }
    const handleUpdate = () => {
        
        dispatch(updateVersion({
            mode,
            msg,
            version
        }))
    }
    return (
        <Accordion sx={{ width: '100%' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Version Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                    <Box sx={{ display: { md: 'flex' }, width: '100%' }}>
                        <FormControl sx={{ m: 1, flex: 1, width: { xs: '100%' } }} variant="outlined">
                            <InputLabel id="mode-label">The Mode</InputLabel>
                            <Select
                                labelId="mode-label"
                                id="mode-select"
                                value={mode}
                                label="The Mode"
                                onChange={handleMode}
                            >
                                <MenuItem value={1}>Strict Mode </MenuItem>
                                <MenuItem value={0}>Flex Mode </MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, flex: 1, width: { xs: '100%' } }} variant="outlined">
                            {/* <InputLabel id='message-label'> Message </InputLabel> */}
                            <TextField id="message-input" variant="outlined" label='Message'
                                multiline={true}
                                value={msg}
                                onChange={handleMsg}
                            />

                        </FormControl>
                        <FormControl sx={{ m: 1, flex: 1, width: { xs: '100%' } }} variant="outlined">
                            {/* <InputLabel id='message-label'> Message </InputLabel> */}
                            <TextField id="version" variant="outlined" label='New Version'
                                value={version}
                                onChange={handleVersion}
                            />

                        </FormControl>
                        <FormControl sx={{ m: 1, flex: 1, width: { xs: '100%' } }} fullWidth variant="outlined">
                            <Button variant='contained' sx={{ height: '50px' }}
                                onClick={handleUpdate}
                            >
                                Save
                            </Button>

                        </FormControl>
                    </Box>
                </Box >
            </AccordionDetails>
        </Accordion>


    );
}
