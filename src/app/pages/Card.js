import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getRealRandom } from '../utils'

const propTypes = {
  cardName: PropTypes.string,
  onClick: PropTypes.function,
  variationList: PropTypes.array,
}

const defaultProps = {
  cardName: null,
  onClick: () => null,
  variationList: [],
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
const RefreshBtn = styled.button`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  z-index: 10;
  margin: 0 0 20px 20px;
  border: none;
`
const genRandVar = (variationList, currentResult) => {
  if (variationList.length > 0) {
    return `${variationList[getRealRandom(0, variationList.length, variationList.findIndex(el => el === currentResult))]}`
  }
  return ``
}

const Card = ({ cardName, onClick, variationList }) => {
  if (!cardName || cardName === ``) return null
  const [currentVar, setCurrentVar] = useState(null)
  console.log(variationList)

  let randBtn = null
  if (variationList.length > 0) {
    if (!currentVar) setCurrentVar(genRandVar(variationList))
    randBtn = (
      <RefreshBtn onClick={() => { setCurrentVar(genRandVar(variationList, currentVar)) }}>
        <svg viewBox="0 0 24 24">
          <path d="M20.3,3.7l-1.9,1.9c-3.5-3.5-9.2-3.5-12.7,0c-3.5,3.5-3.5,9.2,0,12.7C7.4,20.1,9.7,21,12,21s4.6-0.9,6.4-2.6 c0.8-0.8,0.8-2,0-2.8s-2-0.8-2.8,0c-1.9,2-5.1,1.9-7.1,0C7.5,14.6,7,13.3,7,12s0.5-2.6,1.5-3.5c1.9-2,5.1-2,7.1,0l-1.8,1.8 c-0.6,0.6-0.2,1.7,0.7,1.7H21c0.6,0,1-0.4,1-1V4.4C22,3.5,20.9,3.1,20.3,3.7z" />
        </svg>
      </RefreshBtn>
    )
  } else if (currentVar) setCurrentVar(null)

  const genName = `${cardName}${currentVar ? `-${currentVar}` : ``}`
  console.log(genName)
  const currentCard = require(`../../assets/img/${genName}.jpg`).default
  return (
    <SmallCard>
      {randBtn}
      <ImgCard src={currentCard} alt="" onClick={onClick} />
    </SmallCard>
  )
}

Card.propTypes = propTypes

Card.defaultProps = defaultProps

export default Card
