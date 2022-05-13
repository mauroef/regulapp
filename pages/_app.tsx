import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider as AuthProvider } from '../context/authContext'
import { Provider as DatabaseProvider } from '../context/dbContext'
import theme from '../theme'

const customTheme = extendTheme(theme)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <DatabaseProvider>
          <Component {...pageProps} />
        </DatabaseProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
