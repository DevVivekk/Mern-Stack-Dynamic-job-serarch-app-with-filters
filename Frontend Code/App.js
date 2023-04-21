import './App.css';
import React, { useCallback, useEffect, useState } from 'react'
function App() {
  const [job,setJob] = useState([])
  const[jobs,setJobs] = useState("")
  const[location,setlocation] = useState("")
  const[experience,SetExperience] = useState("")

  const callApi = useCallback(async()=>{
    const res = await fetch(`/find?job=${jobs}&location=${location}&experience=${experience}`)
    const body = await res.json();
    setJob(body);
  },[location,jobs,experience])

  useEffect(()=>{
    callApi();
  },[callApi])

  return (
    <div className="App">
    <h1>Welcome to Job Search Website!</h1>
    <input onChange={(e)=>setJobs(e.target.value)} type='search' placeholder='Search Your Job' />
    <select onChange={(e)=>SetExperience(e.target.value)}>
      <option value={''}>Filter By experience</option>
      <option value={'Beginner'}>Beginner</option>
      <option value={'intermediate'}>Intermediate</option>
      <option value={'advanced'}>Advanced</option>
    </select>
    <select onChange={(e)=>setlocation(e.target.value)}>
      <option value={''}>Filter By Location</option>
      <option value={"Delhi"}>Delhi</option>
      <option value={"Patna"}>Patna</option>
      <option value={"Kolkata"}>Kolkata</option>
      <option value={"Kanpur"}>Kanpur</option>
      <option value={"Mumbai"}>Mumbai</option>
      <option value={"Noida"}>Noida</option>
    </select>

    {
      job?.length>0?job.map((item)=>{
        return(
          <div key={item._id} className='jobs'>
            <h2>JobTitle: {item.JobTitle}</h2>
            <h2>Location: {item.location}</h2>
            <h2>salaryRange: {item.salaryRange}</h2>
            <h2>experienceLevel: {item.experienceLevel}</h2>
          </div>
        )
      })
      :<h1>No Jobs found! :(</h1>
    }
    </div>
  );
}

export default App;
