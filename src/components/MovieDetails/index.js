import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function MovieDetails(props) {
  const {movieId} = useParams()
  const movieChoice = props.find((movie) => movie.id === +movieId)
  console.log(movieId)
  return (
    <div className='comp purple'>
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;