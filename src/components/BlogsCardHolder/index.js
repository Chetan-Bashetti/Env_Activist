import React from 'react'
import styled from 'styled-components'

import Card from '../Card'
import Typhography from '../Typhography'

const CardCantainerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2% 15%;
`
const TitleWrapper = styled.div`
  padding: 3em 0;
`

const CardsWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const CardsHolder = () => {
  return (
    <CardCantainerWrapper>
      <TitleWrapper>
        <Typhography text='environmentalist' type='header' />
      </TitleWrapper>
      <CardsWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsWrapper>
    </CardCantainerWrapper>
  )
}
export default CardsHolder
