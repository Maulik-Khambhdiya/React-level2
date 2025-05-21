import { ListItem } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Api = () => {

    const [list, setList] = useState([])

    useEffect(()=>{
        getApi()
    },[])

    function getApi() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                console.log(res.data)
                setList(res.data)
            })
                        
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>

            <table border={1}>
                <tr>
                    <td>AlbumId</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Url</td>
                    <td>Thumbnailurl</td>
                </tr>


                {
                    list.map((i, index) => (
                        <tr>
                            <td>{i.albumId}</td>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.url}</td>
                            <td>{i.thumbnailUrl}</td>
                        </tr>
                    ))
                }
            </table>

        </>
    )
}

export default Api
