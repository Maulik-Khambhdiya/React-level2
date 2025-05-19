import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';

const Resultformik = () => {

    const [editId, seteditId] = useState(null)

    const [ini, setIni] = useState({
        name: '',
        sub1: '',
        sub2: '',
        sub3: ''
    })


    const [list, setList] = useState([])

    const handleData = (values, { resetForm }) => {

        if (editId != null) {
            
            let copyData = [...list]
            copyData[editId] = values
            setList(copyData)
            seteditId(null)
            setIni({
                name: '',
                sub1: '',
                sub2: '',
                sub3: ''
            });
        }

        else {
            setList([...list, values])
        }

        resetForm()

    }

    const deleteData = (index) => {
        let copyData = [...list]
        copyData.splice(index, 1)
        setList(copyData)
    }

    const editData = (i, index) => {
        setIni(i)
        seteditId(index)
    }

    return (
        <>

            <Formik
                enableReinitialize
                initialValues={ini}
                validationSchema={Yup.object({
                    name: Yup.string()
                    .required('Name Is Required'),
                    sub1: Yup.number()
                    .required('Sub1 Is Required'),
                    sub2: Yup.number()
                    .required('Sub2 Is Required'),
                    sub3: Yup.number()
                    .required('Sub3 Is Required'),

                })}
                onSubmit={handleData}
            >
                <Form>
                    <Field name="name"></Field><br />
                     <ErrorMessage name="name" />
                    <br />
 
                    <Field name="sub1"></Field><br />
                    <ErrorMessage name="sub1" />
                    <br />
                     
                    <Field name="sub2"></Field><br />
                    <ErrorMessage name="sub2" />
                    <br />
                    <Field name="sub3"></Field><br />
                    <ErrorMessage name="sub3" />
                    <br />

                    <button type='submit'>Submit</button><br /><br />

                </Form>
            </Formik>


            <table border={1}>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Subject 1</th>
                    <th>Subject 2</th>
                    <th>Subject 3</th>
                    <th>Total</th>
                    <th>Max</th>
                    <th>Min</th>
                    <th>Percentage</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>

                {
                    list.map((i, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{i.name}</td>
                            <td>{parseInt(i.sub1)}</td>
                            <td>{parseInt(i.sub2)}</td>
                            <td>{parseInt(i.sub3)}</td>
                            <td>{parseInt(i.sub1) + parseInt(i.sub2) + parseInt(i.sub3)}</td>
                            <td>{Math.max(parseInt(i.sub1), parseInt(i.sub2), parseInt(i.sub3))}</td>
                            <td>{Math.min(parseInt(i.sub1), parseInt(i.sub2), parseInt(i.sub3))}</td>
                            <td>{(parseInt(i.sub1) + parseInt(i.sub2) + parseInt(i.sub3)) / 3} %</td>
                            <td><button onClick={() => deleteData(index)}>Delete</button></td>
                            <td><button onClick={() => editData(i, index)}>Edit</button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Resultformik
