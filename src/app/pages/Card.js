import React from 'react'
import PropTypes from 'prop-types'

import fakecard from '../../assets/img/fake-card.jpg'

import {
  SmallCard,
  ImgCard,
  FakeCard,
} from '../styles/Card.style'

const propTypes = {
  cardId: PropTypes.string,
  cardName: PropTypes.string,
  variation: PropTypes.string,
  onClick: PropTypes.func,
  colors: PropTypes.object,
  customStyle: PropTypes.string,
}

const defaultProps = {
  cardId: null,
  cardName: null,
  variation: null,
  onClick: () => null,
  colors: null,
  customStyle: null,
}

const Card = ({
  cardId, cardName, variation, onClick, colors, customStyle,
}) => {
  if (!cardId) return null
  const finalImgName = `${cardId}${variation ? `-${variation}` : ``}`
  try {
    const currentCard = require(`../../assets/img/${finalImgName}.jpg`).default
    return (
      <SmallCard className="SmallCard">
        <ImgCard className="imgCard" src={currentCard} alt="" onClick={onClick} title={`${cardName}`} />
      </SmallCard>
    )
  } catch (error) {
    return (
      <FakeCard colors={colors} customStyle={customStyle}>
        <img src={fakecard} alt="" title={`${cardName}`} />
        <div className="wrapper" onClick={onClick}>
          <div className="strStyle">
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
