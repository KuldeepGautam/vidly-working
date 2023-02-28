import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  // Here is "state" holds the status of component
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
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
    const { currentPage, pageSize, movies: allMovies } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;
    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div>
          <p>Showing {count} movies in the database.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Action</th>
                <th>Like</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Like />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <Pagination
              itemsCount={count}
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
      </React.Fragment>
    );
  }
}

export default Movies;
