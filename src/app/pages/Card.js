import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import fakecard from '../../assets/img/fake-card.jpg'

const propTypes = {
  cardName: PropTypes.string,
  variation: PropTypes.string,
  onClick: PropTypes.func,
  colors: PropTypes.object,
}

const defaultProps = {
  cardName: null,
  variation: null,
  onClick: () => null,
  colors: null,
}

const SmallCard = styled.div`
  cursor: pointer;
  padding:5px;
`
const ImgCard = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`
const FakeCard = styled.div`
  position: relative;
  cursor: pointer;

  & > img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    visibility: hidden;
  }
  
  & .wrapper {
    border: #333 1px solid;
    border-radius: 1ch;
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
    background-color: ${({ colors }) => colors?.bg || `#efeff0`};
  }

  & .nbrStyle{
    font-family: 'Raleway', sans-serif;
    font-size: 10ch;
    font-weight: bold;
    width: 100%;
    text-align: center;
    color: ${({ colors }) => colors?.font || `#000`};
  }
`

const Card = ({
  cardName, variation, onClick, colors,
}) => {
  if (!cardName) return null
  const finalImgName = `${cardName}${variation ? `-${variation}` : ``}`
  try {
    const currentCard = require(`../../assets/img/${finalImgName}.jpg`).default
    return (
      <SmallCard>
        <ImgCard className="imgCard" src={currentCard} alt="" onClick={onClick} />
      </SmallCard>
    )
  } catch (error) {
    return (
      <FakeCard className="fakeCard" colors={colors}>
        <img src={fakecard} alt="" />
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
