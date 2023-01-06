import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'


const rpcUrl = `https://eth-goerli.g.alchemy.com/v2/qNtE2MdnnNXNh8G5hjIZ-baxFqFnqvoQ`

const injected = injectedModule()
const walletConnect = walletConnectModule()
const web3Onboard = init({
  wallets: [injected, walletConnect],
  chains: [
    {
      id: 80001,
      token: 'MATIC',
      label: 'Polygon Mumbai',
      rpcUrl
    }
  ]
})


export default function App({ Component, pageProps }: AppProps) {
  return ( 
  <Web3OnboardProvider web3Onboard={web3Onboard}>
    <Component {...pageProps} /> 
  </Web3OnboardProvider>
  )
}
