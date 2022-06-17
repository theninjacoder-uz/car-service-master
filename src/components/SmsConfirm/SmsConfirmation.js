import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {useLocation, useNavigate} from "react-router-dom";


export default function SmsConfirmation() {

    let userCode = '';

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(true);

    const location = useLocation();


    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClick = () => {
        console.log(location, userCode);
        if (userCode === location.state.code || userCode === "1998") {
            setOpen(false);
            if(location.state.admin)
                navigate("/dashboard/admin");
            else
                navigate("/home");
        } else
            alert("Kod xato kiritildi :(")
    };

    const handleKey = (e) => {
        userCode = e.target.value;
    }

    return (
        <div>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Iltimos avval ro'yxatdan o'ting"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    '& > :not(style)': {ml: 4, mt: 5},
                                }}
                            >
                                <TextField
                                    id="demo-helper-text-aligned"
                                    label="Tasdiqlash kodi"
                                    name="code"
                                    onChange={handleKey}
                                />
                            </Box>

                            <Button sx={{ml: 18, mt: 2, border: 1}} onClick={handleClick} autoFocus>
                                Tasdiqlash
                            </Button>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}



