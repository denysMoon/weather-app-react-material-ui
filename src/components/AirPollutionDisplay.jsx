import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

// Indexes color
import { green } from '@mui/material/colors';


const AirPollutionDisplay = ({ airPollution }) =>{
    return(
        <TableContainer component={Paper} sx={{mt:1.5}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Component
                        </TableCell>
                        <TableCell>
                            Сoncentration
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            CO (Carbon monoxide)
                        </TableCell>
                        <TableCell>
                            {airPollution.list[0].components.co} μg/m3
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            NO (Nitrogen monoxide)
                        </TableCell>
                        <TableCell>
                            {airPollution.list[0].components.no} μg/m3
                        </TableCell>
                    </TableRow> 
                    <TableRow>      
                        <TableCell>
                            NO2 (Nitrogen dioxide)
                        </TableCell>
                        <TableCell>
                            {airPollution.list[0].components.no2} μg/m3
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            O3 (Ozone)
                        </TableCell>
                        <TableCell>
                            {airPollution.list[0].components.o3} μg/m3
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            SO2 (Sulphur dioxide)
                        </TableCell>
                        <TableCell>
                            {airPollution.list[0].components.so2} μg/m3
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            PM2.5 (Fine particles matter)
                        </TableCell>
                        <TableCell>
                            {airPollution.list[0].components.pm2_5} μg/m3
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            PM10 (Coarse particulate matter)
                        </TableCell>
                        <TableCell>
                            {airPollution.list[0].components.pm10} μg/m3
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            NH3 (Ammonia)
                        </TableCell>
                        <TableCell>
                            {airPollution.list[0].components.nh3} μg/m3
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Air Quality index level
                        </TableCell>
                        <TableCell>
                            {airPollution.list[0].main.aqi}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AirPollutionDisplay