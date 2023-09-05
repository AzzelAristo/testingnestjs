import Layout from '@/comps/Layout'
import '@/styles/globals.css'
import '@/styles/Home.module.css'
import '@/styles/Ninjas.module.css'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
   </Layout>
  )
}
 