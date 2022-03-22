import React from 'react'
import '../styles/BlogDetails.css'
import '../App.css';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';




const BlogDetails = (article, error, isPending) => {
  
  
    
  return (
    <div >

      {error && <h1>{ error }</h1>}
      { isPending && <h1>Loading...</h1>}

      {article &&  <div>
          {/* background image */}
      <div className='blogbackimg' >
            <div className='marginp'>
                {/* title */}
                <p className='blogtitle'>{article.title}</p>
            </div>
           

        </div>

        <div className='marginp section2'>
            
             <Link to='/' >
                 <div className='bbutton1'>Back to Blogs</div>
                 </Link>

        <p className='bdate1'>{article.publishedAt}</p>
        <p className='bauthor1'>{article.author}</p>
        <p className='bbody'>{article.content} </p>

        <button className='bbutton2'>Delete Blog</button>
        </div>
        </div>} 

       
        

       
    </div>
  )
}

export default BlogDetails