import React, { useEffect, useState } from "react"
import "./blog.css"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"

export default function Card () {

  let [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  })

  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {posts.map((item,key) => (
            <div className='box boxItems' key={item._id}>
              <div className='img'>
                <img src={`./uploads/${item.cover}`} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.category}</a>
                </div>
                <Link to={`/details/${item._id}`} className='link'>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 60)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
