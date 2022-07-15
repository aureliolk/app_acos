import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

import { client } from '../lib/apollo'

import { SkillProvider } from '../components/contexts/SkillContexts'
import { SectionProvider } from '../components/contexts/SectionContexts'
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/globals.css'


function MyApp({ Component, pageProps }: any) {

  return (
    <ApolloProvider client={client}>
      <ParallaxProvider>
        <SkillProvider>
          <SectionProvider>
            <Component {...pageProps} />
          </SectionProvider>
        </SkillProvider>
      </ParallaxProvider>
    </ApolloProvider>
  )
}

export default MyApp
