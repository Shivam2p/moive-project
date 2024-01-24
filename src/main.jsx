import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Search from './Search.jsx'

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Search>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Search>
   
 
)
// https://api.themoviedb.org/3/movie/550?api_key=922b6f4b1215388f7124f1f837dac1f5 

// 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzFiYzRhZTQ5YzMwOGFkMDY5OTI3YWJhNDM2MGE1ZiIsInN1YiI6IjY1OWU4NTYxNzEzZWQ0MDE0OGJmNGVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3EZZZ_ddDRqBKDxzRbW4Tt55z-guDMNMnszBceowQmg'