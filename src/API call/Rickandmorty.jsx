import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Rickandmorty = () => {


  const [characters, setCharacters] = useState([])
  const [location, setlocation] = useState([])
  const [episode, setepisode] = useState([])



  useEffect(() => {
    viewData()
  }, [])

  function viewData() {
    Promise.all(
      [axios.get("https://rickandmortyapi.com/api/character"),
      axios.get("https://rickandmortyapi.com/api/location"),
      axios.get("https://rickandmortyapi.com/api/episode")
      ])
      .then(([characters, locations, episodes]) => {
        console.log(characters.data.results)
        console.log(locations.data.results)
        console.log(episodes.data.results)
      }
      )
  }

   return (
   <></>
  )

}


 



export default Rickandmorty
