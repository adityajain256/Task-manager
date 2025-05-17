import { useState } from 'react'

import './App.css'
import Nav from './componants/Nav'
// import Verticalnav from './componants/Verticalnav'
import Front from './componants/Front'
// import Tasks from './componants/Tasks'

function App() {
  return(
    <>

      <Nav />
      {/* <div className='flex flex-col md:flex-row'>
      <Verticalnav/>

      </div> */}

      <Front/>
      {/* <Tasks /> */}
    </>
  )
}

export default App
