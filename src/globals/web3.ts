import config from '@/globals/config'
import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({
  supportedChainIds: [config.chainId],
})

export const connector = {
  injected,
}

export function isAllowedNetwork(chainId?: number): boolean {
  return chainId === config.chainId
}
