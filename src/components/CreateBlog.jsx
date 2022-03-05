import React from 'react'
import '../styles/CreateBlog.css'
import '../App.css';

const CreateBlog = () => {
  return (
    <div className='cblog '>
        <div className='supers'>
            <div className='marginp'>
                <p className='atitle'>Add new blog</p>
                <p className='atwords'>Join us and create, we’re the creative growth agency. Our process is focussed on winning together by working together.</p>
            </div>
            
        </div>

        <div className='marginp'>
            <form className='bform'>

            {/* title */}
            <input
            placeholder='Title'
            type="text"
            required
            ></input>

            {/* author */}
            <input
            placeholder='Author'
            type="text"
            required
            ></input>

            {/* date */}
            <input
            placeholder='Date'
            type="text"
            required
            ></input>

            {/* body */}
            
            <textarea
            placeholder='Content'
            type="text"
            required
            ></textarea>
            <button className='bbutton2 bcorrect'>Submit</button>
        </form>
        </div>
        

        
    </div>
  )
}

export default CreateBlog