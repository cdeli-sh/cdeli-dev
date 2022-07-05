import '../styles/globals.css'

import PlausibleProvider from 'next-plausible'

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="cdeli.dev" customDomain='https://analytics.molecul.fr' trackLocalhost={true} selfHosted={true} enabled={true}>
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
