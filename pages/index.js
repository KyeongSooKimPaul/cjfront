import React, { useEffect, useState } from 'react'
import Banner from './layouts/Fashion/Components/Banner'
import CollectionBanner from './layouts/Fashion/Components/Collection-Banner'
import TopCollection from '../components/common/Collections/Collection3'
import TopCollection1 from '../components/common/Collections/Collection3sub1'
import TopCollection2 from '../components/common/Collections/Collection3sub2'
import TopCollection3 from '../components/common/Collections/Collection3sub3'
import TopCollection4 from '../components/common/Collections/Collection3sub4'
import TopCollection5 from '../components/common/Collections/Collection3sub5'
import TopCollection6 from '../components/common/Collections/Collection3sub6'

import Parallax from './layouts/Fashion/Components/Parallax'
import SpecialProducts from '../components/common/Collections/TabCollection1'
import ServiceLayout from '../components/common/Service/service1'
import Blog from '../components/common/Blog/blog1'
import Instagram from '../components/common/instagram/instagram1'
import LogoBlock from '../components/common/logo-block'
import HeaderOne from '../components/headers/header-one'

import { Product4 } from '../services/script'
import { Projects } from '../services/script'
import { Projects1 } from '../services/script'

import Paragraph from '../components/common/Paragraph'
import Paragraph2 from '../components/common/Paragraph2'
import Paragraph3 from '../components/common/Paragraph3'
import ModalComponent from '../components/common/Modal'
import Helmet from 'react-helmet'
import MasterFooter from '../components/footers/common/MasterFooter'
import Link from 'next/link'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { FormattedMessage } from 'react-intl'

const Fashion = () => {
  // const { t } = useTranslation('common')

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={'/favicon.ico'} />
      </Helmet>
      {/*  */}
      <HeaderOne logoName={'logo.png'} topClass="top-header" />
      <Banner />
      {/* <CollectionBanner /> */}
      {/* {t('translate.example1')} */}

      {/* <Paragraph
        title="title1 section-t-space"
        inner="title-inner1"
        hrClass={false}

      /> */}

      <TopCollection
        noTitle="null"
        backImage={true}
        type="fashion"
        title="top collection"
        subtitle="special offer"
        productSlider={Projects}
        designClass="section-b-space p-t-0 ratio_asos"
        noSlider="false"
        cartClass="cart-info cart-wrap"
        // lang1={t('translate.example1')}
      />
      {/* <TopCollection1
        noTitle="null"
        backImage={true}
        type="fashion"
        title="top collection"
        subtitle="special offer"
        productSlider={Projects1}
        designClass="section-b-space p-t-0 ratio_asos"
        noSlider="false"
        cartClass="cart-info cart-wrap"
      /> */}

     <Paragraph2
        title="title1 section-t-space"
        inner="title-inner1"
        hrClass={false}
      />
 {/* 
      <TopCollection2
        noTitle="null"
        backImage={true}
        type="fashion"
        title="top collection"
        subtitle="special offer"
        productSlider={Product4}
        designClass="section-b-space p-t-0 ratio_asos"
        noSlider="false"
        cartClass="cart-info cart-wrap"
      />

      <Paragraph3
        title="title1 section-t-space"
        inner="title-inner1"
        hrClass={false}
      />
      <TopCollection3
        noTitle="null"
        backImage={true}
        type="fashion"
        title="top collection"
        subtitle="special offer"
        productSlider={Product4}
        designClass="section-b-space p-t-0 ratio_asos"
        noSlider="false"
        cartClass="cart-info cart-wrap"
      /> */}

      {/* <Instagram type="fashion" /> */}
      {/* <div className="section-b-space">
        <LogoBlock />
      </div> */}
      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={'light-layout upper-footer'}
        footerSection={'small-section border-section border-top-0'}
        belowSection={'section-b-space light-layout'}
        newLatter={true}
        logoName={'logo.png'}
      />
    </>
  )
}
// export const getStaticProps = async ({ locale }) => {
//   console.log('locale of getStaticProps!!', locale)
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   }
// }
export default Fashion
