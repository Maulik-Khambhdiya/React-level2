import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';


const Task = () => {

    const [list, setList] = useState([])
    const [editId, seteditId] = useState(null)

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: ""
        },

        validationSchema: Yup.object({
            name: Yup.string()
            .required("Name is required"),
            surname: Yup.string()
            .required("Surname is required"),

        }),

        onSubmit: (values) => {

            if (editId != null) {
                let copyData = [...list]

                copyData[editId] = values
                setList(copyData)
                seteditId(null)
            }
            else {
                setList([...list, values])
            }

            formik.resetForm()
        }
    })

    const deleteData = (index) => {
        const copyData = [...list]
        copyData.splice(index, 1)
        setList(copyData)
    }

    const editData = (i, index) => {
        formik.setFieldValue('name', i.name)
        formik.setFieldValue('surname', i.surname)
        seteditId(index)
       

    }

    return (
        <>

            <form action="" onSubmit={formik.handleSubmit}>
                <input type="text" name="name" value={formik.values.name} id="" onChange={formik.handleChange} />
                {formik.touched.name && formik.errors.name ?(
                 <p>{formik.errors.name}</p>
                ):null}
                <br /><br />
                <input type="text" name="surname" value={formik.values.surname} id="" onChange={formik.handleChange} /><br /><br />
                {formik.touched.surname && formik.errors.surname ?(
                 <p>{formik.errors.surname}</p>
                ):null}
                <input type="submit" />
            </form>

            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>

                {
                    list.map((i, index) => (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                            <td><button onClick={() => deleteData(index)}>Delete</button></td>
                            <td><button onClick={() => editData(i, index)}>Edit</button></td>
                        </tr>
                    ))
                }
            </table>

        </>

    )
}


export default Task
