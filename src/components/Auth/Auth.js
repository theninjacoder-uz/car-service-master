import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function Authentication() {
    const [authData, setAuthData] = useState({});
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const navigate = useNavigate();

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleLogin = () => {
        setOpen(false);
        authData.password = values.password;
        axios.post('http://localhost:8080/api/v1/auth/register', authData).then(res => {
            console.log(res);
            // if(res.status === 200)
            // localStorage.setItem("code", res.data.smsCode);
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("phoneNumber", res.data.phoneNumber);
            localStorage.setItem("accessToken", res.data.accessToken);
            navigate("/code-verification", {state: {code: res.data.smsCode, admin: res.data.admin}});
        })
    };

    const handleKey = (e) => {
        authData[e.target.name] = e.target.value;
        setAuthData({...authData});
        console.log(authData[e.target.name]);
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
                                    label="Ism"
                                    name="name"
                                    onChange={handleKey}
                                    required={true}
                                />
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                '& > :not(style)': {ml: 4, mt: 1},
                            }}
                            >
                                <TextField
                                    id="demo-helper-text-aligned"
                                    label="Telefon Nomer"
                                    name="phoneNumber"
                                    onChange={handleKey}
                                    required={true}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    '& > :not(style)': {ml: 4, mt: 1},
                                }}
                            >
                                <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </Box>
                            <Button sx={{ml: 25, border: 1}} onClick={handleLogin} autoFocus>
                                Login
                            </Button>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}



