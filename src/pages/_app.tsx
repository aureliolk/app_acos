import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'
import { SkillProvider } from '../components/contexts/SkillContexts'
import '../styles/globals.css'
import { SectionProvider } from '../components/contexts/SectionContexts'
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }: AppProps) {

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
