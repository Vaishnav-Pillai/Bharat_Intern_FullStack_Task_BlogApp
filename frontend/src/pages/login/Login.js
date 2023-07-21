import React, { useState } from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { Link, useNavigate } from "react-router-dom"

export default function Login(props) {

  const navigate = useNavigate();

  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');
  var pass;
  var id;
  var uname;

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    await fetch(`http://localhost:3000/api/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data._id);
        pass = data.password;
        id = data._id;
        uname = data.username;
        handleLog();
      });
  }

  function handleLog() {
    console.log(pass);
    if(password == pass){
      console.log(id);
      props.setLogged(true);
      props.setId(id);
      props.setUname(uname);
      navigate("/");
    }
    else{
      alert("Invalid Credentials !!")
    }
  }


  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form>
            <span>Email address *</span>
            <input type='text' onChange={(e)=>{setEmail(e.target.value)}} required />
            <span>Password *</span>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}} required />
            <button className='btn btn-outline-dark' style={{fontSize: '20px'}} onClick={handleLogin}>Log in</button>
            <div className="text-center my-4">
              New to Blog?<Link className="medium mx-2" to="/register" style={{cursor: 'pointer', color: 'blue'}}>Register</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
