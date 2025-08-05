import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 


app.post('/api/save', (req, res) => {
  // Your route logic
  res.send('Data saved');
});


app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
  return (
    <>
      
        
    </>
  )
}

export default App
