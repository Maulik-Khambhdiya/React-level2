import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api1 = () => {

  const [list, setList] = useState([])


  useEffect(() => {
    getApi()
  },[])


  function getApi() {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {

        console.log(res.data)

        setList(res.data)
      })

      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>

      <table border={1}>
        <tr>
          <th>Userid</th>
          <th>Id</th>
          <th>Title</th>
          <th>Compeleted</th>
        </tr>


        {

          list.map((item, indx) => (

            <tr>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{(item.completed) ? "true" : "false" }</td>
            </tr>
          ))
        }
      </table>

    </>
  )
}

export default Api1
