import * as React from 'react';

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


export default function BasicSelect() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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
                                value={age}
                                label="The Mode"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Strict Mode </MenuItem>
                                <MenuItem value={0}>Flex Mode </MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, flex: 1, width: { xs: '100%' } }} variant="outlined">
                            {/* <InputLabel id='message-label'> Message </InputLabel> */}
                            <TextField id="message-input" variant="outlined" label='Message'
                                multiline={true}
                            />

                        </FormControl>
                        <FormControl sx={{ m: 1, flex: 1, width: { xs: '100%' } }} variant="outlined">
                            {/* <InputLabel id='message-label'> Message </InputLabel> */}
                            <TextField id="version" variant="outlined" label='New Version' />

                        </FormControl>
                        <FormControl sx={{ m: 1, flex: 1, width: { xs: '100%' } }} fullWidth variant="outlined">
                            <Button variant='contained' sx={{ height: '50px' }}>
                                Save
                            </Button>

                        </FormControl>
                    </Box>

                </Box >
            </AccordionDetails>
        </Accordion>


    );
}
