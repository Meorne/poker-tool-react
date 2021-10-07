import React, { useContext } from 'react'
import styled from 'styled-components'
import { cardListType } from '../../assets/config'
import Card from './Card'
import BigCard from './BigCard'
import { cardContext, bigCardStatus } from '../context'

const GridCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  overflow: auto;
`

const CardWrapper = styled.div`
  display: grid;
  width: calc(100% - 2px);
  align-content: stretch;
  grid-template-columns: repeat(6, minmax(auto, 16.66%));

  @media (max-width: 640px) {
    grid-template-columns: repeat(4, minmax(auto, 25%));
  }
`

const Title = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  width: 100%;
  text-align: center;
`

const cardList = () => {
  const { setActivCard } = useContext(cardContext)
  const { setBcStatus } = useContext(bigCardStatus)

  const cardList = (type, title) => (
    <>
      <Title>
        {`${title} Cards`}
      </Title>
      <CardWrapper>
        {cardListType
          .filter(el => el.type === type)
          .map(({ card }) => (
            <Card
              cardName={card}
              onClick={() => {
                setActivCard(card)
                setBcStatus(`activ`)
              }}
            />
          ))}
      </CardWrapper>
    </>
  )

  return (
    <>
      <BigCard />
      <GridCard>
        {cardList(`standard`, `Poker`)}
        {cardList(`special`, `Special`)}
      </GridCard>
    </>
  )
}

export default cardList
