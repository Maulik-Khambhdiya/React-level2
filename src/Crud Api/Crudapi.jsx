import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const Crudapi = () => {

    const token= "t0ynzSnupDX9ouh9"

    const [list,setList]=useState([])

    const [ini,setIni]=useState({
        name:"",
        surname:"",
        age:""
    })

    useEffect(()=>{
        viewData()
    },[])

    function viewData(){
        axios.get("https://generateapi.onrender.com/api/user",
            {
                headers:{
                    Authorization: token
                }
            })

            .then((res)=>{
                setList(res.data.Data)

            })
            .catch((error)=>{
                console.log(error)
            })
    }

    const handleData=(values,{resetForm})=>{
        axios.post("https://generateapi.onrender.com/api/user",values,
            {headers:{
                Authorization: token
            }}
        )
        .then((res)=>{
            console.log("success")
            resetForm()
            viewData()

        })
        .catch((error)=>{
            console.log(error)
        })

    }

  
  return (
   <>
    
    <Formik
    
        initialValues={ini}
        onSubmit={handleData}
    >
        <Form>
            <Field name="name"></Field><br /><br />
            <Field name="surname"></Field><br /><br />
            <Field name="age" type="number"></Field><br /><br />
            <button type="submit">Submit</button><br /><br />
        </Form>
    </Formik>

    <table border={1}>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
        </tr>

        {
            list.map((i,index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>{i.name}</td>
                    <td>{i.surname}</td>
                    <td>{i.age}</td>
                </tr>
            ))
        }
    </table>
   </>
  )
}

export default Crudapi
