import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {

  // to navigate
  const navigate = useNavigate()

  const [book, setBook] = useState({
    title : "",
    desc : "",
    price : null,
    cover : ""
  })

  // sending the data in book where "book name = form name"  : event.target.value (value coming from input field)
  const handleChange = (e)=>{
    setBook(prev => ({...prev, [e.target.name] : e.target.value}))
  }

  const handleClick = async (e)=>{
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/books", book);
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div>
      <div className="form">
        <h1>Add new book</h1>
        <input type="text" name="title" id="" placeholder='title' onChange={handleChange} />
        <input type="text" name="desc" id="" placeholder='desc' onChange={handleChange} />
        <input type="number" name="price" id="" placeholder='price' onChange={handleChange} />
        <input type="text" name="cover" id="" placeholder='cover' onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default Add;