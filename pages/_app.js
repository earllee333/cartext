import Footer from '../component/Footer'
import Nav from '../component/Nav'
import '../styles/globals.css'
import {QueryClient,QueryClientProvider} from 'react-query'
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  
  return <>
    <QueryClientProvider client={queryClient}>
       <Nav />
      <Component {...pageProps} />
      <Footer/>
    </QueryClientProvider>
    </>

}

export default MyApp
