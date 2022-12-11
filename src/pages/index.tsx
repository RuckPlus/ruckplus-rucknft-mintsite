import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { NextPageWithLayout } from '@/pages/_app'
import DefaultLayout from '@/components/Layouts/DefaultLayout'

import config from '@/globals/config'
import { MINT_PRICE_ETH } from '@/globals/constants'

import { ChevronLeft, ChevronRight } from 'react-iconly'

import {
  Button,
  Container,
  Grid,
  Image,
  Link,
  Navbar,
  Table,
  Text
} from '@nextui-org/react'

const Home: NextPageWithLayout = () => {
  const [mintQuantity, setMintQuantity] = useState<number>(1)
  
  const gotoEtherscan = () => {
    window.open(`${config.etherscanUrl}/address/${config.nftContractAddress}`, '_blank')
  }

  const upQuantity = () => {
    if (mintQuantity >= 3) return
    setMintQuantity(mintQuantity + 1)
  }

  const downQuantity = () => {
    if (mintQuantity <= 1) return
    setMintQuantity(mintQuantity - 1)
  }

  useEffect(() => {
    const now = dayjs(new Date()).format('YYYY')
  }, [])

  const TestIcon = () => {
    return <ChevronLeft set="bold" primaryColor="blueviolet"/>
  }

  return (
    <>
      <Grid.Container gap={2} justify="center" css={{ py: 120 }}>
        <Grid md={5} direction="column" alignItems="center">
          <Text
            h1
            size={45}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            RuckNFT Mint
          </Text>
          <Image src="/nft.png" width={300} height={300} alt="" />
        </Grid>
        <Grid md={5} direction="column" alignItems="center" css={{  ta: 'center' }}>
          <div>
            <Text h2 css={{ mb: 0 }}>Public mint is LIVE</Text>
            <Text h2>Until {dayjs(new Date()).add(7, 'day').format('DD MMM YYYY A hh:00')}</Text>
            <Text h2>950 / 1000</Text>
            <Text h5 css={{ mb: 0 }}>PRICE : {MINT_PRICE_ETH / 100000000000000000} ETH</Text>
            <Text h5 css={{ pb: 15 }}>MAXIMUM: 3 NFTS</Text>
          </div>
          <Container justify="center" alignItems="center" css={{ dflex: 'flex', pb: 30 }}>
            <Button bordered auto onClick={downQuantity}>
              <ChevronLeft set="bold" primaryColor="white"/>
            </Button>
            <Text h3 weight="bold" css={{ mb: 0, mx: 30 }}>{mintQuantity}</Text>
            <Button bordered auto onClick={upQuantity}>
              <ChevronRight set="bold" primaryColor="white"/>
            </Button>
          </Container>
          <Container justify="center" alignItems="center" css={{ dflex: 'flex', pb: 30 }}>
            <Button shadow size="lg" color="gradient">
              <Text h5 weight="bold" css={{ mb: 0 }}>MINT</Text>
            </Button>
          </Container>
        </Grid>
      </Grid.Container>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
