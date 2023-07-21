import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

export default function DetailsPages(props){
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data[0]);
        console.log(data);
      });
  },[id])

  function handleDelete() {
    fetch(`http://localhost:3000/api/blogs/${id}`,{
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  }

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={`../uploads/${blogs.cover}`} alt='' />
            </div>
            <div className='right'>
              <div className='buttons' style={{display: props.id == blogs.id?'block':'none', marginLeft: '1050px'}}>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button' onClick={handleDelete}>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>{blogs.title}</h1>
              <p>{blogs.desc}</p>
              <p>Author: {props.uname}</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
