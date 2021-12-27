import React from "react";
import { Row, Table } from "react-bootstrap";


const MyTable = ({user }) => {
  
  // console.log(user)
  // const { name, email, phone, dob } =user;
 

  return (
    <Table striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {user.map(row => (
        <Row row={row}  key={row.email} />
      ))}
     
      </tbody>
    </Table>
  );
};

export default MyTable;
// {user.map(row => (
//   <Row row={row}  key={row.email} />
// ))}
