import NavBar from './Components/NavBar'
import Landing from './Sections/Landing'
import Footer from './Components/Footer'
import SignUp from './Sections/SignUp'
import Home from './Sections/Home'
import ProceedToPay from './Sections/ProceedToPay'
import ListOfGrounds from './Sections/ListOfGrounds'
import Contact from './Sections/Contact'
import AccountDetails from './Sections/AccountDetails'
import GroundDetails from './Sections/GroundDetails'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from './Sections/LogIn'
import { useState } from 'react'
import NavBar2 from './Components/NavBar2'

function App() {



  
  return (
    <Router>
      <main className='relative flex flex-row'>
        <NavBar />
        <section className='xl:padding-l wide:padding-r padding-b'>
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/login" exact element={<LogIn />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/pay" exact element={<ProceedToPay />} />
            <Route path="/listofgrounds" exact element={<ListOfGrounds />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/account" exact element={<AccountDetails />} />
            <Route path="/grounddetails" exact element={<GroundDetails />} />
          </Routes>
        </section>
        <Footer />
      </main>
    </Router>
  )
}

export default App
