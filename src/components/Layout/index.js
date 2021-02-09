import React from 'react'
import styled from 'styled-components'
import Header from '../HeaderBar'
import Footer from '../Footer'

const LayoutWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const ChildrenWrapper = styled.div`
  background: #f8f9fa !important;
`

const LandingPage = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </LayoutWrapper>
  )
}
export default LandingPage
