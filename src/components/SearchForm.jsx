import { TextField, Button, Grid, ButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';

const SearchForm = ( { setCity, setLocalWeather, localWeather } ) =>{
    const [input, setInput] = useState('')

    const onChange = (e) => {
        const value = e.target.value
        setInput(value)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        setCity(input)
        setInput('')
    }

    const getLocalWeather = () =>{
        localWeather ? setLocalWeather(false) : setLocalWeather(true)
    }

    return(
        <form onSubmit={onSubmit}>
            <Grid container
            direction="row">
                <Grid item
                xs={12}
                sm={12}
                md={8}>
                    <TextField label="Search"
                    type="form"
                    onChange={onChange}
                    value={input}
                    onSubmit={onSubmit}
                    fullWidth={true}
                    sx={{
                        
                    }} />
                </Grid>
                <Grid item
                xs={12}
                sm={12}
                md={4}>
                    <ButtonGroup size="large" aria-label="large button group"
                    fullWidth={true}
                    sx={{height: "100%" }}>
                        <Button onClick={onSubmit}><Typography variant="button">Search</Typography></Button>
                        <Button onClick={getLocalWeather}><Typography variant="button" sx={{lineHeight:1}}>Current location</Typography></Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </form>
    )
}

export default SearchForm