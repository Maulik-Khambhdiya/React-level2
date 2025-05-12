import { Box, Button, Grid } from '@mui/material'
import React from 'react'

const Tictactoe = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 ,padding:"150px 260px"}}>
                <Grid container spacing={1}>
                    <Grid size={4}>
                        <Button sx={{padding:"80px 40px",fontSize:"30px"}} variant="outlined">O</Button>
                    </Grid>
                    <Grid size={4}>
                       <Button sx={{padding:"80px 40px",fontSize:"30px"}} variant="outlined">X</Button>
                    </Grid>
                    <Grid size={4}>
                         <Button sx={{padding:"80px 40px",fontSize:"30px"}} variant="outlined">O</Button>
                    </Grid>
                     
                    

                </Grid>
            </Box>
        </>
    )
}

export default Tictactoe
