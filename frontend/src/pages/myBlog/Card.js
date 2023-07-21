import React, { useEffect, useState } from "react"
import "./blog.css"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link, useParams } from "react-router-dom"

export default function Card(){

  const { id } = useParams();
  let [blog,setBlog] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  })

  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {blog.map((item) => (

            item.id==id?(
              <div className='box boxItems' key={item._id}>
              <div className='img'>
                <img src={`../uploads/${item.cover}`} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.category}</a>
                </div>
                <Link to={`/details/${item._id}`} className='link'>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 100)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
            ):(
              <h2 style={{display:'none'}}>Nothing to Display</h2>
            )
          ))}
        </div>
      </section>
    </>
  )
}
