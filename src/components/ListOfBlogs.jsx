import React from 'react'
import '../styles/ListOfBlogs.css'


import { Link } from 'react-router-dom';

const ListOfBlogs = ({data}) => {
    
    
  return (
    <div>

        {data.map((dat) =>(
        <div>
                {/* Blog div */}
            <div className='blogdiv' key={dat.id}>
                {/* image div */}
                <div className='blogimg'>
                    
                    {/* <img  src={dat.urlToImage}alt='webimg'></img> */}
                </div>
                
                <div className='blogwords'>
                    {/* <p className='btitle'>{dat.title}</p> */}
                    {/* <p className='bwords'>{dat.description}</p> */}
                    <Link to='/BlogDetails' className='bbutton'>Read blog</Link>
                    <div>
                        {/* <p className='bdate'>{dat.publishedAt}</p>*/}<p className='bauthor'>{dat.author}</p> 
                    </div>
                    
                    
                </div>
            </div>
        </div>
        ))}
       
        
    </div>
  );
};

export default ListOfBlogs