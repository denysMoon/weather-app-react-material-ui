import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const AirPollutionDisplay = ({ airPollution }) =>{
    return(
        <TableContainer component={Paper}>
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
                            2
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            NO2 (Nitrogen dioxide)
                        </TableCell>
                        <TableCell>
                            2
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            O3 (Ozone)
                        </TableCell>
                        <TableCell>
                            2
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            SO2 (Sulphur dioxide)
                        </TableCell>
                        <TableCell>
                            2
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            PM2.5 (Fine particles matter)
                        </TableCell>
                        <TableCell>
                            2
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            PM10 (Coarse particulate matter)
                        </TableCell>
                        <TableCell>
                            2
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            NH3 (Ammonia)
                        </TableCell>
                        <TableCell>
                            2
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AirPollutionDisplay