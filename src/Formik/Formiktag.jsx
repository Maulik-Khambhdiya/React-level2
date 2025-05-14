import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const Formiktag = () => {

  const [ini,setIni]=useState({
    name: '',
    age: ""
  })

  const [list , setList] = useState([])

  const handleData=(values,{resetForm})=>{
    setList([...list,values])
    resetForm()
  }

  const deletData=(index)=>{
    let copyData=[...list]
    copyData.splice(index,1)
    setList(copyData)
  }

   const editData = (i , index) => {
        setIni(i)
    }
    
  return (
    <>
    <Formik 
    enableReinitialize
    initialValues={ini}
    onSubmit={handleData}>
      <Form>
        <Field name="name"></Field>
        <Field name="age"></Field>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>

    <table border={1}>
                <tr>
                    <td>name</td>
                    <td>Age</td>
                    <td>EDIT</td>
                </tr>
                {
                    list.map((i, index) => (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.age}</td>

 <td>
                                <button  onClick={() => deletData(index)}>Delete</button>
                            </td>
                            <td>
                                <button  onClick={() => editData(i, index)}>EDIT</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
    </>
  )
}

export default Formiktag
