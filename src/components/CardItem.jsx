import { Card, CardContent, Typography, Grid, Paper, Divider } from '@mui/material'


const CardItem = ({data}) =>{
    return(
        <Card sx={{mt: 1.5}}>
            <Grid container>
                <Grid item
                xs={6}
                sm={4}
                md={3}>
                    <CardContent>
                        <Paper>
                            <Typography sx={{ fontSize: 14, padding:1 }} color="text.secondary" gutterBottom>
                                Temp
                            </Typography>
                            <Divider />
                            <Typography sx={{padding: 1}} variant="h5" component="div">
                                {data.main.temp.toFixed(1)}&#8451;
                            </Typography>
                        </Paper>
                    </CardContent>
                </Grid>
                <Grid item
                xs={6}
                sm={4}
                md={3}>
                    <CardContent>
                        <Paper>
                            <Typography sx={{ fontSize: 14, padding:1 }} color="text.secondary" gutterBottom>
                                Humidity
                            </Typography>
                            <Divider />
                            <Typography sx={{padding: 1}} variant="h5" component="div">
                                {data.main.humidity}%
                            </Typography>
                        </Paper>
                    </CardContent>                    
                </Grid>
                <Grid item
                xs={6}
                sm={4}
                md={3}>
                    <CardContent>
                        <Paper>
                            <Typography sx={{ fontSize: 14, padding:1 }} color="text.secondary" gutterBottom>
                                Wind
                            </Typography>
                            <Divider />
                            <Typography sx={{padding: 1}} variant="h5" component="div">
                                {data.wind.speed.toFixed(1)} m/s
                            </Typography>
                        </Paper>
                    </CardContent>                    
                </Grid>
                <Grid item
                xs={6}
                sm={4}
                md={3}>
                    <CardContent>
                        <Paper>
                            <Typography sx={{ fontSize: 14, padding:1 }} color="text.secondary" gutterBottom>
                                Sky
                            </Typography>
                            <Divider />
                            <Typography sx={{padding: 1}} variant="h5" component="div">
                                {data.weather[0].main[0].toUpperCase() +  data.weather[0].main.substring(1)}
                            </Typography>
                        </Paper>
                    </CardContent>                    
                </Grid>
                <Grid item
                xs={6}
                sm={4}
                md={3}>
                    <CardContent>
                        <Paper>
                            <Typography sx={{ fontSize: 14, padding:1 }} color="text.secondary" gutterBottom>
                                Feels like
                            </Typography>
                            <Divider />
                            <Typography sx={{padding: 1}} variant="h5" component="div">
                                {data.main.feels_like.toFixed(1)}&#8451;
                            </Typography>
                        </Paper>
                    </CardContent>                    
                </Grid>
                <Grid item
                xs={6}
                sm={4}
                md={3}>
                    <CardContent>
                        <Paper>
                            <Typography sx={{ fontSize: 14, padding:1 }} color="text.secondary" gutterBottom>
                                Min temp
                            </Typography>
                            <Divider />
                            <Typography sx={{padding: 1}} variant="h5" component="div">
                                {data.main.temp_min.toFixed(1)}&#8451;
                            </Typography>
                        </Paper>
                    </CardContent>                    
                </Grid>
                <Grid item
                xs={6}
                sm={4}
                md={3}>
                    <CardContent>
                        <Paper>
                            <Typography sx={{ fontSize: 14, padding:1 }} color="text.secondary" gutterBottom>
                                Max temp
                            </Typography>
                            <Divider />
                            <Typography sx={{padding: 1}} variant="h5" component="div">
                                {data.main.temp_max.toFixed(1)}&#8451;
                            </Typography>
                        </Paper>
                    </CardContent>                    
                </Grid>
                <Grid item
                xs={6}
                sm={4}
                md={3}>
                    <CardContent>
                        <Paper>
                            <Typography sx={{ fontSize: 14, padding:1 }} color="text.secondary" gutterBottom>
                                Clouds
                            </Typography>
                            <Divider />
                            <Typography sx={{padding: 1}} variant="h5" component="div">
                                {data.clouds.all}%
                            </Typography>
                        </Paper>
                    </CardContent>                    
                </Grid>
            </Grid>
        </Card>
    )
}

export default CardItem