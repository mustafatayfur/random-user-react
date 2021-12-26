import React from 'react'
import { Table } from 'react-bootstrap'
import { MdAutoDelete } from "react-icons/md";
import {BiEdit} from "react-icons/bi"

const MyTable = ({user}) => {

  const { name, email, phone, dob } = user
  const newPerson = {
    name: `${name.first} ${name.last}`,
    email: email,
    phone: phone,
    age: dob.age,
    
  }
  localStorage.setItem('myData', newPerson);


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
      <td>{name}</td>
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
