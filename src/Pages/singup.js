import React from 'react'
// import style from '../Styles/main.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const Singup = () => {
    return (
        <div>
            <Box
                component="form"
                sx={{
                    width: '40%',
                    m: "auto",
                    mt: "50px",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "20px"

                }}
            >
                <Stack spacing={2} >

                    <TextField

                        required
                        id="outlined-required"
                        label="Username"
                        InputLabelProps={{ shrink: true }}

                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        type="password"
                        InputLabelProps={{ shrink: true }}

                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Confirm Password"
                        type="password"
                        InputLabelProps={{ shrink: true }}


                    />
                    <Button variant="contained" color="success">
                        Singup
                    </Button></Stack>
            </Box>



        </div>
    )
}
export default Singup