import * as React from 'react';
import {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from "axios";

// Generate Order Data
function createData(id, masterName, serviceName, phoneNumber, date, time) {
    return { id, masterName, serviceName, phoneNumber, date,  time };
}

let rows = [];

function generateRows(data){
    rows = [...data.map(el => createData(el.id, el.masterName, el.serviceName, el.phoneNumber, el.date, el.time))];
}


function preventDefault(event) {
    event.preventDefault();
}

export default function Users() {


    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/user`).then(res => {
            if(res.data.statusCode === 200)
                generateRows(res.data.data);
        })
    }, [])

    return (
        <React.Fragment>
            <Title>Foydalanuvchilar ro'yxati</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>F.I.O</TableCell>
                        <TableCell>Telefon Nomeri</TableCell>
                        <TableCell>Manzili</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.phoneNumber}</TableCell>
                            <TableCell>{row.regionName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}