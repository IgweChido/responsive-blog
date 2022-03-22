import React, { useState } from 'react'
import '../styles/ListOfBlogs.css'


import { Link } from 'react-router-dom';
import BlogDetails from './BlogDetails';

const ListOfBlogs = ({articles}) => {
    const [details, setDetails] = useState(true);
    console.log(articles[0]);
    
    const Blogdetails =()=>{
        setDetails(false);
    }
   
    
    
    
  return (

      <div>
          {articles.map((dat, index) =>(
        <div> 
            <div>
                    {/* Blog div */}
                <div className='blogdiv' key={index}>
                    {/* image div */}
                    <div className='blogimg'>
                        
                        <img  src={dat.urlToImage}alt='webimg'></img>
                    </div>
                    
                    <div className='blogwords'>
                        <p className='btitle'>{articles[index].title}</p>
                        <p className='bwords'>{dat.description}</p>
                        <Link to={`/blogs/${index}`} className='bbutton'>Read blog</Link>

                        <div>
                            <p className='bdate'>{dat.publishedAt}</p><p className='bauthor'>{dat.author}</p> 
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            


</div> 
))}
      </div>
    
      
    
  );
};

export default ListOfBlogs