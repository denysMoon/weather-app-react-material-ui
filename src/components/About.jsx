import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { linkGitHub } from '../utils/consts';

const About = () =>{
    return(
        <>
            <Typography variant="h5">
                About
            </Typography>
            <Divider />
            <Typography sx={{mt: 1.5}} >
                In the app you can search the weather data in your location, also in any place on the Earth.
            </Typography>
            <Typography sx={{mt: 1.5}} >
                Also in Air part you can learn about air pollution.
            </Typography>
            <Typography sx={{mt: 1.5}} >
                Visit <Link href={linkGitHub} target="_blank">GitHub</Link>.
            </Typography>
            <Divider />
        </>
    )
}

export default About