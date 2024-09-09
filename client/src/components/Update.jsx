import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Update() {

  // to navigate
  const navigate = useNavigate()
  // to locate the id 
  const location = useLocation()
  // extracting the id from the url as we don't have the excess to the specific book id from the database in update page 
  const bookId = location.pathname.split('/')[2]

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
      await axios.put(`http://localhost:8000/books/${bookId}`, book);
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  
  
  return (
    <div>
      <div className="form">
        <h1>Update the book</h1>
        <input type="text" name="title" id="" placeholder='title' onChange={handleChange} />
        <input type="text" name="desc" id="" placeholder='desc' onChange={handleChange} />
        <input type="number" name="price" id="" placeholder='price' onChange={handleChange} />
        <input type="text" name="cover" id="" placeholder='cover' onChange={handleChange} />
        <button onClick={handleClick}>Update</button>
      </div>
    </div>
  )
}

export default Update;