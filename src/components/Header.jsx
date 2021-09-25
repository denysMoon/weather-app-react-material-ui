import { Container, AppBar, Toolbar, Grid, Typography, Link } from '@mui/material';
import Navigation from './Navigation';
import { Link as Navi } from 'react-router-dom';



const Header = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Grid container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between">
                        <Grid item>
                            <Navi to="/">
                                <Link color="#fff" 
                                    underline="none"
                                    component="button">
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1,
                                            cursor: 'pointer'}}>
                                                The Weather
                                        </Typography>    
                                </Link>
                            </Navi>
                        </Grid>
                        <Grid item>
                            <Navigation />
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header