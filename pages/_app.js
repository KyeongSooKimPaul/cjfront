import React, { useEffect, useState } from 'react'
import ThemeSettings from '../components/customizer/theme-settings'
import '../public/assets/scss/app.scss'
import { ToastContainer } from 'react-toastify'
import TapTop from '../components/common/widgets/Tap-Top'
import MessengerCustomerChat from 'react-messenger-customer-chat'
import CartContextProvider from '../helpers/cart/CartContext'
import { WishlistContextProvider } from '../helpers/wishlist/WishlistContext'
import FilterProvider from '../helpers/filter/FilterProvider'
import SettingProvider from '../helpers/theme-setting/SettingProvider'
import { CompareContextProvider } from '../helpers/Compare/CompareContext'
import { CurrencyContextProvider } from '../helpers/Currency/CurrencyContext'
import Helmet from 'react-helmet'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../helpers/apollo'

import { appWithTranslation } from 'next-i18next'

import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import en from '../public/locales/en/common.json'
import ko from '../public/locales/ko/common.json'

const messages = {
  en,
  ko,
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter()

  // export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)
  const [url, setUrl] = useState()
  const apolloClient = useApollo(pageProps)

  useEffect(() => {
    const path = window.location.pathname.split('/')
    const url = path[path.length - 1]
    setUrl(url)
    document.body.classList.add('dark')
    let timer = setTimeout(function () {
      setIsLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <>
      <ApolloProvider client={apolloClient}>
        {isLoading ? (
          <div className="loader-wrapper">
            {url === 'Christmas' ? (
              <div id="preloader"></div>
            ) : (
              <div className="loader"></div>
            )}
          </div>
        ) : (
          <>
            {/* <MessengerCustomerChat
            pageId="2123438804574660"
            appId="406252930752412"
            htmlRef="https://connect.facebook.net/en_US/sdk.js"
          /> */}
            <Helmet>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              {/* <Head>
              <link rel="icon" type="image/x-icon" href={favicon} />
            </Head> */}
              <title>LEGATIST - 일상에 활력을 더하다</title>
            </Helmet>
            <div>
              <SettingProvider>
                <CompareContextProvider>
                  <CurrencyContextProvider>
                    <CartContextProvider>
                      <WishlistContextProvider>
                        <FilterProvider>
                          <IntlProvider
                            locale={locale}
                            messages={messages[locale]}
                          >
                            <Component {...pageProps} />
                          </IntlProvider>
                        </FilterProvider>
                      </WishlistContextProvider>
                    </CartContextProvider>
                  </CurrencyContextProvider>
                  <ThemeSettings />
                </CompareContextProvider>
              </SettingProvider>
              <ToastContainer />
              <TapTop />
            </div>
          </>
        )}
      </ApolloProvider>
    </>
  )
}
export default MyApp
