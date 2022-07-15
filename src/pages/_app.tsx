import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'

import { SkillProvider } from '../components/contexts/SkillContexts'
import { SectionProvider } from '../components/contexts/SectionContexts'
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/globals.css'
import { AppProps } from 'next/app';

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
