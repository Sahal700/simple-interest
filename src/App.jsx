import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [principle , setPrinciple] = useState("")
  const [rate , setRate] = useState("")
  const [year , setYear] = useState("")
  const [interest , setInterest] = useState(0)
  const [isPriciple , setisPriciple] = useState(true)
  const [isRate , setisRate] = useState(true)
  const [isYear , setisYear] = useState(true)

  const validate =(e)=>{
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(!!e.target.value.match('^[0-9]*$'));
    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='princple'){
        setPrinciple(e.target.value)
        setisPriciple(true)
      }else if(e.target.name=='rate'){
        setRate(e.target.value)
        setisRate(true)
      }else if(e.target.name=='year'){
        setYear(e.target.value)
        setisYear(true)
      }
    }else{
      if(e.target.name=='princple'){
        setPrinciple(e.target.value)
        setisPriciple(false)
      }else if(e.target.name=='rate'){
        setRate(e.target.value)
        setisRate(false)
      }else if(e.target.name=='year'){
        setYear(e.target.value)
        setisYear(false)
      }
    }
  }

  const handleCaculate=()=>{
    setInterest((rate*year*principle)/100)
  }
  
  const handleRest=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setisPriciple(true)
    setisRate(true)
    setisYear(true)
    setInterest(0)
  }

  return (
    <>
    <div style={{height:'100vh'}} className='bg-dark d-flex justify-content-center align-items-center'>
      <div style={{width:'500px'}} className='bg-light p-5 rounded'>
        <h2>Simple Interest App</h2>
        <p>Calculate your simple interest Easly</p>
        <div style={{height:'150px'}} className='bg-warning mt-4 rounded d-flex justify-content-center align-items-center flex-column'> 
            <h1>₹{interest}</h1>
            <p>Total Simple Interest</p> 
        </div>
          <div className="my-3">
          <TextField id="outlined-basic" value={principle} name='princple' label="₹ Principle amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
          {!isPriciple && <span className='text-danger'>Invalid input</span>}
        </div>
        <div className="mb-3">
          <TextField id="outlined-basic" value={rate} name='rate' label="Rate of interest (p.a)%" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
          {!isRate && <span className='text-danger'>Invalid input</span>}
        </div>
        <div className="mb-3">
          <TextField id="outlined-basic" value={year} name='year' label="Year (yr)" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
          {!isYear &&<span className='text-danger'>Invalid input</span>}
        </div>
        <div className='mb-3 d-flex justify-content-between'>
        <Button onClick={handleCaculate} style={{width:'190px',height:'60px'}} variant="contained" color='success' disabled={isPriciple && isRate && isYear ? false:true}>CALCULATE</Button>
        <Button onClick={handleRest} style={{width:'190px',height:'60px'}} variant="outlined">RESET</Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
