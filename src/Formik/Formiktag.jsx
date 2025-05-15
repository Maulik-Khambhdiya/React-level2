import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const Formiktag = () => {

  const[editId,seteditId]=useState(null)

  const [ini, setIni] = useState({
    name: '',
    age: ""
  })

  const [list, setList] = useState([])

  const handleData = (values, { resetForm }) => {


    if(editId != null)
    {
      // console.log("9999999");
      
      const copyData=[...list]
      copyData[editId]=values
      setList(copyData)
      seteditId(null)
      
    }
    else{
      setList([...list, values])
    }
    
    resetForm()
  }

  const deletData = (index) => {
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
        onSubmit={handleData}>
        <Form>
          <Field name="name"></Field><br /><br />
          <Field name="age"></Field><br /><br />
          <button type='submit'>Submit</button><br /><br />
        </Form>
      </Formik>

      <table border={1}>
        <tr>
          <td>No</td>
          <td>name</td>
          <td>Age</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>
        {
          list.map((i, index) => (
            <tr>
              <td>{index+1}</td>
              <td>{i.name}</td>
              <td>{i.age}</td>

              <td>
                <button onClick={() => deletData(index)}>Delete</button>
              </td>
              <td>
                <button onClick={() => editData(i, index)}>Edit</button>
              </td>
            </tr>
          ))
        }
      </table>
    </>
  )
}

export default Formiktag
