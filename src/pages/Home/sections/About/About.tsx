import { Container, Grid, styled, Typography, Box } from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function About() {

    let boxStyles = {
        width: 400,
        height: 150,
        borderRadius: '8px',
        bgcolor: 'white',
        '&:hover': {
            bgcolor: 'secondary.light'
        },
        boxShadow: 3
    }

    const StyledAbout = styled("div")(() => ({
        height: '80vh'
    }))

    return (
        <div>
            
            <StyledAbout>
                <Container maxWidth='lg'>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Box>

                            <Typography variant="h2" textAlign={'center'}>About Me</Typography>

                            <Grid container display={'flex'} justifyContent={'center'} pt={2} spacing={4}>
                                <Grid size={{xs: 12, md: 4}} display={'flex'} justifyContent={'center'}>

                                    <Box sx={boxStyles}>
                                        <Box textAlign={'center'} pt={1}>
                                            <SchoolIcon />
                                            <Typography fontWeight={'900'} variant="subtitle1">Esperiência</Typography>
                                            <Typography>+1 Ano de desenvolvimento autodidata</Typography>
                                            <Typography>Cursando ensino médio</Typography>
                                        </Box>
                                    </Box>

                                </Grid>
                                <Grid size={{xs: 12, md: 4}} display={'flex'} justifyContent={'center'}>

                                    <Box sx={boxStyles}>
                                        <Box textAlign={'center'} pt={1}>
                                            <LightbulbIcon />
                                            <Typography fontWeight={'900'} variant="subtitle1">Esperiência</Typography>
                                            <Typography>+1 Ano de desenvolvimento autodidata</Typography>
                                            <Typography>Cursando ensino médio</Typography>
                                        </Box>
                                    </Box>

                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    
                    

                </Container>
            </StyledAbout>

        </div>
    )
}

export default About