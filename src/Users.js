import React, { useState } from "react";
import { Table } from "react-bootstrap";
function Users() {
  const [user, setUser] = useState([
    { name: "vishal", age: "26", address: "Noida" },
    { name: "arun", age: "30" },
    { name: "ajay", age: "26" },
    { name: "vipul", age: "32" },
    { name: "sandy", age: "21" },
  ]);
  return (
    <>
      <h1>User listing</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th> age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
         {
             user.map((item, index)=> <tr key={index}>
             <td>{index+1}</td>
             <td colSpan="2">{item.name}</td>
             <td>{item.age}</td>
             <td>{item.address}</td>
           </tr>)
         }
        </tbody>
      </Table>
    </>
  );
}

export default Users;
