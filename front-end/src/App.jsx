import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
const [movies,setMovies] = useState([])
        useEffect(()=>{
          axios.get('/api/getData')
          .then((response)=>{
            setMovies(response.data)
          })
        })
  return (
    <>
      <h1>Hello I am learning how to connect back-end to front-end</h1>
      <h2>Movie Count: {movies.length}</h2>
      {
        movies.map((movie,index)=>{
          return <div key={movie.id}>
            <h2>{movie.title}</h2>
            <h2>{movie.director}</h2>
          </div>
        })
      }
    </>
  )
}

export default App
