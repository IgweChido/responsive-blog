import React from 'react'
import '../styles/BlogDetails.css'
import '../App.css';
import { Link } from 'react-router-dom';
import UseFetch from './UseFetch';
import { useParams, useHistory } from 'react-router-dom';




const BlogDetails = () => {
  const { index} = useParams();
  const{data, isPending, error} =  UseFetch('http://localhost:8000/blogs/' + index)
    
  return (
    <div >

     

      {data &&  <div>
          {/* background image */}
      <div className='blogbackimg' >
            <div className='marginp'>
                {/* title */}
                <p className='blogtitle'>{data.title}</p>
            </div>
           

        </div>

        <div className='marginp section2'>
            
             <Link to='/' >
                 <div className='bbutton1'>Back to Blogs</div>
             </Link>

        <p className='bdate1'>{data.publishedAt}</p>
        <p className='bauthor1'>{data.author}</p>
        <p className='bbody'>{data.content} </p>

        <button className='bbutton2'>Delete Blog</button>
        </div>
        </div>} 

       
        

       
    </div>
  )
}

export default BlogDetails