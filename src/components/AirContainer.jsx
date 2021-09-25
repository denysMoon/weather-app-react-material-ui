import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import AirPollutionDisplay from './AirPollutionDisplay';

const AirContainer = ( { airPollution } ) =>{
    console.log(airPollution.length)
    const renderSwitch = (param) =>{
        if(!param){
            return (<Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">
                <AlertTitle>
                    There is no data about air pollution
                </AlertTitle>
            </Alert>
        </Stack>);           
        } else if (param.cod === '400'){
            return (<Alert severity="error">
                <AlertTitle>
                    Turn on location on your device
                </AlertTitle>
            </Alert>)
        } else if (!airPollution.length){
            return (<Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">
                <AlertTitle>
                    Something get wrong 
                </AlertTitle>
            </Alert>
        </Stack>)
        } else { return <AirPollutionDisplay airPollution={airPollution} />;           
        }
    }

    return(
        <>
            <Typography variant="h4">
                Air Pollution
            </Typography>
            {
                renderSwitch(airPollution) 
            }
        </>
    )
}

export default AirContainer