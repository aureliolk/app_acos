import type { NextPage } from 'next'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <main className=' lg:p-4 lg:px-10 mt-20'>
            <Body />
        </main>
      </Layout>
    </div>
  )
}

export default Home
