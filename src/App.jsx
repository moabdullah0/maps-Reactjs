
import { useState } from 'react'
import './App.css'
import List from './List'

function App() {
const items=['Profile','Settings','Messages','Download']
const [state,setState]=useState(0)
console.log(state)
  return (
    <div className="h-screen flex flex-col justify-center items-center">
    <List items={items} state={state} setState={setState}/>
    </div>  
  )
}

export default App
