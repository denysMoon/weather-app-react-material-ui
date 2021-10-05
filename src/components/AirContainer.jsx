import Typography from '@mui/material/Typography';
import AirPollutionDisplay from './AirPollutionDisplay';
import AlertMessage from './AlertMessage';
import Divider from '@mui/material/Divider';

const AirContainer = ( { airPollution } ) =>{
    console.log(airPollution.length)
    const renderSwitch = (param) =>{
        if(!param){
            return <AlertMessage errorMessage="There is no data about air pollution"/>       
        } else if (param.cod === '400'){
            return <AlertMessage errorMessage="Turn on location on your device"/>
        } else if (!airPollution.list){
            return <AlertMessage errorMessage="Something get wrong"/>
        } else { 
            return <AirPollutionDisplay airPollution={airPollution} />;           
        }
    }

    return(
        <>
            <Typography variant="h5">
                Air Pollution
            </Typography>
            <Divider />
            {
                renderSwitch(airPollution) 
            }
        </>
    )
}

export default AirContainer