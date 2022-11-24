import 'antd/dist/antd.css'
import '../styles/globals.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import Layout from '../components/layout/Layout'
import AuthContextProvider from '~/context/auth/AuthContext'
import CommunityContextProvider from '~/context/Community/Context'
import CartProvider from '~/context/cart/CartContext'
import BookProvider from '~/context/book/BookContext'
import CommunitiesProvider from '~/context/communities/ComContext'
import WishListProvider from '~/context/cart/WishList'


function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <CommunityContextProvider>
      <BookProvider>
      <CommunitiesProvider>
      <CartProvider>
      <WishListProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
       </WishListProvider>
      </CartProvider>
      </CommunitiesProvider>
      </BookProvider>
    </CommunityContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
