import React, { useContext } from 'react'
import styled from 'styled-components'
import { cardListType } from '../../assets/config'
import Card from './Card'
import { cardContext, bigCardStatus } from '../context'

const GridCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;    
`

const CardWrapper = styled.div`
  display: grid;
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
const BigCard = styled.div`
  position: fixed;
  z-index: 1;
  background-color: #efeff0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s linear, 
  visibility 0.01s linear 0.3s;
  user-select: none;
  
  &.activ {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s linear 0.01s, 
    visibility 0.3s linear;
    
  }

  & img {
    position: absolute;
    width: auto;
    height: auto;
    max-width: calc(100% - (50px * 2));
    max-height: calc(100% - (50px * 2));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const cardList = () => {
  const { activCard, setActivCard } = useContext(cardContext)
  const { bcStatus, setBcStatus } = useContext(bigCardStatus)

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
      <BigCard className={bcStatus}>
        <Card
          cardName={activCard}
          onClick={() => {
            setBcStatus(``)
          }}
          variationList={cardListType.filter(el => el.card === activCard)?.[0]?.variation}
        />
      </BigCard>
      <GridCard>
        {cardList(`standard`, `Poker`)}
        {cardList(`special`, `Special`)}
      </GridCard>
    </>
  )
}

export default cardList
