import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import SuccessAlert from './success-alert';

function AddJob({ submitJob }){

    const [jobNumber, setJobNumber] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [description, setDescription] = useState('');
    const [qty, setQTY] = useState('');
    const [screens, setScreens] = useState('');
    const [firmDate, setFirmDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [jobNotes, setJobNotes] = useState('');

    const addToSchedule = (event) => {

        event.preventDefault();

        console.log("button was clicked");

        <SuccessAlert/>

        const newJobData = {

            jobNumber: jobNumber,
            customerName: customerName,
            description: description,
            qty: qty,
            screens: screens,
            firmDate: firmDate,
            dueDate: dueDate,
            jobNotes: jobNotes,
        }

        submitJob(newJobData)

        setJobNumber('');
        setCustomerName('');
        setDescription('');
        setQTY('');
        setScreens('');
        setFirmDate('');
        setDueDate('');
        setJobNotes('');

    } 

    return(
        <div>
            <Form className='mt-3'>
                <Row>
                    <Col sm={2}>
                        <label> Job # </label>
                        <Form.Control id='jobNumer' value={jobNumber} onChange={(event) => setJobNumber(event.target.value)}/>
                    </Col>
                    <Col sm={2}>
                        <label> Customer Name </label>
                        <Form.Control id='customerName' value={customerName} onChange={(event) => setCustomerName(event.target.value)}/>
                    </Col>
                    <Col sm={2}>
                        <label> Description </label>
                        <Form.Control id='description' value={description} onChange={(event) => setDescription(event.target.value)}/>
                    </Col>
                    <Col sm={1}>
                        <label> QTY </label>
                        <Form.Control id='qty' value={qty} onChange={(event) => setQTY(event.target.value)}/>
                    </Col>
                    <Col sm={1}>
                        <label> Screens </label>
                        <Form.Control id='screens' value={screens} onChange={(event) => setScreens(event.target.value)}/>
                    </Col>
                    <Col sm={1}>
                        <label> Firm? </label>
                        <Form.Control id='firmDate' value={firmDate} onChange={(event) => setFirmDate(event.target.value)}/>
                    </Col>
                    <Col sm={1}>
                        <label> Due Date </label>
                        <Form.Control id='dueDate' type='date' value={dueDate} onChange={(event) => setDueDate(event.target.value)}/>
                    </Col>
                </Row>
               
                <Row>
                    <Col sm={12} class="form-floating">
                        <label for="floatingTextarea"> Job Notes </label>
                        <textarea class="form-control" placeholder="Add notes here" id="jobNotes" value={jobNotes} onChange={(event) => setJobNotes(event.target.value)}></textarea>
                    </Col>
                </Row>
                <Button onClick={addToSchedule} className="mt-3" type="submit"> Add Job </Button>
            </Form>

        </div>

    );


}

export default AddJob;