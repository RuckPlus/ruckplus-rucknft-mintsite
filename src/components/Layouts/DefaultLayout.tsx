import React, { FC, ReactNode, useState, useCallback, useEffect } from 'react'
import Head from 'next/head'
import { useWeb3React } from '@web3-react/core'
import { connector } from '@/globals/web3'

import {
  Button,
  Card,
  Container,
  Grid,
  Image,
  Navbar,
  Modal,
  Table,
  Text
} from '@nextui-org/react'

type Props = {
  children: ReactNode
}

const ConnectWalletModal = (props: any) => {
  const { activate } = useWeb3React()

  const onConnectWalletClick = useCallback(() => {
    activate(connector.injected)
    props.setVisible(false)
  }, [activate, props])

  // TODO: rror effect
  useEffect(() => {
    //
  }, [])

  return (
    <>
      <Modal
        css={{ mx: 15 }}
        aria-labelledby="connect-wallet-modal"
        open={props.visible}
        onClose={props.closeHandler}
      >
        <Modal.Header>
          <Text b size={18}>
            Connect wallet
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Card
            isPressable
            variant="flat"
            onClick={onConnectWalletClick}
          >
            <Card.Body>
              <Image src="./metamask.svg" alt="" width={200} />
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  )
}

const DefaultLayout: FC<Props> = ({ children }) => {
  const { account } = useWeb3React()
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
              RuckNFT {account}
            </Text>
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Item>
              {account ? (
                <Button auto flat onClick={handler}>
                  {account}
                </Button>
              ) : (
                <Button auto flat onClick={handler}>
                  Connect Wallet{account}
                </Button>
              )}
              
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
        <Container>
          {children}
        </Container>
        <ConnectWalletModal
          visible={visible}
          closeHandler={closeHandler}
          setVisible={setVisible}
        />
      </main>
    </>
  )
}

export default DefaultLayout
