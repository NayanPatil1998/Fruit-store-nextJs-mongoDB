import type { AppProps /*, AppContext */ } from 'next/app'
import "../styles/globals.css";

import  Layout  from "../Components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
      <Component {...pageProps} />
  </Layout>
}



export default MyApp