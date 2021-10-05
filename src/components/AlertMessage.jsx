import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


const AlertMessage = ({ errorMessage }) => {
    return (
        <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {errorMessage}
            </Alert>
        </Stack>
    )
}

export default AlertMessage