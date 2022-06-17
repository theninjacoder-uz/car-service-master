import * as React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from "axios";
import {Button} from "reactstrap";
import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import AddService from "./AddService";

// Generate Order Data
function createData(id, name, master, carModel, price) {
    return {id, name, master, carModel, price};
}

let rows = [];

function generateRows(data) {
    // rows = [...data.map(el => createData(el.speid, el.name, el.master, el.carModel, el.price))];
    rows = [];
    data.forEach(el => {
        el.specialities.forEach(special => rows.push(createData(special.id, special.name, el.name, special.carModel, special.price)));
    });
    console.log(rows);
}


function preventDefault(event) {
    event.preventDefault();
}

export default function Services() {

    const [data, setData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false)

    function toggle(id) {
        setModalOpen(!modalOpen)
    }

    useEffect(() => {
        axios.get(`http://carservice-env.eba-7atumkwd.us-east-1.elasticbeanstalk.com/api/v1/speciality`).then(res => {
            if (res.data.statusCode === 200) {
                console.log(res.data);
                generateRows(res.data.data);
                setData(res.data.data);
            }
        })
    }, [])


    // 1 = true, -1 = false, 0 = nothing
    function deleteItem(id) {
        axios.delete(`http://carservice-env.eba-7atumkwd.us-east-1.elasticbeanstalk.com/api/v1/speciality/${id}`).then((res) => {
            if (res.status === 200) {
                alert("Deleted")
                axios.get(`http://carservice-env.eba-7atumkwd.us-east-1.elasticbeanstalk.com/api/v1/speciality`).then(res => {
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
                <Title>Servislar ro'yxati</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Servis nomi</TableCell>
                            <TableCell>Xodim nomi</TableCell>
                            <TableCell>Mashina modeli</TableCell>
                            <TableCell>Narxi(soat)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.master}</TableCell>
                                <TableCell>{row.carModel}</TableCell>
                                <TableCell>{row.price}</TableCell>

                                <TableCell>
                                    <td>
                                        <Button color="danger" onClick={() => deleteItem(row.id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <AddService isOpen={modalOpen} toggle={toggle}/>
                {/*<Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>*/}
                {/*    See more orders*/}
                {/*</Link>*/}
            </React.Fragment>
        </div>

    );
}