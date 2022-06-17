import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import axios from "axios";


const AddMaster = ({toggle, isOpen, generateTable}) => {
    const [name, setName] = useState("")
    const [data, setData] = useState(
        {
            name: '',
            phoneNumber: '',
            telegramName: '',
            regionName: '',
            experience: '',
        }
    )

    function handleSubmit() {

        axios.post("http://localhost:8080/api/v1/master", data).then((res) => {
            console.log(res)
            toggle()
            clearInput()
            generateTable();
        }).catch((err) => {
            console.log(err)
            toggle()
        })
    }

    function clearInput() {
        setData({
            name: '',
            phoneNumber: '',
            telegramName: '',
            regionName: '',
            experience: '',
        });
    }


    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} className="mx-auto mt-5 pt-5">
                <ModalHeader>Modal title</ModalHeader>
                <ModalBody>
                    <Form sm={{width: 35}}>
                        <FormGroup>
                            <Label for="courseName">Ism</Label>
                            <Input type="text" name="name" id="courseName" placeholder="Mutaxassis ismi"
                                   onChange={(e) => {
                                       data.name = e.target.value
                                       setData({...data});
                                   }}
                                   value={data.name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phoneNumber">Telefon Nomer</Label>
                            <Input type="text" name="phoneNumber" id="phoneNumber"
                                   placeholder="Telefon nomer"
                                   onChange={(e) => {
                                       data.phoneNumber = e.target.value
                                       setData({...data});
                                   }}
                                   value={data.phoneNumber}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="regionName">Manzil</Label>
                            <Input type="text" name="regionName" id="regionName"
                                   placeholder="Manzil"
                                   onChange={(e) => {
                                       data.regionName = e.target.value
                                       setData({...data});
                                   }}
                                   value={data.regionName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="telegramName">Telegram</Label>
                            <Input type="text" name="telegramName" id="telegramName"
                                   placeholder="Telegram nomi"
                                   onChange={(e) => {
                                       data.telegramName = e.target.value
                                       setData({...data});
                                   }}
                                   value={data.telegramName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="experience">Tajriba(yil)</Label>
                            <Input type="number" name="experience" id="experience"
                                   placeholder="Tajriba(yil)"
                                   onChange={(e) => {
                                       data.experience = e.target.value
                                       setData({...data});
                                   }}
                                   value={data.experience}
                            />
                        </FormGroup>
                        <Col sm={{size: 8, offset: 7}}>
                            <Button color="secondary" onClick={() => {
                                toggle();
                                clearInput()
                            }}>Cancel</Button>
                            <Button color={"danger"} className={"float"} onClick={handleSubmit}>Submit</Button>
                        </Col>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default AddMaster