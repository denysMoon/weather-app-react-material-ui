import { Container, AppBar, Toolbar, Grid, Typography } from '@mui/material';
import Navigation from './Navigation'



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
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                                The Weather
                            </Typography>  
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