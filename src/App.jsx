import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './allpages/Footer'
import Home from './allpages/Home'


const App = () => {
  return (
<>

<div style={{overflow:'hidden'}}>
<Routes>
  <Route path="/" element={<Home/>} />
  
  
</Routes>

</div>



</>  )
}

export default App