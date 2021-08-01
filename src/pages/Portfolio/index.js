import { React, useEffect, useState } from 'react'
import Card from '../../components/SimpleCard'

import axios from "axios"

import { Container } from './Portfolio.styled'

function Portfolio() {
  const [myGames, setmyGames] = useState('')

  const API_URL_GAMES = "/my-games"

  const GetGames = () => {
    console.log("Trying to get games")
    return axios(API_URL_GAMES)
      .then((response) => {
        const allGames = response.data.games
        setmyGames(allGames)
        console.log(myGames)
      })
      .catch(error => console.log(`Error: ${error}`))
  }

  useEffect(() => {
    GetGames()
  }, [])

  const CreateCards = () => {
    let cards = []

    for (let i = 0; i < myGames.length; i++) {
      cards.push(<Card
        photo={myGames[i].cover_url}
        title={myGames[i].title}
        description={myGames[i].short_text}
        link={myGames[i].url}
      />)
    }

    return cards
  }


  return (
    <Container>
      {CreateCards()}
    </Container>
  )
}

export default Portfolio
