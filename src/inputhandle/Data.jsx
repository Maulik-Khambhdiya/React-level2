import React, { useState } from 'react'

const Data = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [list, setList] = useState([])

    const handleData = () => {

          // console.log(name)
          // console.log(surname)
        const obj = { name, surname }

        setList([...list, obj])
        setName('')
        setSurname('')

         //   console.log(list)

    }

    return (
        <>
            <input type="text" name="" id="" onChange={(e) => setName(e.target.value)} />
            <br /><br />
            <input type="text" name="" id="" onChange={(e) => setSurname(e.target.value)} />
            <br /><br />
            <button type="submit" onClick={handleData}>Submit</button>

            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                </tr>

                {
                    list.map((el, index) => (
                        <tr>
                            <td>{el.name}</td>
                            <td>{el.surname}</td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Data
