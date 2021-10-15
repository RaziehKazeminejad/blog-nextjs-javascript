import '../styles/globals.css'
import {Provider} from 'next-auth/client'
import { AuthGuard } from "../component/AuthGuard" 

function MyApp({ Component, pageProps }) {
  return (

        <Provider session={pageProps.session}>
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        </Provider> 

  )
}

export default MyApp