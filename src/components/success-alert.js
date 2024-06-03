import Alert from 'react-bootstrap/Alert';

function SuccessAlert() {
  return (
    <>
        <Alert className='mt-3' variant={'success'}>
          Yay, you've added a job to the schedule!
        </Alert>
    </>
  );
}

export default SuccessAlert;