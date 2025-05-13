import { useFormik } from 'formik'
import React, { useState } from 'react'

const Task = () => {

    const [list, setList] = useState([])

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: ""
        },
        onSubmit: (values) => {
            setList([...list, values])
        }
    })

    const deleteData=(index)=>{
        const copyData=[...list]
        copyData.splice(index,1)
        setList(copyData)
    }

  
    return (

        <form action="" onSubmit={formik.handleSubmit}>
            <input type="text" name="name" value={formik.values.name} id="" onChange={formik.handleChange} /><br /><br />
            <input type="text" name="surname" value={formik.values.surname} id="" onChange={formik.handleChange} /><br /><br />
            <input type="submit" />

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
                            <td><button onClick={()=>deleteData(index)}>Delete</button></td>
                            <td><button onClick={()=>editData(i,index)}>Edit</button></td>
                        </tr>
                    ))
                }
            </table>

        </form>
       
    )
}


export default Task
