import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import AddJob from './add-form';

function SPTable({ jobList }){
    return(

        <Container>
         <Table striped bordered hover variant="dark text-center mt-4">
                <thead>
                    <Row className='h5 dflex align-items-center'>
                        <Col sm={1}> Job # </Col>
                        <Col sm={2}> Film & Screen </Col>
                        <Col sm={2}> Customer Name </Col>
                        <Col sm={2}> Description </Col>
                        <Col sm={1}> QTY </Col>
                        <Col sm={1}> Screens </Col>
                        <Col sm={1}> Firm? </Col>
                        <Col sm={1}> DUE Date </Col>
                    </Row>
                </thead>
                    <tbody className='dflex align-items-center'>
                        {jobList.map(job =>

                        <Row>
                            <Col sm={1}> {job.jobNumber} </Col>
                            <Col sm={1}> {job.filmTrue}
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={AddJob.filmTrue} id="defaultCheck1"/>
                                        <label class="form-check-label" for="defaultCheck1">
                                            Film
                                        </label>
                                        </div>
                            </Col>
                            <Col sm={1}> {job.screenTrue}
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value={AddJob.screenTrue} id="defaultCheck2"/>
                                    <label class="form-check-label" for="defaultCheck2">
                                        Screen
                                    </label>
                                </div>
                            </Col>
                            <Col sm={2}> {job.customerName} </Col>
                            <Col sm={2}> {job.description} </Col>
                            <Col sm={1}> {job.qty} </Col>
                            <Col sm={1}> {job.screens} </Col>
                            <Col sm={1}> {job.firmTrue} 
                                <div class="input-group mb-3">
                                    <select class="form-select" id="inputGroupSelect01">
                                        <option selected> </option>
                                        <option value={AddJob.firmTrue}> </option>
                                        <option value={AddJob.firmFalse}> </option>
                                    </select>
                                 </div>
                            </Col>
                            <Col sm={1}> {job.dueDate} </Col>
                        </Row>)}
                    </tbody>
            </Table>
         </Container>
    );
}

export default SPTable;