import React, { useState } from "react"
import {Footer} from "./components/footer/Footer"
import {Header} from "./components/header/Header"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Regsiter from "./pages/login/Regsiter"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import DetailsPages from "./pages/details/DetailsPages"
import Account from "./pages/account/Account"
import Create from "./components/create/Create"
import Card from "./pages/myBlog/Card"

const App = () => {

  const [logged,setLogged] = useState(false);
  const [id,setId] = useState('');
  const [uname,setUname] = useState("Anonymous");


  return (
    <>
      <Router>
        <Header logged={logged} id={id} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login setLogged={setLogged} setId={setId} setUname={setUname}/>} />
          <Route exact path='/register' element={<Regsiter />} />
          <Route exact path='/details/:id' element={<DetailsPages uname={uname} id={id}/>} />
          <Route exact path='/account' element={<Account />} />
          <Route exact path='/create' element={<Create id={id}/>} />
          <Route exact path='/blog/:id' element={<Card />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
