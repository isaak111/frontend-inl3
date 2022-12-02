import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function MainPage() {

  const [postList, setPostList] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((data)=>{
      setPostList(data.data);
      console.log(data.data);
    });
  },[]);

  return (
  <div className='MainPage'>
    <div className='Header'>
      
    </div>
    <div className='PostContainer'>
      
      {postList.map((val,key)=>{
       return(
       <div className="Post" key={key} 
       onClick={() => {
        navigate(`/post/${val.id}`)} }>
        <h1>{val.title}</h1>
        <p>{val.content}</p>
        <h4>{val.creator}</h4>
      </div>
      );
      })}
      
    </div>
  </div>
  )
}