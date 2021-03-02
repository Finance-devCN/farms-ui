import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  //background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    //background-image: url('/images/logo.png'), url('/images/logo.png');
    //background-position: left center, right center;
    //height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const TokenTab = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const TokenTabWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:28px;
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="#7f441c">
          Finance Swap
        </Heading>
        <Text>{TranslateString(578, '')}</Text>
      </Hero>
      <TokenTabWrap>
        <TokenTab>
          <a href="https://ficn.exchange">
            <img src='/images/bear/logo.png' alt="Lucky Lotus"/>
          </a>
        </TokenTab>
        <TokenTab>
          <a href="https://financeswap.info/">
            <img src='/images/bear/coin_TEDDY.png' alt="God of Wealth"/>
          </a>
        </TokenTab>
        <TokenTab >
          <a href="https://finance.cn.com">
            <img src='/images/bear/coin_POLAR.png' alt="Cat Fortune"/>
          </a>
        </TokenTab>
      </TokenTabWrap>
      <div>
        <Cards>
          <FarmStakingCard />
          <CakeStats />
          {/* <TotalValueLockedCard /> */}
        </Cards>
      </div>
    </Page>
  )
}

export default Home
