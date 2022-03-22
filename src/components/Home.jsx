import React from 'react'
import ListOfBlogs from './ListOfBlogs'
import '../App.css';
import '../styles/Home.css';
import UseFetch from './UseFetch';
import ErrorBoundary from './ErrorBoundary';


const Home = () => {
   
    const{data, isPending, error} =  UseFetch( 'https://newsapi.org/v2/everything?q=Apple&from=2022-02-28&sortBy=popularity&apiKey=37491848ad7b4bb9844ea07fdadf9ee0');
    console.log(isPending);
    console.log(data);
    const {articles} = data;
    
  
    
  
  return (
   
    <div>
      {error && <h1>{ error }</h1>}
      { isPending && <h1>Loading...</h1>} 
      
      <div className='supers scorrect'>
            <div className='marginp'>
                <p className='atitle'>Our blog</p>
                <p className='atwords'>Read our latest articles and posts on branding, design, technology, marketing and loads more.</p>
            </div>
            

        </div>
       
            {articles && <div className='marginp'> 
            <ErrorBoundary>
            <ListOfBlogs articles={articles}/>
            </ErrorBoundary>
        </div> }
        
      
      
        
        
    </div>
  )
}

export default Home