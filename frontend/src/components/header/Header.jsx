import React from "react"
import "./header.css"
import { User } from "./User"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"

export const Header = (props) => {
   window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  }) 
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo' style={{fontFamily: 'fantasy', letterSpacing: '1px', wordSpacing: '2px', fontSize: '30px'}}>
            BLOG APP
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  {link.id===4?(<Link to={`${link.url}/${props.id}`}>{link.text}</Link>):(<Link to={link.url}>{link.text}</Link>)}
                </li>
              ))}
            </ul>
          </nav>
          <div className='account flexCenter'>
            <User logged={props.logged}/>
          </div>
        </div>
      </header>
    </>
  )
}
