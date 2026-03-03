import { Container, Grid, styled, Typography, Box } from "@mui/material"
import Avatar from "../../../../assets/images/unknown.webp"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

function Hero() {

  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: { // <= mobile, Mediaquery com typescript
      paddingTop: '100px'
    },
    [theme.breakpoints.up('md')]: { // >= mobile
      paddingTop: '0'
    }
  }))

  const StyledImg = styled("img")(({theme}) => ({
    borderRadius: "50%",
    width: "80%",
    border: `2px solid ${theme.palette.primary.contrastText}`
  }))

  return (
    <div>

      <StyledHero>
        
        <Container maxWidth={'lg'}>
          <Grid container spacing={2}>
            <Grid size={{xs: 12, md: 5}}>
              <Box position='relative'>
                <Box position='absolute' width={'150%'} top={-100} right={0} >
                  <AnimatedBackground />
                </Box>
                <Box position={'relative'} textAlign={'center'}>
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
              
            </Grid>
            <Grid size={{xs: 12, md: 7}}>

              <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Keirrison Cauet</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>I'm an amateur front end dev</Typography>
              
              <Grid container display={'flex'} justifyContent={'center'} spacing={3} pt={3}>

                <Grid size={{xs: 12, md: 4}} display={'flex'} justifyContent={'center'}>
                  <StyledButton onClick={() => console.log('Download')}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>

                <Grid size={{xs: 12, md: 4}} display={'flex'} justifyContent={'center'}>
                  <StyledButton onClick={() => console.log('Contact')}>
                    <EmailIcon />
                    <Typography>Contact Me</Typography>
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
