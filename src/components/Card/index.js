import React from 'react'
import styled from 'styled-components'

import Typhography from '../Typhography'

const CardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(99, 116, 135, 0.1);
  border-radius: 3px;
  margin: 1em;
  width: 300px;
  min-height: 400px;
`
const Card = () => {
  return (
    <CardWrapper>
      <Typhography text='environment' type='desc' />
    </CardWrapper>
  )
}
export default Card
