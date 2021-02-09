import React from 'react'
import styled from 'styled-components'
import THEME from '../../GlobalStyles'

const HeaderWrapper = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0% 15%;
  box-shadow: 0px 2px 10px rgba(99, 116, 135, 0.1);
  position: fixed;
  background: #00000052;
  color: ${THEME.TEXT};
`
const Header = () => {
  return <HeaderWrapper>Header</HeaderWrapper>
}
export default Header
