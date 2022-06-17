import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {StaticDatePicker} from '@mui/x-date-pickers/StaticDatePicker';
import {PickersDay} from '@mui/x-date-pickers/PickersDay';
import endOfWeek from 'date-fns/endOfWeek';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';
import axios from "axios";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Button} from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import ReactDOM from "react-dom/client";

const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) =>
        prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({theme, dayIsBetween, isFirstDay, isLastDay}) => ({
    ...(dayIsBetween && {
        borderRadius: 0,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.primary.dark,
        },
    }),
    ...(isFirstDay && {
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
    }),
    ...(isLastDay && {
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
    }),
}));



function Row(props) {
    const {row} = props;
    const navigate = useNavigate();
    const handleClickOpen = (time, master) => {
        // console.log("props: ", props);
        const data = {time, master, serviceName:  props.service, dateStr: props.date, phoneNumber: localStorage.getItem("phoneNumber")};
       console.log(data);
        axios.post("http://localhost:8080/api/v1/order", data).then(response => {
            if(response.status === 200){
                console.log(response.data);
                localStorage.setItem("pngSrc", response.data.data);
                navigate("/order");
            }
        })
    }
    return (
        <React.Fragment>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>

                <TableCell component="th" scope="row">
                    {row.time}
                </TableCell>
                <TableCell align="right">{row.status ? "Bo'sh" : "Band"}</TableCell>
                <TableCell align="right">
                    <Button variant="contained" href="#contained-buttons" disabled={!row.status}
                            onClick={() => handleClickOpen(row.time, row.masterId)}>
                        Buyurtma
                    </Button>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        id: PropTypes.number.isRequired,
        time: PropTypes.number.isRequired,
        status: PropTypes.bool.isRequired,
    }).isRequired,
};


export default function CustomDay(props) {
    const [value, setValue] = React.useState(new Date());
    const [rows, setRows] = React.useState([]);


    const handleChange = (value) => {
        setValue(value);
        const arr = value.toString().split(" ");
        const date = arr[3] + "-06-" + arr[2];
        // axios.post(`http://localhost:8080/api/v1/work?id=${props.masterId}&date=${date}`)
        axios.get(`http://localhost:8080/api/v1/work?id=1&date=${date}`)
            .then((res) => {
                console.log("rows", res.data.data);
                setRows(res.data.data);
            })
        console.log(date);

    }

    const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
        if (!value) {
            return <PickersDay {...pickersDayProps} />;
        }

        const start = startOfWeek(value);
        const end = endOfWeek(value);

        const dayIsBetween = isWithinInterval(date, {start, end});
        const isFirstDay = isSameDay(date, start);
        const isLastDay = isSameDay(date, end);

        return (
            <CustomPickersDay
                {...pickersDayProps}
                disableMargin
                dayIsBetween={dayIsBetween}
                isFirstDay={isFirstDay}
                isLastDay={isLastDay}
            />
        );
    };

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    label="Week picker"
                    value={value}
                    onChange={(newValue) => {
                        handleChange(newValue)
                    }}
                    renderDay={renderWeekPickerDay}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat="'Week of' MMM d"
                />
            </LocalizationProvider>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Vaqt(soat)</TableCell>
                            <TableCell align="right">Holat</TableCell>
                            <TableCell align="right">Murojaat</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.id} row={row} service={row.name} date={row.date}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>

    );
}





