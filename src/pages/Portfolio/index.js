import { React, useEffect, useState } from 'react'
import Card from '../../components/SimpleCard'

import axios from "axios"

import { Container } from './Portfolio.styled'
import SkeletonLoading from './Skeleton'

function Portfolio() {

  const [myGames, setmyGames] = useState({})
  const [loading, setLoading] = useState(false)

  const GetGames = () => {
    console.log("Trying to get games")
    setLoading(true)
    return axios('https://cvreactapi.herokuapp.com/')
      .then((response) => {
        setmyGames(response.data.games)
        setLoading(false)
      })
      .catch(error => console.log(`Error: ${error}`))
  }

  useEffect(() => {
    GetGames()
    
  }, [])

  console.log(myGames === undefined)

  return (
    <Container>
      {
        (loading) ? <SkeletonLoading /> : 
        Object.keys(myGames).map(index => 
            <Card
            key={index}
            photo={myGames[index].cover_url}
            title={myGames[index].title}
            description={myGames[index].short_text}
            link={myGames[index].url}
          />
        )
      }
    </Container>
  )
}

export default Portfolio
