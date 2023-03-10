import React from "react";
import Like from "./like";
// import Like from "./common/like";

const MovieTable = (props) => {
  const { movies, onDelete } = props;
  return (
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
                onClick={() => onDelete(movie)}
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
  );
};

export default MovieTable;
