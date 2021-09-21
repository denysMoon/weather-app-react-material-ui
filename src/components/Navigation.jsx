import { Container, Grid, Link } from '@mui/material'
import { Link as Navi } from 'react-router-dom'

const Navigation = () => {
    return (
        <Container>
            <Grid container
            spacing="60px">
                <Grid item>
                    <Navi to="/">
                        <Link underline="none"
                            component="button"
                            color="white"
                            sx={{fontSize: '18px'}}>
                            Current weather
                        </Link>
                    </Navi>
                </Grid>
                <Grid item>
                    <Navi to="/air">
                       <Link underline="none"
                        component="button"
                        color="white"
                        sx={{fontSize: '18px'}}>
                            Air
                        </Link> 
                    </Navi>
                </Grid>
                <Grid item>
                    <Navi to="/about">
                        <Link underline="none"
                            component="button"
                            color="white"
                            sx={{fontSize: '18px'}}>
                                About
                        </Link>
                    </Navi>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Navigation