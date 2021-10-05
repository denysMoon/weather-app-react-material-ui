import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AlertMessage from './AlertMessage'

const Title = ({ data, searchError }) => {

    const renderIfElse = (param) =>{
        if(param.cod === '400'){
            return (
                <AlertMessage errorMessage="Nothing to show"/>
            )
        } else {
            return (
                <>
                    <Typography sx={{ mt: 1.5 }}
                        variant="h4">{data.name}, <Typography component="span" variant="h4" sx={{ fontWeight: "200" }}>{data.sys.country}</Typography>
                    </Typography>
                    <Divider />
                </>
            )
        }
    }

    return (
        <>
            {
                searchError ? (
                    <AlertMessage errorMessage="Wrong city"/>
                )
                :
                (
                    renderIfElse(data)
                )
            }
        </>
    )
}

export default Title