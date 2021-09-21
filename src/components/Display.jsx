import { Box } from '@mui/material'
import CardItem from './CardItem'
import TitleSpinner from './TitleSpinner'
import Title from './Title'

const Display = ({ data, titleSpinner, searchError }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {
                    titleSpinner ? 
                    (
                        <TitleSpinner /> 
                    )
                    :
                    (
                        <Title data={data} searchError={searchError} />
                    )
                }
            <CardItem data={data}/>
        </Box>
    )
}

export default Display