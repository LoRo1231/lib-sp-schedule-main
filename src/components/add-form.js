import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import SuccessAlert from './success-alert';

function AddJob({ submitJob }){

    const [jobNumber, setJobNumber] = useState('');
    const [filmTrue, setFilmTrue] = useState('');
    const [screenTrue, setScreenTrue] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [description, setDescription] = useState('');
    const [qty, setQTY] = useState('');
    const [screens, setScreens] = useState('');
    const [firmTrue, setFirmTrue] = useState('');
    const [firmFalse, setFirmFalse] = useState('');
    const [dueDate, setDueDate] = useState('');

    const addToSchedule = (event) => {

        event.preventDefault();

        console.log("button was clicked");

        <SuccessAlert/>

        const newJobData = {

            jobNumber: jobNumber,
            filmTrue: filmTrue,
            screenTrue: screenTrue,
            customerName: customerName,
            description: description,
            qty: qty,
            screens: screens,
            firmTrue: firmTrue,
            firmFalse: firmFalse,
            dueDate: dueDate,
        }

        submitJob(newJobData)

        setJobNumber('');
        setFilmTrue('');
        setCustomerName('');
        setDescription('');
        setQTY('');
        setScreens('');
        setFirmTrue('');
        setFirmFalse('');
        setDueDate('');

    } 

    return(
        <div>
            <Form className='mt-3'>
                <Row>
                    <Col sm={1}>
                        <label> Job # </label>
                        <Form.Control value={jobNumber} onChange={(event) => setJobNumber(event.target.value)}/>
                    </Col>
                    <Col sm={1}>
                        <label> Film Ready </label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value={filmTrue} onChange={(event) => setFilmTrue(event.target.value)} id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">
                                Film
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value={screenTrue} onChange={(event) => setScreenTrue(event.target.value)}id="defaultCheck2"/>
                            <label class="form-check-label" for="defaultCheck2">
                                Screen
                            </label>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <label> Customer Name </label>
                        <Form.Control value={customerName} onChange={(event) => setCustomerName(event.target.value)}/>
                    </Col>
                    <Col sm={3}>
                        <label> Description </label>
                        <Form.Control value={description} onChange={(event) => setDescription(event.target.value)}/>
                    </Col>
                    <Col sm={1}>
                        <label> QTY </label>
                        <Form.Control value={qty} onChange={(event) => setQTY(event.target.value)}/>
                    </Col>
                    <Col sm={1}>
                        <label> Screens </label>
                        <Form.Control value={screens} onChange={(event) => setScreens(event.target.value)}/>
                    </Col>
                    <Col sm={1}>
                        <label> Firm? </label> 
                        <div class="input-group mb-3">
                            <select class="form-select" id="inputGroupSelect01">
                                <option selected> </option>
                                <option value={firmTrue} onChange={(event) => setFirmTrue(event.target.value)}> Yes </option>
                                <option value={firmFalse} onChange={(event) => setFirmFalse(event.target.value)}> No </option>
                            </select>
                        </div>
                    </Col>
                    <Col sm={1}>
                        <label> Due Date </label>
                        <Form.Control type='date' value={dueDate} onChange={(event) => setDueDate(event.target.value)}/>
                    </Col>
                </Row>
                
                <Button onClick={addToSchedule} className="mt-3" type="submit"> Add Job </Button>
            </Form>

        </div>

    );


}

export default AddJob;