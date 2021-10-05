import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { linkWiki } from '../utils/consts';
import { styled } from '@mui/material/styles';


const TableRowStyled = styled(TableRow)(({ theme }) => ({
    background: theme.palette.primary.main
  }));

const TableRowMainStyled = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:last-child td, &:last-child th': {
        border: 0,
      },
}));


const AirPollutionDisplay = ({ airPollution }) =>{
    return(
        <>
            <TableContainer component={Paper} sx={{mt:1.5}}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRowStyled>
                            <TableCell>
                                <Typography>
                                    Component
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>
                                    Сoncentration
                                </Typography>
                            </TableCell>
                        </TableRowStyled>
                    </TableHead>
                    <TableBody>
                        <TableRowMainStyled>
                            <TableCell>
                                Carbon monoxide CO 
                            </TableCell>
                            <TableCell>
                                {airPollution.list[0].components.co} μg/m<sup>3</sup>
                            </TableCell>
                        </TableRowMainStyled>
                        <TableRowMainStyled>
                            <TableCell>
                                Nitrogen monoxide NO
                            </TableCell>
                            <TableCell>
                                {airPollution.list[0].components.no} μg/m<sup>3</sup>
                            </TableCell>
                        </TableRowMainStyled> 
                        <TableRowMainStyled>      
                            <TableCell>
                                Nitrogen dioxide NO<sub>2</sub>
                            </TableCell>
                            <TableCell>
                                {airPollution.list[0].components.no2} μg/m<sup>3</sup>
                            </TableCell>
                        </TableRowMainStyled>
                        <TableRowMainStyled>
                            <TableCell>
                                Ozone O<sub>3</sub>
                            </TableCell>
                            <TableCell>
                                {airPollution.list[0].components.o3} μg/m<sup>3</sup>
                            </TableCell>
                        </TableRowMainStyled>
                        <TableRowMainStyled>
                            <TableCell>
                                Sulphur dioxide SO<sub>2</sub>
                            </TableCell>
                            <TableCell>
                                {airPollution.list[0].components.so2} μg/m<sup>3</sup>
                            </TableCell>
                        </TableRowMainStyled>
                        <TableRowMainStyled>
                            <TableCell>
                                Fine particles matter PM<sub>1.5</sub>
                            </TableCell>
                            <TableCell>
                                {airPollution.list[0].components.pm2_5} μg/m<sup>3</sup>
                            </TableCell>
                        </TableRowMainStyled>
                        <TableRowMainStyled>
                            <TableCell>
                                Coarse particulate matter PM<sub>10</sub>
                            </TableCell>
                            <TableCell>
                                {airPollution.list[0].components.pm10} μg/m<sup>3</sup>
                            </TableCell>
                        </TableRowMainStyled>
                        <TableRowMainStyled>
                            <TableCell>
                                Ammonia NH<sub>2</sub>
                            </TableCell>
                            <TableCell>
                                {airPollution.list[0].components.nh3} μg/m<sup>3</sup>
                            </TableCell>
                        </TableRowMainStyled>
                        <TableRowMainStyled>
                            <TableCell>
                                Air Quality index level
                            </TableCell>
                            <TableCell>
                                {airPollution.list[0].main.aqi}
                            </TableCell>
                        </TableRowMainStyled>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography valiant="h5" sx={{mt: 2}}>
                Please follow <Link href={linkWiki} target="_blank">this link</Link> to learn more about calculation of Air Quality index.
            </Typography>
        </>
    )
}

export default AirPollutionDisplay