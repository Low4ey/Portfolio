import Logo from '../Component/logo';
import Nav from '../Component/Nav'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <>
  <Nav />
<Logo />
    <Component {...pageProps} />
  </>
}

export default MyApp;
