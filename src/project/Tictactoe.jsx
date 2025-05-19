import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'

const Tictactoe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
      
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXTurn ? 'X' : 'O';
        setBoard(newBoard);

        const win = checkWinner(newBoard);
        if (win) {
            setWinner(win);
        } else if (newBoard.every(cell => cell !== null)) {
            setWinner('Draw');
        } else {
            setIsXTurn(!isXTurn);
        }
    };

    const checkWinner = (board) => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (board[a] && board[a] == board[b] && board[a] == board[c]) {
                return board[a];
            }
        }

        return null;
    };

    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setIsXTurn(true);
        setWinner(null);
    };
    return (
        <>


            {/* <Box sx={{ margin: "50px 0" }}>

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
                <Box sx={{ textAlign: "center", margin: "80px 0" }}>
                    <Button sx={{ backgroundColor: "black", color: "rgb(203, 145, 250)", fontWeight: "600", padding: "5px 20px", fontSize: "30px", fontFamily: "monospace", textTransform: "capitalize" }}>Reset</Button>
                </Box>
            </Box> */}
            <Box sx={{ margin: "50px 0" }}>
                <Typography
                    variant="h1"
                    component="h2"
                    sx={{ fontSize: "60px", fontFamily: "cursive", textAlign: "center", margin: "50px 0" }}
                >
                    Tic Tac Toe
                </Typography>

                <Typography
                    variant="h4"
                    sx={{ textAlign: "center", marginBottom: "30px", fontFamily: "monospace" }}
                >
                    {winner ? `Player ${winner} wins!` : "Player 1's turn."}

                        
            
                </Typography>

                <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box
                        sx={{
                            height: "500px",
                            width: "500px",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "15px",
                            justifyContent: "center"
                        }}
                    >
                        {board.map((value, index) => (
                            <Button
                                key={index}
                                onClick={() => handleClick(index)}
                                sx={{
                                    height: "150px",
                                    width: "150px",
                                    fontSize: "70px",
                                    color: "black",
                                    boxShadow: "0 0 16px rgba(0, 0, 0, 0.3)",
                                    backgroundColor: "rgb(203, 145, 250)",
                                    textAlign: "center",
                                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                                    pointerEvents: winner ? "none" : "auto"
                                }}
                            >
                                {value}
                            </Button>
                        ))}
                    </Box>
                </Container>

                <Box sx={{ textAlign: "center", margin: "80px 0" }}>
                    <Button
                        onClick={handleReset}
                        sx={{
                            backgroundColor: "black",
                            color: "rgb(203, 145, 250)",
                            fontWeight: "600",
                            padding: "5px 20px",
                            fontSize: "30px",
                            fontFamily: "monospace",
                            textTransform: "capitalize"
                        }}
                    >
                        Reset
                    </Button>
                </Box>
            </Box>

        </>
    )
}

export default Tictactoe






















