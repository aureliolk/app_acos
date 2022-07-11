import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'
import '../styles/globals.css'
import { SkillProvider } from '../components/contexts/SkillContexts'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={client}>
      <SkillProvider>
        <Component {...pageProps} />
      </SkillProvider>
    </ApolloProvider>
  )
}

export default MyApp
