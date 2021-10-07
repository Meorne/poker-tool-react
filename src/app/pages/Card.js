import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const propTypes = {
  cardName: PropTypes.string,
  variation: PropTypes.string,
  onClick: PropTypes.function,
}

const defaultProps = {
  cardName: null,
  variation: null,
  onClick: () => null,
}

const SmallCard = styled.div`
  padding:5px;
`
const ImgCard = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`
const FakeCard = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  
  & .wrapper {
    border: #333 1px solid;
    border-radius: 2ch;
    position: absolute;
    top: 5px;
    bottom: 5px;
    left: 5px;
    right: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  & .nbrStyle{
    font-family: 'Raleway', sans-serif;
    font-size: 3ch;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
`

const Card = ({ cardName, variation, onClick }) => {
  if (!cardName) return null
  try {
    const currentCard = require(`../../assets/img/${cardName}${variation ? `-${variation}` : ``}.jpg`).default
    return (
      <SmallCard>
        <ImgCard className="imgCard" src={currentCard} alt="" onClick={onClick} />
      </SmallCard>
    )
  } catch (error) {
    console.info(error)
    return (
      <FakeCard className="fakeCard">
        <div className="wrapper" onClick={onClick}>
          <div className="nbrStyle">
            {cardName}
          </div>
        </div>
      </FakeCard>
    )
  }
}

Card.propTypes = propTypes

Card.defaultProps = defaultProps

export default Card
