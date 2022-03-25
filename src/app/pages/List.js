import React, { useContext, useState } from 'react'
import { cardListType } from '../../assets/config'
import Card from './Card'
import BigCard from './BigCard'
import { cardContext, bigCardStatus } from '../context'
import {
  GridCard,
  ListWrapper,
  CardWrapper,
  Title,
  Arrow,
} from '../styles/List.style'

const cardList = (type, title, toggleVisibility) => {
  const { setActivCard } = useContext(cardContext)
  const { setBcStatus } = useContext(bigCardStatus)
  const [visible, setVisibility] = useState(false)

  const typeList = cardListType
    .filter(el => el.type === type)

  if (!typeList.length) return null

  const propsTitle = {}
  const propsWrapper = {}
  let classCardWrapper = `CardWrapper`

  if (toggleVisibility) {
    propsTitle.onClick = () => {
      setVisibility(!visible)
    }
    propsWrapper.className = `toggle`
    propsTitle.className = `${visible ? `open` : `close`}`
    classCardWrapper = `${classCardWrapper} ${visible ? `visible` : ``}`
  } else {
    classCardWrapper = `${classCardWrapper} visible`
  }

  return (
    <ListWrapper {...propsWrapper}>
      <Title {...propsTitle}>
        {`${title} Cards`}
        <Arrow className="arrow" />
      </Title>
      <CardWrapper className={classCardWrapper}>
        {typeList.map(({
          cardId, cardName, colors, customStyle,
        }) => (
          <Card
            key={cardId}
            onClick={() => {
              setActivCard(cardId)
              setBcStatus(`activ`)
            }}
            {...{
              cardId,
              cardName,
              colors,
              customStyle,
            }}
          />
        ))}
      </CardWrapper>
    </ListWrapper>
  )
}

const cardLists = () => (
  <>
    <BigCard />
    <GridCard>
      {cardList(`standard`, `Poker`)}
      {cardList(`special`, `Special`)}
      {cardList(`tshirt`, `T-shirt Size`, true)}
    </GridCard>
  </>
)

export default cardLists
