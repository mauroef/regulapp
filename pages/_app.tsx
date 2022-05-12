import type { AppProps } from 'next/app'
import { Provider as AuthProvider } from '../context/authContext'
import { Provider as DatabaseProvider } from '../context/dbContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DatabaseProvider>
        <Component {...pageProps} />
      </DatabaseProvider>
    </AuthProvider>
  )
}

export default MyApp
