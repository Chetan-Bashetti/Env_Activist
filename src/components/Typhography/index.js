import React from 'react'
import styled from 'styled-components'
import THEME from '../../GlobalStyles'

const Description = styled.div`
  font-size: 1em;
  text-transform: capitalize;
  color: ${THEME.TEXT_HEADER};
  font-family: 'Kumbh Sans', sans-serif;
`

const Subheader = styled.div`
  font-size: 2em;
  text-transform: capitalize;
  color: ${THEME.TEXT_HEADER};
  font-family: 'Kumbh Sans', sans-serif;
`

const Header = styled.div`
  font-size: 3em;
  text-transform: capitalize;
  color: ${THEME.TEXT_HEADER};
  font-family: 'Kumbh Sans', sans-serif;
`

const Quote = styled.div`
  font-size: 2.5em;
  color: ${THEME.TEXT};
  font-family: 'Kumbh Sans', sans-serif;
`

const Author = styled.div`
  font-size: 1.5em;
  color: ${THEME.TEXT};
  font-family: 'Kumbh Sans', sans-serif;
`

const Typography = ({ text = '', type = '' }) => {
  switch (type) {
    case 'desc':
      return <Description>{text}</Description>
    case 'header':
      return <Header>{text}</Header>
    case 'sub':
      return <Subheader>{text}</Subheader>
    case 'quote':
      return <Quote>{text}</Quote>
    case 'author':
      return <Author>{text}</Author>
    default:
      return <Description>{text}</Description>
  }
}
export default Typography
