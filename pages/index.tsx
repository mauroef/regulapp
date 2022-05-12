import type { NextPage } from 'next'
import Layout from '../components/layout'
import RecordList from '../components/records'

const Home: NextPage = () => {
  return (
    <Layout>
      <RecordList></RecordList>
    </Layout>
  )
}

export default Home
