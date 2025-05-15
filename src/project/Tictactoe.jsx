import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'

const Tictactoe = () => {

 
    return (
        <>

          
                <Box sx={{ margin: "50px 0"}}>

                    <Typography variant="h1" component="h2" sx={{ fontSize: "60px", fontFamily: "cursive", textAlign: "center", margin: "50px 0" }}>
                        Tic Tac Toe
                    </Typography>

                    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>



                        <Box sx={{ height: "500px", width: "500px", display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center" }}>

                            <Button sx={{ height: "150px", width: "150px", fontSize: "70px", color: "black", boxShadow: "0 0 16px rgba(0, 0, 0, 0.3)", backgroundColor: "rgb(203, 145, 250)", textAlign: "center", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}></Button>

                            <Button sx={{ height: "150px", width: "150px", fontSize: "70px", color: "black", boxShadow: "0 0 16px rgba(0, 0, 0, 0.3)", backgroundColor: "rgb(203, 145, 250)", textAlign: "center", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}></Button>

                            <Button sx={{ height: "150px", width: "150px", fontSize: "70px", color: "black", boxShadow: "0 0 16px rgba(0, 0, 0, 0.3)", backgroundColor: "rgb(203, 145, 250)", textAlign: "center", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}></Button>

                            <Button sx={{ height: "150px", width: "150px", fontSize: "70px", color: "black", boxShadow: "0 0 16px rgba(0, 0, 0, 0.3)", backgroundColor: "rgb(203, 145, 250)", textAlign: "center", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}></Button>

                            <Button sx={{ height: "150px", width: "150px", fontSize: "70px", color: "black", boxShadow: "0 0 16px rgba(0, 0, 0, 0.3)", backgroundColor: "rgb(203, 145, 250)", textAlign: "center", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}></Button>

                            <Button sx={{ height: "150px", width: "150px", fontSize: "70px", color: "black", boxShadow: "0 0 16px rgba(0, 0, 0, 0.3)", backgroundColor: "rgb(203, 145, 250)", textAlign: "center", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}></Button>

                            <Button sx={{ height: "150px", width: "150px", fontSize: "70px", color: "black", boxShadow: "0 0 16px rgba(0, 0, 0, 0.3)", backgroundColor: "rgb(203, 145, 250)", textAlign: "center", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}></Button>

                            <Button sx={{ height: "150px", width: "150px", fontSize: "70px", color: "black", boxShadow: "0 0 16px rgba(0, 0, 0, 0.3)", backgroundColor: "rgb(203, 145, 250)", textAlign: "center", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}></Button>

                            <Button sx={{ height: "150px", width: "150px", fontSize: "70px", color: "black", boxShadow: "0 0 16px rgba(0, 0, 0, 0.3)", backgroundColor: "rgb(203, 145, 250)", textAlign: "center", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}></Button>


                        </Box>

                        
                    </Container>
                    <Box sx={{textAlign:"center",margin:"80px 0"}}>
                    <Button sx={{backgroundColor:"black",color:"rgb(203, 145, 250)",fontWeight:"600",padding:"5px 20px",fontSize:"30px",fontFamily:"monospace",textTransform:"capitalize"}}>Reset</Button>
                    </Box>               
                </Box>


        </>
    )
}

export default Tictactoe
