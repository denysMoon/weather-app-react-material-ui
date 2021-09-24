import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import AirPollutionDisplay from './AirPollutionDisplay';

const AirContainer = ( { airPollution } ) =>{
    return(
        <>
            <Typography variant="h4">
                Air Pollution
            </Typography>
            {
                !airPollution ? (
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="error">
                            <AlertTitle>
                                There is no data about air pollution
                            </AlertTitle>
                        </Alert>
                    </Stack>
                )
                :
                (
                    <AirPollutionDisplay airPollution={airPollution} />
                )
            }
        </>
    )
}

export default AirContainer