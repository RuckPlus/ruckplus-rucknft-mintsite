import { FC, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { connector, isAllowedNetwork } from '@/globals/web3'

import {
  checkAutoConnectableAtom,
  autoConnectStatusAtom,
  accountAddressAtom,
  networkStatusAtom,
} from '@/states/metamask'

type Props = {}

const Effecter: FC<Props> = () => {
  const { activate, error, account } = useWeb3React()
  const [, setNetworkStatus] = useAtom(networkStatusAtom)

  // if "Already processing eth_requestAccounts. Please wait." happens, alert user to connect by metamask extension
  useEffect(() => {
    // @ts-expect-error error.code can exists
    if (error?.code === -32002) {
      alert('Please connect by metamask extension')
    }
  }, [error])

  // Alert if the network at mount time is not the target
  useEffect(() => {
    if (!window.ethereum) {
      setNetworkStatus('notInstalled')
      return
    }
    const network = parseInt(window.ethereum.networkVersion ?? '')
    if (!network || !isAllowedNetwork(network)) {
      setNetworkStatus('invalid')
    } else {
      setNetworkStatus('valid')
    }
  }, [setNetworkStatus])

  return null
}

export default Effecter
