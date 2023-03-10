import React, { Component } from "react";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import MovieTable from "./common/movieTable";

class Movies extends Component {
  // Here is "state" holds the status of component
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    //componentDidMount when called component is render in DOM....
    const genres = [{ name: "all genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-3">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemChange={this.handleGenreSelect}
            />
          </div>
          <div className="col-lg-9">
            <p>Showing {filtered.length} movies in the database.</p>
            <MovieTable movies={movies} onDelete={this.handleDelete} />
            <div>
              <Pagination
                itemsCount={filtered.length}
                // Here is "count" movie length set in "itemsCount" all row numbers
                pageSize={pageSize}
                // How many rows shown on the page
                currentPage={currentPage}
                // Default set currentPage 1, For when first load page on web....
                onPageChange={this.handlePageChange}
                // Action on button change
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
