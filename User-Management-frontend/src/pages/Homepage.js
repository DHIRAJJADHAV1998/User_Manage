import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Homepage ()
{
  const {id}=useParams();
    const[allUsers,setallUsers]=useState([]);
    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers=async ()=>{
         const result=await axios.get("http://localhost:8080/getUsers")
       // console.log(allUsers);
       setallUsers(result.data)
    }

    const onDelete = async (id) => {
      //we are sending user so User
      await axios.delete(`http://localhost:8080/deleteUser/${id}`);
      loadUsers();
    };
  return (
    <div>
        <div className='container'>

<div className='py-4'>

<table class="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
        {
            allUsers.map((user,index)=>(
                <tr>
                <th scope="row" key={index}>{index+1}</th>
<td>{user.name}</td>
<td>{user.username}</td>
<td>{user.email}</td>
<td>
    <Link className='btn btn-primary mx-2' to={`/getUser/${user.id}`}>View</Link>
    <Link className='btn btn-outline-primary mx-2' to={`/updateUser/${user.id}`}>Edit</Link>
    <Link className='btn btn-danger mx-2' onClick={()=>onDelete(user.id)}>Delete</Link>

</td>

            </tr>
            )
            )
        }
  </tbody>
</table>

</div>
        </div>
    </div>
  )
}
