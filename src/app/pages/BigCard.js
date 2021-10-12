import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getRealRandom } from '../utils'
import { cardContext, bigCardStatus } from '../context'
import { cardListType } from '../../assets/config'
import Card from './Card'
import reload from '../../assets/icons/reload.svg'

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

const transitionSpeed = `0.3s`
const FullSizeCard = styled.div`
  position: fixed;
  z-index: 1;
  background-color: #fff;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity ${transitionSpeed} linear, 
  visibility 0.01s linear ${transitionSpeed};
  user-select: none;
  
  &.activ {
    visibility: visible;
    opacity: 1;
    transition: opacity ${transitionSpeed} linear 0.01s, 
    visibility ${transitionSpeed} linear;
  }

  & .imgCard {
    position: absolute;
    width: auto;
    height: auto;
    max-width: calc(100% - (50px * 2));
    max-height: calc(100% - (50px * 2));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .fakeCard {
    width: 100%;
    height: 100%;
    padding-top: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    & .wrapper {
      width: 80%;
      height: 80%;
      top: auto;
      bottom: auto;
      left: auto;
      right: auto;
    }

    & .nbrStyle {
      font-size: 15ch;
    }
  }
`
const RefreshBtn = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  z-index: 10;
  margin: 0 0 20px 20px;
  border: none;

  &.show{
    display: block;
  }
`

const genRandVar = (variationList, currentResult) => {
  if (variationList.length > 0) {
    return `${variationList[getRealRandom(0, variationList.length, variationList.findIndex(el => el === currentResult))]}`
  }
  return ``
}

const BigCard = () => {
  const { activCard } = useContext(cardContext)
  const { bcStatus, setBcStatus } = useContext(bigCardStatus)
  const [currentVar, setCurrentVar] = useState(null)
  const [displayRefresh, setRefreshDisplay] = useState(false)
  const variationList = cardListType.filter(el => el.card === activCard)?.[0]?.variation || []

  useEffect(() => {
    setRefreshDisplay()
    if (variationList.length > 0) {
      if (!currentVar && bcStatus) setCurrentVar(genRandVar(variationList))

      if (variationList.length > 1) {
        setRefreshDisplay(true)
      }
    }
    if (variationList.length === 0 || !bcStatus) {
      if (currentVar) setCurrentVar(null)
      setRefreshDisplay(false)
    }
  }, [
    activCard,
    bcStatus,
  ])

  return (
    <FullSizeCard className={bcStatus}>
      <RefreshBtn
        className={displayRefresh ? `show` : ``}
        onClick={() => { setCurrentVar(genRandVar(variationList, currentVar)) }}
      >
        <img src={reload} alt="refresh" />
      </RefreshBtn>
      <Card
        cardName={activCard}
        variation={currentVar}
        onClick={() => setBcStatus(``)}
      />
    </FullSizeCard>
  )
}

Card.propTypes = propTypes

Card.defaultProps = defaultProps

export default BigCard
