import 'antd/dist/antd.css'
import '../styles/globals.scss'
import Layout from '../components/layout/Layout'
import AuthContextProvider from '~/context/auth/AuthContext'
import CommunityContextProvider from '~/context/Community/Context'
import CartProvider from '~/context/cart/CartContext'
import BookProvider from '~/context/book/BookContext'
import CommunitiesProvider from '~/context/communities/ComContext'


function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <CommunityContextProvider>
      <BookProvider>
      <CommunitiesProvider>
      <CartProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </CartProvider>
      </CommunitiesProvider>
      </BookProvider>
    </CommunityContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
