import * as React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import Title from './Title';
import axios from "axios";
import {Button} from "reactstrap";
import AddMaster from "./AddMaster";
import Box from "@mui/material/Box";
import {Fab} from "@mui/material";

// Generate Order Data
function createData(id, name, rating, phoneNumber, telegramName, regionName, about) {
    return {id, name, rating, phoneNumber, telegramName, regionName, about};
}

let rows = [];

function generateRows(data) {
    rows = [...data.map(el => createData(el.id, el.name, el.rating, el.phoneNumber, el.telegramName, el.regionName, el.about))];
}


function preventDefault(event) {
    event.preventDefault();
}

export default function Masters() {

    const [data, setData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false)

    function toggle() {
        setModalOpen(!modalOpen)
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/master`).then(res => {
            if (res.data.statusCode === 200) {
                generateRows(res.data.data);
                setData(res.data.data);
            }
        })
    }, [])

    function generateTable() {
        axios.get(`http://localhost:8080/api/v1/master`).then(res => {
            if (res.data.statusCode === 200) {
                generateRows(res.data.data);
                setData(res.data.data);
            }
        })
    }


    // 1 = true, -1 = false, 0 = nothing
    function deleteCourse(id) {
        axios.delete(`http://localhost:8080/api/v1/master/${id}`).then((res) => {
            if (res.status === 200) {
                alert("Deleted")
                axios.get(`http://localhost:8080/api/v1/master`).then(res => {
                    if (res.data.statusCode === 200) {
                        generateRows(res.data.data);
                        setData(res.data.data);
                    }
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div>
            <Box sx={{'& > :not(style)': {m: 1}}}>
                <Fab color="primary" aria-label="add" onClick={() => toggle()}>
                    <AddIcon/>
                </Fab>
            </Box>
            <React.Fragment>
                <Title>Oxirgi buyirtmalar</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Xodim ismi</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell>Telefon Nomer</TableCell>
                            <TableCell>Telegram</TableCell>
                            <TableCell align="right">Manzil</TableCell>
                            <TableCell align="right">Tajribasi</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.rating}</TableCell>
                                <TableCell>{row.phoneNumber}</TableCell>
                                <TableCell>{row.telegramName}</TableCell>
                                <TableCell align="right">{row.regionName}</TableCell>
                                <TableCell align="right">{row.experience}</TableCell>
                                <TableCell>
                                    <td>
                                        <Button color="danger" onClick={() => deleteCourse(row.id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <AddMaster isOpen={modalOpen} toggle={toggle} generateTable={generateTable}/>
                {/*<Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>*/}
                {/*    See more orders*/}
                {/*</Link>*/}
            </React.Fragment>
        </div>
    );
}