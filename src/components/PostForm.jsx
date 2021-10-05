import { TextField, Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { linkServer } from '../utils/consts';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const PostForm = ({ setNewReview, newReview }) =>{
    const [input, setInput] = useState('')

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const onSubmit = e =>{
        e.preventDefault()
        fetch( `${linkServer}/reviews`, {
            method: "POST",
            body: JSON.stringify({'body': input}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
        setInput('')
        newReview ? setNewReview(false) : setNewReview(true)
    }

    const onChange = e =>{
        const value = e.target.value
        setInput(value)
    }

    return(
        <form onSubmit={onSubmit}>
            <Grid container
            direction="row"
            sx={{mt: 1.5}}>
                <Grid item xs={12}>
                    <TextField label="Type here"
                    type="form"
                    onChange={onChange}
                    value={input}
                    onSubmit={onSubmit}
                    fullWidth={true}></TextField>
                </Grid>
                <Grid item
                xs={12}
                sx={{mt:1.5, height: '50px'}} >
                    <Grid container
                    sx={{height: '100%'}}
                    justifyContent="space-between" >
                        <FormGroup>
                            <FormControlLabel control={<Checkbox {...label} defaultChecked />} label="Show your feedback for all" />
                        </FormGroup>
                        <Button onClick={onSubmit}
                        sx={{height:'100%'}}
                        variant="outlined" >
                            <Typography variant="button" sx={{lineHeight:1}}>Post</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default PostForm