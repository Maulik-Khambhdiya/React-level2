import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'


const Crudapi2 = () => {

    const token = "lZVFw6bN8anbtLMo"

    const [list, setList] = useState([])

    const [ini, setIni] = useState({
        name: "",
        date: ""
    })

    useEffect(() => {
        viewData()
    }, [])

    function viewData() {
        axios.get("https://generateapi.onrender.com/api/user2", {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                console.log(res.data.Data);

                setList(res.data.Data)
            })
            .catch((error) => {

                console.log(error);


            })
    }

    const handleData = (values, { resetForm }) => {
        // console.log(values.date);

        // const formattedValues = {
        //     ...values,
        //     date: new Date(values.date).toISOString(),
        // };



        axios.post("https://generateapi.onrender.com/api/user2", values, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                console.log("Data Added")
                resetForm()
                viewData()
            })
            .catch((error) => {
                console.log(error);

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
                    <Field name="date" type="date"></Field><br /><br />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
                {
                    list.map((i, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{i.name}</td>
                            <td>{i.date}</td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Crudapi2
