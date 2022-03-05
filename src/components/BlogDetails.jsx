import React from 'react'
import '../styles/BlogDetails.css'
import '../App.css';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
  return (
    <div >
        {/* background image */}
        <div className='blogbackimg'>
            <div className='marginp'>
                {/* title */}
                <p className='blogtitle'>Does Your Website need an MOT?</p>
            </div>
           

        </div>

        <div className='marginp section2'>
            
             <Link to='/' >
                 <div className='bbutton1'>Back to Blogs</div>
                 </Link>

        <p className='bdate1'>13th July 2020</p>
        <p className='bauthor1'>Igwe Chidera</p>
        <p className='bbody'>When a website goes live, it’s been broadcasted on social media and promoted, it’s important that it’s not left on the virtual shelf to gather dust. A website is never finished, it must be kept up to date and relevant, used appropriately to achieve your goals and reach a return on investment
        . We often tell clients that when a website goes live, that’s actually when the hard work starts. </p>

        <button className='bbutton2'>Delete Blog</button>
        </div>

       
    </div>
  )
}

export default BlogDetails