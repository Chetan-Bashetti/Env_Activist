import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BgImage from '../../assets/nature1.jpeg'
import Typhography from '../Typhography'
import quotes from './Quotes'

const BannerWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-image: url(${BgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
`

const BannerText = styled.div`
  height: 100%;
  width: 100%;
  background: #00000073;
  display: flex;
  align-items: center;
  justify-content: center;
`

const QuoteWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  line-height: 1.5;
`
const AuthorWrapper = styled.div`
  padding-top: 2em;
`

const Banner = () => {
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    setQuoteIndex(Math.floor(Math.random() * Math.floor(11)))
  }, [])
  return (
    <BannerWrapper>
      <BannerText>
        <QuoteWrapper>
          <Typhography
            text={quotes && quotes.length && quotes[quoteIndex].quote}
            type='quote'
          />
          <AuthorWrapper>
            <Typhography
              text={quotes && quotes.length && quotes[quoteIndex].author}
              type='author'
            />
          </AuthorWrapper>
        </QuoteWrapper>
      </BannerText>
    </BannerWrapper>
  )
}
export default Banner
