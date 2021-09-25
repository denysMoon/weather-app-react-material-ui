import { Box } from '@mui/material'
import CardItem from './CardItem'
import TitleSpinner from './TitleSpinner'
import Title from './Title'

const Display = ({ data, titleSpinner, searchError }) =>{

    const renderIfElse = (param) =>{
        if(param.cod === '400'){
            return
        } else {
            return <CardItem data={data}/>
        }
    }

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
            {renderIfElse(data)}
        </Box>
    )
}

export default Display