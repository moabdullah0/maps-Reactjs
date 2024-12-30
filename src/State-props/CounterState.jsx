import React from 'react'

const Counters = ({Counter,setCounter}) => {
  return (
    <div>
      <h1>{Counter}</h1>
     <button onClick={()=>setCounter(Counter+1)}>Increase</button>
     <button onClick={()=>setCounter(Counter-1)}>Decrease</button>
     <button onClick={()=>setCounter(0)}>Reset</button>
    </div>
  )
}

export default Counters
