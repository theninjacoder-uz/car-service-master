import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import axios from "axios";


const AddService = ({toggle, isOpen}) => {
    const [name, setName] = useState("")
    const [data, setData] = useState(
        {
            name: '',
            master: '',
            carModel: '',
            price: ''
        }
    )

    function handleSubmit() {

        axios.post("http://localhost:8080/api/v1/speciality", data).then((res) => {
            console.log(res)
            toggle()
            clearInput()
        }).catch((err) => {
            console.log(err)
        })
    }

    function clearInput() {
        setData({
            name: '',
            master: '',
            carModel: '',
            price: ''
        });
    }


    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} className="mx-auto mt-5 pt-5">
                <ModalHeader>Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="serviceName">Ism</Label>
                            <Input type="text" name="name" id="serviceName" placeholder="Servis nomi"
                                   onChange={(e) => {
                                       data.name = e.target.value
                                       setData({...data});
                                   }}
                                   value={data.name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="masterId">Xodim id</Label>
                            <Input type="number" name="masterId" id="masterId"
                                   placeholder="Xodim idisi"
                                   onChange={(e) => {
                                       data.master = e.target.value
                                       setData({...data});
                                   }}
                                   value={data.master}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="carModel">Mashina modeli</Label>
                            <Input type="text" name="carModel" id="carModel"
                                   placeholder="Mashina modeli"
                                   onChange={(e) => {
                                       data.carModel = e.target.value
                                       setData({...data});
                                   }}
                                   value={data.carModel}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">Narxi(soatiga)</Label>
                            <Input type="number" name="price" id="price"
                                   placeholder="Narxi(soatiga)"
                                   onChange={(e) => {
                                       data.price = e.target.value
                                       setData({...data});
                                   }}
                                   value={data.price}
                            />
                        </FormGroup>
                        <Col sm={{size: 8, offset: 7}}>
                            <Button color="secondary" onClick={() => {
                                toggle();
                                clearInput()
                            }}>Cancel</Button>
                            <Button color={"danger"} className={"float"}
                                    onClick={handleSubmit}>Submit</Button>
                        </Col>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default AddService