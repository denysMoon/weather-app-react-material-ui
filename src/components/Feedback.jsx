import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TitleSpinner from './TitleSpinner';
import Reviews from './Reviews';
import PostForm from './PostForm'

const Feedback = ( { titleSpinner, reviews, setNewReview, newReview } ) =>{
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" sx={{mt: 1.5}}>
                Reviews
            </Typography>
            <Divider />
            <PostForm setNewReview={setNewReview} newReview={newReview} />
            <Divider sx={{mt: 1.5}} />
            {
                titleSpinner ? (
                    <TitleSpinner />
                )
                :
                (
                    <Reviews reviews={reviews}
                    newReview={newReview}
                    setNewReview={setNewReview} />
                )
            }
            <Divider />       
        </Box>
    )
}

export default Feedback