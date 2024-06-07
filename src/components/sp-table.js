import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ScreenButton from './screenButton';
import FilmButton from './filmButton';

function SPTable({ jobList }){
    return(

        <Container>
            <Table variant="dark text-center mt-5">
                <thead>
                    <Row className='h5 dflex align-items-center mb-3'>
                        <Col sm={2}> Job # </Col>
                        <Col sm={2}> Customer Name </Col>
                        <Col sm={2}> Description </Col>
                        <Col sm={1}> QTY </Col>
                        <Col sm={1}> Screens </Col>
                        <Col sm={1}> Firm? </Col>
                        <Col sm={1}> DUE Date </Col>
                        <Col sm={2}> Complete </Col>
                    </Row>
                </thead>
                    <tbody className='dflex align-items-center'>
                        {jobList.map(job =>
                    
                        <div class='tableMarginBtm'>
                            <Row>
                                <Col sm={2}> {job.jobNumber} </Col> 
                                <Col sm={2}> {job.customerName} </Col>
                                <Col sm={2}> {job.description} </Col>
                                <Col sm={1}> {job.qty} </Col>
                                <Col sm={1}> {job.screens} </Col>
                                <Col sm={1}> {job.firmDate} </Col>
                                <Col sm={1}> {job.dueDate} </Col>
                                <Col sm={2}> <button type="button" class="btn btn-success"> Complete </button> </Col>

                                <Col sm={1}>
                                    <FilmButton/>
                                </Col>
                                <Col sm={1}>
                                    <ScreenButton/>
                                </Col>
                                <Col sm={10}> </Col>

                                <Col sm={12}> 
                                <p class="container noteColor left m-3"> {job.jobNotes} </p>
                                </Col>
                            </Row>
                         </div>
                        )}
                       
                    </tbody>
            </Table>
         </Container>
    );
}

export default SPTable;