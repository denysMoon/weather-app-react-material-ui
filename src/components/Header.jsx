import { Container, AppBar, Toolbar, Button, Typography } from '@mui/material';



const Header = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                        The Weather
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header