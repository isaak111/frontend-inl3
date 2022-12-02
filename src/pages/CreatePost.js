import React, { useState } from 'react'
import "../App.css";
import Axios from 'axios'


export default function CreatePost() {

  const [user, setUser] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const submitPost = () => {
    Axios.post('http://localhost:3001/api/create', { user: user, title: title, content: content });
  };

  return (
    <div className='CreatePost'>
      <div className='uploadPost'>
        <label>UserName</label>
        <input type="text" onChange={(e) => {
          setUser(e.value);
        }} />
        <label>title</label>
        <input type="text" onChange={(e) => {
          setTitle(e.value);
        }} />
        <label>Post Text</label>
        <textarea onChange={(e) => {
          setContent(e.value);
        }} />

        <button onClick={submitPost}>Submit Post</button>

      </div>
    </div>
  )
}
