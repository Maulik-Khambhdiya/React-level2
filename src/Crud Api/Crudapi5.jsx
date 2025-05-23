import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const Crudapi5 = () => {

    const token = "3ybvFyazoYKsbG8d"

    const [list, setList] = useState([])

    const [ini, setIni] = useState({
        name: "",
        surname: ""
    })

    const [editId,setEditId]=useState(null)

    useEffect(()=>{
        viewData()
    })


    function viewData() {
        axios.get("https://generateapi.onrender.com/api/user5", {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                setList(res.data.Data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleSubmit = (values, { resetForm }) => {

        const{_id, ...rest}=values

        if(editId!=null)
        {
            axios.patch(`https://generateapi.onrender.com/api/user5/${editId}`,rest,{
                headers:{
                    Authorization:token
                }
            })
            .then((res)=>{
                console.log("edit successfully");
                viewData()
                setEditId(null)
                setIni({
                    name: "",
                    surname: ""
                })
                
            })
            .catch((error)=>{
                console.log(error)
            })
        }

        else{
            axios.post("https://generateapi.onrender.com/api/user5", values, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                console.log("data added")
                viewData()
                resetForm()
            })
            .catch((error) => {
                console.log(error);

            })
        }
        
    }

    const deleteData = (deleteId) => {

        axios.delete(`https://generateapi.onrender.com/api/user5/${deleteId}`, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                console.log("data deleted")
                viewData()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const editData=(i)=>{
        setIni(i)
        setEditId(i._id)
    }

    return (
        <>

            <Formik
                enableReinitialize
                initialValues={ini}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field name="name"></Field><br /><br />
                    <Field name="surname"></Field><br /><br />
                    <button type="submit">Submit</button>
                    <br /><br />
                </Form>
            </Formik>


            <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>

                {
                    list.map((i, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                            <td><button onClick={() => deleteData(i._id)}>DELETE</button></td>
                            <td><button onClick={() => editData(i)}>EDIT</button></td>
                        </tr>
                    ))
                }

            </table>
        </>
    )
}

export default Crudapi5
