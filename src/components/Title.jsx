import { Typography, Alert, AlertTitle  } from '@mui/material';
import Divider from '@mui/material/Divider';

const Title = ({ data, searchError }) => {

    const renderIfElse = (param) =>{
        if(param.cod === '400'){
            return (
                <Alert severity="error" sx={{ mt: 1.5 }}>
                    <AlertTitle>
                        Error
                    </AlertTitle>
                </Alert>
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
                    <Alert severity="error" sx={{ mt: 1.5 }}>
                        <AlertTitle>
                            Error
                        </AlertTitle>
                    </Alert>
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