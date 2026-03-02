import { Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/unknown.webp"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";

function Hero() {

  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh"
  }))

  const StyledImg = styled("img")(() => ({
    borderRadius: "50%",
    width: "100%"
  }))

  return (
    <div>

      <StyledHero>
        
        <Container maxWidth={'lg'}>
          <Grid container spacing={2}>
            <Grid size={{xs: 12, md: 4}}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid size={{xs: 12, md: 8}}>

              <Typography color="primary.contrastText" variant="h1" textAlign={"center"}>Keirrison Cauet</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>I'm an amateur front end dev</Typography>
              
              <Grid container display={'flex'} justifyContent={'center'}>

                <Grid size={{xs: 12, md: 4}} display={'flex'} justifyContent={'center'}>
                  <StyledButton>
                    <DownloadIcon />
                    Download CV
                  </StyledButton>
                </Grid>

                <Grid size={{xs: 12, md: 4}} display={'flex'} justifyContent={'center'}>
                  <StyledButton>
                    <EmailIcon />
                      Contact Me
                  </StyledButton>
                </Grid>

              </Grid>
              
            </Grid>
          </Grid>
        </Container>
        
      </StyledHero>
      
    </div>
  )
}

export default Hero
