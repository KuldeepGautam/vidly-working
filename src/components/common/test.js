import React from "react";
import axios from "axios";
// import Pagination from "./pagination";
import { useEffect, useState } from "react";
// import { paginate } from "../../utils/paginate";

export default function () {
  const [apiData, setApiData] = useState([]);
  // const [state, setState] = useState({
  //   currentPage: 1,
  //   pageSize: 10,
  // });

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log(response.data);
        setApiData(response.data);
      });
  }

  // handlePageChange = (page) => {
  //   console.log(page);
  //   this.setState({ currentPage: page });
  // };

  // const allData = paginate(apiData, currentPage, pageSize);

  return (
    <div className="container-fluid">
      {`Total number of movies ${apiData.length}`}
      <table width="100%" className="table table-hover">
        <thead>
          <tr className="bg-secondary text-white">
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((customer, key) => (
            <tr key={key}>
              <td>{customer.userId}</td>
              <td>{customer.title}</td>
              <td>{customer.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* <Pagination
          itemsCount={count}
          // Here is "count" movie length set in "itemsCount" all row numbers
          pageSize={pageSize}
          // How many rows shown on the page
          currentPage={currentPage}
          // Default set currentPage 1, For when first load page on web....
          onPageChange={handlePageChange}
          // Action on button change
        /> */}
      </div>
    </div>
  );
}
