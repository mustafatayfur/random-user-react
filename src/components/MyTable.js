import React from 'react'
import { Table } from 'react-bootstrap'
import { MdAutoDelete } from "react-icons/md";
import {BiEdit} from "react-icons/bi"

const MyTable = ({user}) => {

  const { name, email, phone, dob } = user
  const newPerson = {
    name: `${first} ${last}`,
    phone,
    email,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  }
  localStorage.setItem('myData', user);

    return (
        <Table striped bordered hover size="sm">
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
    <tr>
      <td>{`${name.first} ${name.last}`}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{dob.age}</td>
      <td><MdAutoDelete className='me-3'/><BiEdit/></td>
    </tr>
    
  </tbody>
</Table>
    )
}

export default MyTable;
