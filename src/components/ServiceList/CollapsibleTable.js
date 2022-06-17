import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from "axios";
import {useEffect, useState} from "react";
import {Button} from "@mui/material";

function createData(data) {
    return data ? data.map(el => {
        return {
            id: el.id,
            name: el.name,
            phoneNumber: el.phoneNumber,
            regionName:el.regionName,
            experience: el.experience,
            rating: el.rating,
            specialities: [...el.specialities],
        };
    }) : [];
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                <TableCell align="right">{row.regionName}</TableCell>
                <TableCell align="right">{row.experience}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
                <TableCell align="right">
                    <Button variant="contained" href="/schedule">
                    jadval
                </Button></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Mutaxassisliklari
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Servis nomi</TableCell>
                                        <TableCell>Mashina modeli</TableCell>
                                        <TableCell align="right">Talab</TableCell>
                                        <TableCell align="right">Narxi (Sum)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.specialities.map((speciality) => (
                                        <TableRow key={speciality.id}>
                                            <TableCell component="th" scope="row">
                                                {speciality.name}
                                            </TableCell>
                                            <TableCell>{speciality.carModel}</TableCell>
                                            <TableCell align="right">{speciality.demand}</TableCell>
                                            <TableCell align="right">{speciality.demand}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        phoneNumber: PropTypes.string.isRequired,
        experience: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        specialities: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                demand: PropTypes.string.isRequired,
            }),
        ).isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};


export default function CollapsibleTable() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/speciality').then(res => {
            if (res.status === 200) {
                console.log(res.data);
                setRows(createData(res.data.data));
            }
        });
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>F.I.O</TableCell>
                        <TableCell align="right">Telefon</TableCell>
                        <TableCell align="right">Manzil</TableCell>
                        <TableCell align="right">Tajribas(yil)</TableCell>
                        <TableCell align="right">Rating</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
