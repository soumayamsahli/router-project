import React, { useState } from 'react'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,button } from 'react-bootstrap';
import Add from './Add';
const MoviesList = ({movies}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >  <button onClick={handleShow}>Add</button>
    <Add show={show} handleClose={handleClose} />
      {movies.map(el => <MovieCard movie={el}/>)}
    
    </div>
  )
}

export default MoviesList
