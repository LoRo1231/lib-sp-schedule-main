import './App.css';
import SPTable from './components/sp-table';
import CompletedJobs from './components/sp-completed-table';
import AddJob from './components/add-form';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {


  const [jobList, setJobList] = useState([])

  // useEffect(() => {
  //   const asyncFunction = async () => {
  //     //const response = await fetch("https://64bc59d87b33a35a44472ff1.mockapi.io/jobs")
  //     const data = await response.json()
  //     setJobList(data)
  //   }
  //   asyncFunction()
  // }, [])

  const submitJob = (newJobData) => {
    setJobList([...jobList, newJobData])
  }


  return (
    <div>
      
      <Header/>
      <Container>
        <Routes>
          <Route path="/" element={<SPTable jobList={jobList}/>}/>
          <Route path="/completedjobs" element={<CompletedJobs/>}/>
          <Route path="/addjob" element={<AddJob submitJob={submitJob}/>}/>
        </Routes>
      </Container>

    </div>
  );
}

export default App;
