import React, {useState} from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useNavigate } from "react-router-dom";

export default function Regsiter(){

  const navigate = useNavigate();

  let [username,setUsername] = useState('');
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadUrl = "http://localhost:3000/api/users";
    console.log(username,email,password);
    fetch(uploadUrl,{
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        email,
        password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User Registered");
        NavigatetoLogin();
      });
  }

  function NavigatetoLogin(){
    navigate("/login");
  }

  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form>
            <span>Email address *</span>
            <input type='text' name="email" onChange={(e)=>{setEmail(e.target.value)}} required />
            <span>Username *</span>
            <input type='text' name="username" onChange={(e)=>{setUsername(e.target.value)}} required />
            <span>Password *</span>
            <input type='password' name="password" onChange={(e)=>{setPassword(e.target.value)}} required />
            <span>Confirm Password *</span>
            <input type='password' required />
            <button className='btn btn-outline-dark' style={{fontSize: '20px'}} onClick={handleSubmit}>Register</button>
          </form>
        </div>
      </section>
    </>
  )
}
