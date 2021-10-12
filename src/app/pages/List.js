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
  height: 100%;
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

  const cardList = (type, title) => {
    const typeList = cardListType
      .filter(el => el.type === type)

    if (!typeList.length) return null

    return (
      <>
        <Title>
          {`${title} Cards`}
        </Title>
        <CardWrapper>
          {typeList.map(({ card, colors }) => (
            <Card
              key={card}
              cardName={card}
              colors={colors}
              onClick={() => {
                setActivCard(card)
                setBcStatus(`activ`)
              }}
            />
          ))}
        </CardWrapper>
      </>
    )
  }

  return (
    <>
      <BigCard />
      <GridCard>
        {cardList(`standard`, `Poker`)}
        {cardList(`special`, `Special`)}
        {cardList(`tshirt`, `T-shirt Size`)}
      </GridCard>
    </>
  )
}

export default cardList
