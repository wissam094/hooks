
import Movie from './component/MovieCard.js';
import AddMovie from './component/addMovie'
import MovieList from './component/MovieList.js'
import React, {useState} from 'react'
function App() {
  const [Movies,setMovies]=useState([
    {titre:"annihilation",
      rate:3,
      img:"https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg"
    },
    {titre:"Game of thrones",
      rate:9.5,
      img:"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"
    },
    {titre:"Breaking bad",
      rate:9.5,
      img:"https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    }

])
const addMovie=(a,b,c)=>{
  console.
  setMovies([...Movies,{titre:a,rate:b,img:c}])
}

  return (
    <div className="App">
  <MovieList Movies={Movies}/>
  <AddMovie addMovie={addMovie}/>
    </div>
  );
}

export default App;
