import { Switch, Route, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import MovieDetails from "../MovieDetails"

function Movies({movies}) {
  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav>
        {movies.map((movie) => (
          <NavLink to={`/movie/${movie.id}`}>{movie.title}</NavLink>
        ))}
      </nav>
      <Switch>
        <Route path='/movies/:movieId'>
          <MovieDetails movies={movies}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;