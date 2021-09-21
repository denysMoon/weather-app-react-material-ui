import { Typography, Alert, AlertTitle  } from '@mui/material';
import Divider from '@mui/material/Divider';

const Title = ({ data, searchError }) => {
    return (
        <>
            {
                searchError ? (
                    <Alert severity="error" sx={{ mt: 1.5 }}>
                        {/* <Typography sx={{ mt: 1.5 }}
                            variant="h4" >
                            {searchError}
                        </Typography> */}
                        <AlertTitle>
                            Error
                        </AlertTitle>
                        {searchError}
                    </Alert>
                )
                    :
                    (
                        <>
                            <Typography sx={{ mt: 1.5 }}
                                variant="h4">{data.name}, <Typography component="span" variant="h4" sx={{ fontWeight: "200" }}>{data.sys.country}</Typography>
                            </Typography>
                            <Divider />
                        </>
                        
                    )
            }
        </>
    )
}

export default Title