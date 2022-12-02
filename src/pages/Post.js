import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

 const Post = () =>  {
  let { postId } = useParams();

  const [post, setPost] = useState({});

  useEffect(({}) => {
    Axios.get(`http://localhost:3001/api/getFromId/${postId}`).then((data) => {
      setPost({title: data.data[0].title, content: data.data[0].content, creator: data.data[0].creator});
    });
  }, []);

  return (
    <div className='Post'>
      <h1>{post.title}</h1>
      <p>
      {post.content}
      </p>
      <h4>{post.creator}</h4>
    </div>
  );
}
export default Post;