import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import CardContent from '@mui/material/CardContent';

const Reviews = ({ reviews }) =>{

    const reversedArr = []

    newReverse(reviews)

    function newReverse (x){
        for (let i = 0; i < x.length; i++){
            reversedArr[i] = x[(x.length - 1) - i]
        }
        return reversedArr
     }

    return(
        <Grid container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start">
            {reversedArr.map(item=>{
                return (
                    <Grid item
                    sx={{mt: 2, width: '100%'}}
                    >
                        <Card>
                            <CardContent>
                                <Alert severity="success">{item.body}</Alert>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Reviews