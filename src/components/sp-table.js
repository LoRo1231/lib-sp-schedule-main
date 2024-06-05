import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import AddJob from './add-form';

function SPTable({ jobList }){
    return(

        <Container>
            <Table variant="dark text-center mt-4 hover striped">
                <thead>
                    <Row className='h5 dflex align-items-center'>
                        <Col sm={2}> Job # </Col>
                        <Col sm={3}> Customer Name </Col>
                        <Col sm={3}> Description </Col>
                        <Col sm={1}> QTY </Col>
                        <Col sm={1}> Screens </Col>
                        <Col sm={1}> Firm? </Col>
                        <Col sm={1}> DUE Date </Col>
                    </Row>
                </thead>
                    <tbody className='dflex align-items-center'>
                        {jobList.map(job =>

                        <Row>
                            <Col sm={2}> {job.jobNumber} </Col> 
                            <Col sm={3}> {job.customerName} </Col>
                            <Col sm={3}> {job.description} </Col>
                            <Col sm={1}> {job.qty} </Col>
                            <Col sm={1}> {job.screens} </Col>
                            <Col sm={1}> {job.firmTrue} </Col>
                            <Col sm={1}> {job.dueDate} </Col>
                        </Row>)}
                        {jobList.map(job =>
                        <Row>
                            <Col> 
                                {job.jobNotes}
                            </Col>
                        </Row>)}
                    </tbody>
            </Table>
         </Container>
    );
}

export default SPTable;