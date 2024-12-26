import { useState } from 'react'

import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
      <h1>count:{count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          add value {count}</button>
       <button onClick={()=>setCount((count)=>count-1)}>remove value:{count}</button>
      </div>
     
      <h1 className='bg-green-400 text-block p-4 rounded-xl'>Tailwind test</h1><br></br>
      
    
    <Cards username="elisha rai" job="software developer" /><br></br><br></br>
    <h1 className='bg-green-400 text-block p-4 rounded-xl'>Tailwind test</h1><br></br>
    <Cards username="srijana malla" job="project manager" />
    </>
  )
}

export default App
