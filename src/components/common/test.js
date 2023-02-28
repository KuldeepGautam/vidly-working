import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const Test = () => {
  const [state, setState] = useState([]);
  //   const [userList, setUserList] = useState("100");

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log(response.data);
        setState(response.data);
      });
  }

  //   const deleteUser = (id) => {
  //     console.log(id);
  //     axios
  //       .delete(`http://192.168.0.186/api/customers?customerId=${id}`)
  //       .then(function (response) {
  //         console.log(response.data);
  //         alert("Deleted successfully!");
  //         getUsers();
  //         // setState();
  //       });
  //   };

  return (
    <>
      <div className="container-fluid">
        <table width="100%" className="table table-hover">
          <thead>
            <tr className="bg-secondary text-white">
              <th>Id</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
              <th>Created Date</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {state.map((customer, key) => (
              <tr key={key}>
                <td>{customer.userId}</td>
                {/* <td>{customer.name}</td>
                  <td>{customer.mobileNo}</td>
                  <td>{customer.email}</td>
                  <td>{customer.address}</td>
                  <td>{customer.insertedAt}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Test;
