import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const ImageCrud = () => {

    const [ini, setIni] = useState({
        name: '',
        image: ''
    })

    const dataView = () => {
        axios.get('https://generateapi.onrender.com/api/userImage', {
            headers: {
                Authorization: 'CMUFZQvEMkKl8b53',
            }
        })

            .then((res) => {
                console.log(res.data.Data);
            })

            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        dataView()
    }, [])

    const handleSubmit = (values) => {
        
        // console.log(values);

        // let data = new FormData()

        // data.append("name" , values.name)

        // data.append("image" , values.image)

        axios.post('https://generateapi.onrender.com/api/userImage', values, {

            headers: {
                Authorization: 'CMUFZQvEMkKl8b53',
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(() => {
                console.log("Success");
            })

            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <>

            <div>
                <Formik
                    initialValues={ini}
                    onSubmit={handleSubmit}
                >
                    {
                        ({ setFieldValue }) => (
                            <Form encType='multipart/form-data'>
                                <Field name="name"></Field> <br /><br />
                                <input type="file" name="" id="" onChange={(e) => setFieldValue("image", e.target.files[0])
                                } /> <br /><br />
                                <button type='submit'>Submit</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>

        </>
    )
}

export default ImageCrud
