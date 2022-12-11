import React, { FC, ReactNode, useState } from 'react'
import Head from 'next/head'

import {
  Button,
  Container,
  Grid,
  Navbar,
  Modal,
  Table,
  Text
} from '@nextui-org/react'

type Props = {
  children: ReactNode
}

const ConnectWalletModal = (props: any) => {
  return (
    <>
      <Modal
        aria-labelledby="connect-wallet-modal"
        open={props.visible}
        onClose={props.closeHandler}
      >
        <Modal.Header>
          <Text size={18}>
            <Text b size={18}>
              Connect wallet
            </Text>
          </Text>
        </Modal.Header>
      </Modal>
    </>
  )
}

const DefaultLayout: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState(false)

  const handler = () => setVisible(true)

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  }

  return (
    <>
      <Head>
        <title>RuckNFT Mint</title>
        <meta name="description" content="RuckNFT Mint" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar>
          <Navbar.Brand>
            <Text b color="inherit" hideIn="xs">
              RuckNFT
            </Text>
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Item>
              <Button auto flat onClick={handler}>
              Connect Wallet
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
        <Container>
          {children}
        </Container>
        <ConnectWalletModal visible={visible} closeHandler={closeHandler} />
      </main>
    </>
  )
}

export default DefaultLayout
