import React, { useEffect, useState } from 'react'
import NavBar from './common/navbar'
import SideBar from './common/sidebar'
import Cart from '../containers/Cart'
import CartContainer from '../containers/CartContainer'
import TopBarDark from './common/topbar-dark'
import {
  Media,
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap'
import LogoImage from './common/logo'
import Currency from './common/currency'
import { useRouter } from 'next/router'
import SearchOverlay from './common/search-overlay'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

const HeaderOne = ({
  logoName,
  headerClass,
  topClass,
  noTopBar,
  direction,
}) => {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const toggle = () => {
    setModal(!modal)
  }
  /*=====================
		 Pre loader
		 ==========================*/
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll('.loader-wrapper').style = 'display:none'
    }, 2000)

    if (router.asPath !== '/layouts/Christmas')
      window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    if (number >= 300) {
      if (window.innerWidth < 576)
        document.getElementById('sticky').classList.remove('fixed')
      else document.getElementById('sticky').classList.add('fixed')
    } else document.getElementById('sticky').classList.remove('fixed')
  }

  const openNav = () => {
    var openmyslide = document.getElementById('mySidenav')
    if (openmyslide) {
      openmyslide.classList.add('open-side')
    }
  }
  const openSearch = () => {
    document.getElementById('search-overlay').style.display = 'block'
  }

  // eslint-disable-next-line
  const load = () => {
    setIsLoading(true)
    fetch().then(() => {
      // deal with data fetched
      setIsLoading(false)
    })
  }

  return (
    <>
      <div className="pcforheader">
        <header id="sticky" className={`sticky ${headerClass}`}>
          {/* <div className="mobile-fix-option"></div> */}
          {/*Top Header Component*/}
          {/* {noTopBar ? '' : <TopBarDark topClass={topClass} />} */}

          <Container>
            <Row>
              <Col lg={4} style={{ margin: 'auto', fontSize: '18px' }}>
                <ul>
                  <li style={{ width: '33%', textAlign: 'center' }}>
                    {' '}
                    <a href={`/`}>
                      {' '}
                      <FormattedMessage id="프로젝트" />
                    </a>
                  </li>
                  <li style={{ width: '33%', textAlign: 'center' }}>
                    <a href={`/product-details/18`}>
                      {' '}
                      <FormattedMessage id="디스커버" />
                    </a>
                  </li>
                  <li style={{ width: '33%', textAlign: 'center' }}>
                    <a href={`/`}>
                      {' '}
                      <FormattedMessage id="어바웃" />
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={4}>
                <div className="main-menu">
                  <div className="menu-center">
                    <Link href={`/`}>
                      <div
                        className="brand-logo"
                        style={{ justifyContent: 'center' }}
                      >
                        <LogoImage logo={logoName} />
                      </div>
                    </Link>
                  </div>
                  <div className="menu-right pull-right">
                    <div className="navbar">
                      <a href={null} onClick={openNav}>
                        <div className="bar-style">
                          <i
                            className="fa fa-bars sidebar-bar"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </a>

                      <SideBar />
                    </div>

                    <div>
                      <div className="icon-nav">
                        <ul>
                          <CartContainer
                            layout={direction}
                            icon={'/assets/images/icon/shopping-cart.png'}
                          />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={4} style={{ margin: 'auto', fontSize: '18px' }}>
                <ul>
                  <li style={{ width: '33%', textAlign: 'center' }}>
                    {' '}
                    <a href={`/page/account/login`}>
                      {' '}
                      <FormattedMessage id="로그인" />
                    </a>
                  </li>
                  <li style={{ width: '33%', textAlign: 'center' }}>
                    <a href={`/page/account/register`}>
                      {' '}
                      <FormattedMessage id="회원가입" />
                    </a>
                  </li>
                  <li style={{ width: '33%', textAlign: 'center' }}>
                    {router.locale == 'ko' ? (
                      <Link href={router.asPath} locale="en">
                        ENGLISH
                      </Link>
                    ) : (
                      <Link href={router.asPath} locale="ko">
                        한국어
                      </Link>
                    )}
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </header>

        <SearchOverlay />
      </div>
      <div className="mobileforheader">
        <header id="sticky" className={`sticky ${headerClass}`}>
          {/* <div className="mobile-fix-option"></div> */}
          {/*Top Header Component*/}
          {/* {noTopBar ? '' : <TopBarDark topClass={topClass} />} */}

          <Container>
            <Row style={{ paddingTop: '30px', paddingBottom: '30px' }}>
              <Col style={{ margin: 'auto', fontSize: '18px' }}></Col>
              <Col style={{ margin: 'auto' }}>
                <Link href={`/`}>
                  <div style={{ justifyContent: 'center', height: '26px' }}>
                    {/* <strong style={{ fontSize: '26px', cursor:"pointer" }}> LEGATIST</strong> */}
                    <LogoImage logo={logoName} />
                  </div>
                </Link>
              </Col>
              <Col
                style={{
                  margin: 'auto',
                  fontSize: '18px',
                  textAlign: 'right',
                  marginRight: '10px',
                }}
              >
                <a
                  onClick={() => setModal(!modal)}
                  style={{
                    width: '100%',
                  }}
                >
                  MENU
                </a>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
      <Modal id="custommodal" isOpen={modal} toggle={toggle} centered size="xl">
        {' '}
        <ModalHeader toggle={toggle}>MENU</ModalHeader>
        <ModalBody>
          <Row>
            <Col lg="12">
              <div>
                <ul>
                  <li
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      marginTop: '10px',
                      paddingBottom: '10px',
                      borderBottom: '1px solid rgb(222 226 230 / 22%)',
                    }}
                  >
                    {' '}
                    <a href={`/`}>
                      {' '}
                      <FormattedMessage id="프로젝트" />
                    </a>
                  </li>
                  <li
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      marginTop: '10px',
                      paddingBottom: '10px',
                      borderBottom: '1px solid rgb(222 226 230 / 22%)',
                    }}
                  >
                    <a href={`/product-details/18`}>
                      {' '}
                      <FormattedMessage id="디스커버" />
                    </a>
                  </li>
                  <li
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      marginTop: '10px',
                      paddingBottom: '10px',
                      borderBottom: '1px solid rgb(222 226 230 / 22%)',
                    }}
                  >
                    <a href={`/`}>
                      {' '}
                      <FormattedMessage id="어바웃" />
                    </a>
                  </li>
                  <li
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      marginTop: '10px',
                      paddingBottom: '10px',
                      borderBottom: '1px solid rgb(222 226 230 / 22%)',
                    }}
                  >
                    {' '}
                    <a href={`/page/account/login`}>
                      {' '}
                      <FormattedMessage id="로그인" />
                    </a>
                  </li>

                  <li
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      marginTop: '10px',
                      paddingBottom: '10px',
                      borderBottom: '1px solid rgb(222 226 230 / 22%)',
                    }}
                  >
                    <a href={`/page/account/register`}>
                      {' '}
                      <FormattedMessage id="회원가입" />
                    </a>
                  </li>
                  <li
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      marginTop: '10px',
                      paddingBottom: '10px',
                      borderBottom: '1px solid rgb(222 226 230 / 22%)',
                    }}
                  >
                    {router.locale == 'ko' ? (
                      <Link href={router.asPath} locale="en">
                        ENGLISH
                      </Link>
                    ) : (
                      <Link href={router.asPath} locale="ko">
                        한국어
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  )
}

export default HeaderOne
