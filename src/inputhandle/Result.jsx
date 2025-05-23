import React, { useState } from 'react'

const Result = () => {

    const [name, setName] = useState('')
    const [sub1, setSub1] = useState('')
    const [sub2, setSub2] = useState('')
    const [sub3, setSub3] = useState('')
    const [list, setList] = useState([])
    const [editId, seteditId] = useState(null)

    const handleData = () => {

        const obj = { name, sub1: parseInt(sub1), sub2: parseInt(sub2), sub3: parseInt(sub3) }

        

        if (editId != null) {
            let copyData = [...list]
            copyData[editId] = obj
            setList(copyData)
            seteditId(null)

        }

        else {
            setList([...list, obj])
        }
        setName('')
        setSub1('')
        setSub2('')
        setSub3('')
    }

    const deleteData = (index) => {
        let copyData = [...list]
        copyData.splice(index, 1)
        setList(copyData)
    }

    const editData = (i, index) => {

        setName(i.name)
        setSub1(i.sub1)
        setSub2(i.sub1)
        setSub3(i.sub1)

        seteditId(index)

    }

    return (
        <>

       

            <input type="text" name="" id="" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="text" name="" id="" placeholder='subject1 Mark' value={sub1} onChange={(e) => setSub1(e.target.value)} /><br /><br />
            <input type="text" name="" id="" placeholder='subject2 Mark' value={sub2} onChange={(e) => setSub2(e.target.value)} /><br /><br />
            <input type="text" name="" id="" placeholder='subject3 Mark' value={sub3} onChange={(e) => setSub3(e.target.value)} /><br /><br />

            <button type="submit" onClick={handleData}>Submit</button>


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
                            <td>{i.sub1}</td>
                            <td>{i.sub2}</td>
                            <td>{i.sub3}</td>
                            <td>{i.sub1 + i.sub2 + i.sub3}</td>
                            <td>{Math.max(i.sub1, i.sub2, i.sub3)}</td>
                            <td>{Math.min(i.sub1, i.sub2, i.sub3)}</td>
                            <td>{(i.sub1 + i.sub2 + i.sub3) / 3} %</td>
                            <td><button onClick={() => deleteData(index)}>Delete</button></td>
                            <td><button onClick={() => editData(i, index)}>Edit</button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Result
