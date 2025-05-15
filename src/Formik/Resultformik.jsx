import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const Resultformik = () => {

    const [editId,seteditId]=useState(null)

    const [ini, setIni] = useState({
        name: '',
        sub1: '',
        sub2: '',
        sub3: ''
    })


    const [list, setList] = useState([])

    const handleData = (values, { resetForm }) => {

        if(editId != null)
        {
            let copyData=[...list]
            copyData[editId]=values
            setList(copyData)
            seteditId(null)
        }
        else{
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
                onSubmit={handleData}
            >
                <Form>
                    <Field name="name"></Field><br /><br />
                    <Field name="sub1"></Field><br /><br />
                    <Field name="sub2"></Field><br /><br />
                    <Field name="sub3"></Field><br /><br />

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
                            <td>{index}</td>
                            <td>{i.name}</td>
                            <td>{parseInt(i.sub1)}</td>
                            <td>{parseInt(i.sub2)}</td>
                            <td>{parseInt(i.sub3)}</td>
                            <td>{parseInt(i.sub1) + parseInt(i.sub2) + parseInt(i.sub3)}</td>
                            <td>{Math.max(parseInt(i.sub1), parseInt(i.sub2), parseInt(i.sub3))}</td>
                            <td>{Math.min(parseInt(i.sub1), parseInt(i.sub2), parseInt(i.sub3))}</td>
                            <td>{(parseInt(i.sub1) + parseInt(i.sub2) + parseInt(i.sub3))/ 3} %</td>
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
