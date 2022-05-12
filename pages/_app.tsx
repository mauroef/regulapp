import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as AuthProvider } from '../context/authContext'
import { Provider as DatabaseProvider } from '../context/dbContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <DatabaseProvider>
          <Component {...pageProps} />
        </DatabaseProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
