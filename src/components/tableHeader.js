import React from 'react';

function SPTableHead (){

    return(
        <div>
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
                </Table>
            </Container>
        </div>
    );
}

export default SPTableHead;