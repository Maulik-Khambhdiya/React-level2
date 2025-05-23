import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const Crudapi4 = () => {

    const token = "AztKbY0imdE1nHyC"
    const [list, setList] = useState([])

    const [ini, setIni] = useState({
        name: "",
        age: ""
    })

    useEffect(() => {
        viewData()
    }, [])

    const [editId, setEditId] = useState(null)

    function viewData() {
        axios.get("https://generateapi.onrender.com/api/monitor", {
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

        const {_id, ...rest}=values

        if (editId!=null) {
            axios.patch(`https://generateapi.onrender.com/api/monitor/${editId}`,rest,{
                headers:{
                    Authorization:token
                }
            })
            .then((res) =>{
                viewData()
                setEditId(null)
                setIni({
                    name: "",
                    age:""

                })
            })
        }

        else {
            axios.post("https://generateapi.onrender.com/api/monitor", values, {
                headers: {
                    Authorization: token
                }
            })
                .then((res) => {
                    console.log("Data added");
                    resetForm()
                    viewData()
                })
                .catch((error) => {
                    console.log(error);
                })
        }


    }


    const deleteData = (deletId) => {
        axios.delete(`https://generateapi.onrender.com/api/monitor/${deletId}`, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                console.log("Data deleted");
                viewData()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const editData = (item) => {
        setIni(item)
        setEditId(item._id)
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
                    <Field name="age" type="number"></Field><br /><br />
                    <button type="submit">Sumbit</button><br /><br />
                </Form>
            </Formik>

            <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>

                {
                    list.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td><button onClick={() => deleteData(item._id)}>DELETE</button></td>
                            <td><button onClick={() => editData(item)}>EDIT</button></td>
                        </tr>
                    ))
                }
            </table>

        </>
    )
}

export default Crudapi4
