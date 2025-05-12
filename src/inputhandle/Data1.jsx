import React, { useState } from 'react'

const Data1 = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [list, setList] = useState([])
    const [editId, seteditId] = useState(null)

    const handleData = () => {

        const obj = { name, surname }

        if (editId != null) {
            let copyData=[...list]
            copyData[editId]=obj
            setList(copyData)
            seteditId(null)
        }

        else {
            setList([...list, obj])
        }

        setName('')
        setSurname('')

    }


    const dataDelete = (index) => {
        let copyData = [...list]
        copyData.splice(index, 1)
        setList(copyData)

    }

    const editData = (i, index) => {
        let copyData = [...list]
        setName(i.name)
        setSurname(i.surname)
        seteditId(index)

    }
    return (
        <>

            <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <input type="text" name="" id="" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <br /><br />
            <button type="submit"  onClick={handleData}>Submit</button>
<br /><br />

            <table border={1}>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Surame</th>
                    <th>Remove</th>
                    <th>Change</th>
                </tr>

                {
                    list.map((i, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                            <td><button onClick={() => dataDelete(index)}>Delete</button></td>
                            <td><button onClick={() => editData(i, index)}>Edit</button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Data1
