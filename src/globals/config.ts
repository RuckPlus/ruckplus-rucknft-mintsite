export const config = {
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID as string),
  nftContractAddress: process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS as string,
  etherscanUrl: process.env.NEXT_PUBLIC_ETHERSCAN_URL as string
}

Object.entries(config).forEach(([key, value]) => {
  if (value === undefined || value === NaN) {
    throw Error(`Environment variables are insufficient. ${key}`)
  }
})

export default config
