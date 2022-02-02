import React, { useState, useContext, useEffect } from 'react'
import { getRealRandom } from '../utils'
import { cardContext, bigCardStatus } from '../context'
import { cardListType } from '../../assets/config'
import Card from './Card'
import reload from '../../assets/reload.svg'

import {
  FullSizeCard,
  RefreshBtn,
} from '../styles/BigCard.style'

const genRandVar = (variation, currentResult) => {
  if (variation.length > 0) {
    return `${variation[getRealRandom(0, variation.length, variation.findIndex(el => el === currentResult))]}`
  }
  return ``
}

const BigCard = () => {
  const { activCard } = useContext(cardContext)
  const { bcStatus, setBcStatus } = useContext(bigCardStatus)
  const [currentVar, setCurrentVar] = useState(null)
  const [displayRefresh, setRefreshDisplay] = useState(false)
  const {
    variation = [], colors, cardName, cardId,
  } = cardListType.find(el => el.cardId === activCard) || {}

  useEffect(() => {
    setRefreshDisplay()
    if (variation.length > 0) {
      if (!currentVar && bcStatus) setCurrentVar(genRandVar(variation))

      if (variation.length > 1) {
        setRefreshDisplay(true)
      }
    }
    if (variation.length === 0 || !bcStatus) {
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
        onClick={() => { setCurrentVar(genRandVar(variation, currentVar)) }}
      >
        <img src={reload} alt="refresh" />
      </RefreshBtn>
      <Card
        cardId={cardId}
        cardName={cardName}
        variation={currentVar}
        colors={colors}
        onClick={() => setBcStatus(``)}
      />
    </FullSizeCard>
  )
}

export default BigCard
