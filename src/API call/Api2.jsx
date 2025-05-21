import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api2 = () => {
    const [list,setList]=useState([])

    useEffect(()=>{
        getApi()
    })

    function getApi() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            setList(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (  
   <>
   <table border={1}>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company</th>
    </tr>

    {
        list.map((i,index)=>(
            <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.username}</td>
                <td>{i.email}</td>
                <td>{i.address.street},{i.address.suite},{i.address.city},{i.address.zipcode}</td>
                <td>{i.phone}</td>
                <td>{i.website}</td>
                <td>{i.company.name}</td>
            </tr>
        ))

    }
   </table>
   
   
   </>
  )
}

export default Api2
