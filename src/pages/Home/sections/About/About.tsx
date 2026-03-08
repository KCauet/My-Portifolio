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

    let largerBoxStyles = {
        width: '80%',
        padding: '15px',
        minHeight: 140,
        borderRadius: '2px',
        boxShadow: 5
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
                                            <Typography fontWeight={'900'} variant="subtitle1">Projetos</Typography>
                                            <Typography>+5 Projetos feitos e postados no github</Typography>
                                            <Typography>Projetos feitos além do escopo</Typography>
                                            <Typography>Front End</Typography>
                                        </Box>
                                    </Box>
                                    
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Box sx={largerBoxStyles} textAlign={'center'} mt={'30px'}>
                            <Typography variant="descText">Olá!, me chamo Keirrison Cauet De Oliveira Sousa e sou um estudante de ensino médio, 3° ano.</Typography>
                            <Typography>Moro em amontada e desde o meu primeiro contato com a programação eu fiquei bem curioso e fascinado por ela, queria entender o porque e como a programação é.</Typography>
                            <Typography>Também tenho boas espectativas e experiência para o futuro, eu sei que será uma caminhada dificil mas, eu acredito que tenho potencial.</Typography>
                            <Typography>Comecei na área da programação com a linguagem python, que futuramente, me acomodei no front end usando React, mas ainda pretendo ser fullstack um dia.</Typography>
                        </Box>
                    </Box>                    

                </Container>
            </StyledAbout>

        </div>
    )
}

export default About