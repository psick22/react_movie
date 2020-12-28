import React from "react";
import axios from "axios";

const Movie = ({ movie }) => (
  <div>
    <h1>Title : {movie.title}</h1>
    <h2>
      Rating : {movie.rating} / 10.0 <br /> Genres : {movie.genres[0]}
      <br /> Lang : {movie.language} <br />
      {movie.year}
    </h2>
    <p>{movie.summary}</p>
    <img src={movie.large_cover_image} alt="" srcset="" />
  </div>
);

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const movies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
    this.setState({ movies: movies.data.data.movies });
    this.setState({ isLoading: false });
    console.log(this.state);
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <div>{isLoading ? "Loading" : "We are ready"}</div>
        <div>
          {this.state.movies.map((movie) => {
            console.log(movie);
            return <Movie movie={movie} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
