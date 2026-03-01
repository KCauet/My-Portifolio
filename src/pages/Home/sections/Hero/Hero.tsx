import { Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/unknown.webp"

function Hero() {

  // Aqui temos dois exemplos de um uso da biblioteca Material UI
  // Onde criei 2 "classes" que se indentificam como as classes div e img
  // Que recebem caracteristicas especiais assemelhando-se as classes de css
  // até agora não sei o porque do uso mas, ele é bem especifico na hora de usar do que as classes em sí
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black"
  }))

  const StyledImg = styled("img")(() => ({
    borderRadius: "50%",
    width: '30%'
  }))

  return (
    <div>

      <StyledHero>
        
        <Grid container spacing={2}>
          <Grid size={{xs: 8, md: 4}}>
            <p>Halo :3</p>
          </Grid>
          <Grid size={{xs: 4, md: 4}}>
            <p>Haloooo :3</p>
          </Grid>
          <Grid size={{xs: 8, md: 4}}>
            <p>Halo :3</p>
          </Grid>
          <Grid size={{xs: 4, md: 4}}>
            <p>Haloooo :3</p>
          </Grid>
        </Grid>

        <StyledImg src={Avatar} />
      </StyledHero>
      
    </div>
  )
}

export default Hero
