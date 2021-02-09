import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import CardsContainer from '../components/BlogsCardHolder'
import Banner from '../components/Banner'

const LandingpageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LandingPage = () => {
  return (
    <LandingpageWrapper>
      <Layout
        children={
          <ChildrenWrapper>
            <Banner />
            <CardsContainer />
          </ChildrenWrapper>
        }
      />
    </LandingpageWrapper>
  )
}
export default LandingPage
