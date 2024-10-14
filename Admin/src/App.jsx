import React from 'react'
import NavBar from './Components/Navbar'
import Users from './Sections/Users'
import Grounds from './Sections/Grounds'
import AddGround from './Sections/AddGround'
import Bookings from './Sections/Bookings'
import UpdateGround from './Sections/UpdateGround'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <main>
        
        <NavBar/>
        <section>
          <Routes>
            <Route path="/users" exact element={<Users />} />
            <Route path="/grounds" exact element={<Grounds />} />
            <Route path="/addground" exact element={<AddGround />} />
            <Route path="/bookings" exact element={<Bookings />} />
            <Route path="/updateground" exact element={<UpdateGround />} />

          </Routes>
        </section>

      </main>
    </Router>
  )
}

export default App
