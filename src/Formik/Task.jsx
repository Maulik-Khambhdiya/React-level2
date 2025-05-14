import { useFormik } from 'formik'
import React, { useState } from 'react'

const Task = () => {

    const [list, setList] = useState([])
    const [editId,seteditId]=useState(null)

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: ""
        },
        onSubmit: (values) => {

            if(editId !=null)
            {
                let copyData=[...list]

                copyData[editId]=values
                setList(copyData)
                seteditId(null)
            }
            else{
                setList([...list, values])
            }
          
            formik.resetForm()
        }
    })

    const deleteData=(index)=>{
        const copyData=[...list]
        copyData.splice(index,1)
        setList(copyData)
    }

    const editData=(i,index)=>{
         formik.setFieldValue('name',i.name)
         formik.setFieldValue('surname',i.surname)
         seteditId(index)
         console.log(i);
         
    }
  
    return (
        <>

        <form action="" onSubmit={formik.handleSubmit}>
            <input type="text" name="name" value={formik.values.name} id="" onChange={formik.handleChange} /><br /><br />
            <input type="text" name="surname" value={formik.values.surname} id="" onChange={formik.handleChange} /><br /><br />
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
                            <td><button onClick={()=>deleteData(index)}>Delete</button></td>
                            <td><button onClick={()=>editData(i,index)}>Edit</button></td>
                        </tr>
                    ))
                }
            </table>

       </>
       
    )
}


export default Task
