import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdAutoDelete } from 'react-icons/md';

const Row = ({row}) => {
    const { name, email, phone, dob } =row;
    return (
        <tr>
              <td>{`${name.first} ${name.last}`}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{dob.age}</td>
              <td>
                <MdAutoDelete className='me-3' />
                <BiEdit />
              </td>
         </tr>
    )
}

export default Row
// {
//     user.map(()=> (
//      
//     ))
//   }