import { Box, Container, Grid, Link } from '@mui/material'
import React from 'react'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'
import CircleIcon from '@mui/icons-material/Circle';



const Ricky = () => {


  const Data = [
    { img: img1, name: "Antenna Morty", alive: "Alive - Human", location: "Citadel of Ricks", firstseen: "Close Rick-counters of the Rick Kind" },
    { img: img2, name: "Pawnshop Clerk", alive: "Alive - Alien", location: "Pawn Shop Planet", firstseen: "Raising Gazorpazorp" },
    { img: img3, name: "Fascist Shrimp Morty", alive: "Alive - Animal", location: "Earth (Fascist Shrimp Dimension)", firstseen: "Edge of Tomorty: Rick, Die, Rickpeat" },
    { img:  img4, name: "Ethan", alive: "Alive - Human", location: "Earth (Replacement Dimension)", firstseen: "Get Schwifty" },
    { img: img5, name: "Quantum Rick", alive: "unknown - Human", location: "Rick's Memories", firstseen: "Close Rick-counters of the Rick Kind" },
    { img: img6, name: "Angry Glorzo", alive: "Dead - Alien", location: "Glorzo Asteroid", firstseen: "Promortyus" }]

  return (
    <>

      <h1 style={{ letterSpacing:"1px",fontFamily: "fantasy", fontSize: "60px", textAlign: "center", fontWeight: "300" }}>The Rick and Morty API</h1>

      <Box sx={{ backgroundColor: "rgb(32, 35, 41)", padding: "81px 0" }}>
        <Container>
          <Box sx={{ color: "white" }}>
            <Grid container spacing={2}>

              {
                Data.map((el, index) => (
                  <Grid size={6}>

                    <Grid container spacing={0} sx={{ overflow: "hidden", borderRadius: "15px", backgroundColor: "rgb(39, 43, 51)" }}>
                      <Grid size={5} >
                        <img src={el.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </Grid>

                      <Grid size={7} sx={{ padding: "13.5px" }}>

                        <Link sx={{ textDecoration: "none", fontWeight: "700", color: "white", fontSize: "18px", ":hover": { color: "rgb(255, 152, 0)" } }}><h2 style={{ margin: "0", fontWeight: "800" }}>{el.name}</h2></Link>
                        <span style={{ listStyle: "circle", display: "block", fontWeight: "500" }}> <CircleIcon sx={{ color: "#55CC44", fontSize: "12px" }} /> {el.alive}</span>

                        <span style={{ marginTop: "20px", listStyle: "circle", display: "block", fontWeight: "500", color: "#9E9E9E" }}>Last known location:</span>
                        <Link sx={{ textDecoration: "none", color: "white", fontSize: "19px", ":hover": { color: "rgb(255, 152, 0)" } }}><h4 style={{ margin: "0", fontWeight: "400" }}>{el.location}</h4></Link>

                        <span style={{ marginTop: "20px", listStyle: "circle", display: "block", fontWeight: "500", color: "#9E9E9E" }}>First seen in:</span>
                        <Link sx={{ textDecoration: "none", color: "white", fontSize: "18px", ":hover": { color: "rgb(255, 152, 0)" } }}><h4 style={{ margin: "0", fontWeight: "400" }}>{el.firstseen}</h4></Link>
                      </Grid>


                    </Grid>

                  </Grid>
                ))
              }

            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Ricky
