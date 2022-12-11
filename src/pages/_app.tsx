import '../styles/globals.css'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const POLLING_INTERVAL = 12000

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider)
    library.pollingInterval = POLLING_INTERVAL
    return library
  }

  const getLayout = Component.getLayout ?? ((page) => page)

  const lightTheme = createTheme({
    type: 'light',
  })
  
  const darkTheme = createTheme({
    type: 'dark',
  })

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          {getLayout(<Component {...pageProps} />)}
        </NextUIProvider>
      </NextThemesProvider>
    </Web3ReactProvider>
  )
}
