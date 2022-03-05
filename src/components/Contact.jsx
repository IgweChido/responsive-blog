import React from 'react'
import '../styles/CreateBlog.css'
import '../App.css';

const Contact = () => {
  return (
    <div className='cblog '>
    <div className='supers'>
        <div className='marginp'>
            <p className='atitle'>Get in touch</p>
            <p className='atwords'>Where better to find a creative agency than in Birmingham’s Jewellery Quarter? Give us a ring to have a chat or if you’re not feeling too chatty use our form to drop us a line.</p>
        </div>
        
    </div>

            <div className='marginp'>
                <form className='bform'>

                {/* title */}
                <input
                placeholder='Name'
                type="text"
                required
                ></input>

                {/* author */}
                <input
                placeholder='Email'
                type="text"
                required
                ></input>

                {/* date */}
                <input
                placeholder='Subject'
                type="text"
                required
                ></input>

                {/* body */}
                
                <textarea
                placeholder='Message'
                type="text"
                required
                ></textarea>
                <button className='bbutton2 bcorrect'>Send message</button>
            </form>
            </div>
            

            
        </div>
  )
}

export default Contact