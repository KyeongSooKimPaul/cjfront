import React, { useEffect } from 'react'
import NavBar from './common/navbar'
import SideBar from './common/sidebar'
import Cart from '../containers/Cart'
import CartContainer from '../containers/CartContainer'
import TopBarDark from './common/topbar-dark'
import { Media, Container, Row, Col } from 'reactstrap'
import LogoImage from './common/logo'
import Currency from './common/currency'
import { useRouter } from 'next/router'
import SearchOverlay from './common/search-overlay'
import Link from "next/link";
const HeaderOne = ({
  logoName,
  headerClass,
  topClass,
  noTopBar,
  direction,
}) => {
  const router = useRouter()

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
    <div>
      <header id="sticky" className={`sticky ${headerClass}`}>
        {/* <div className="mobile-fix-option"></div> */}
        {/*Top Header Component*/}
        {noTopBar ? '' : <TopBarDark topClass={topClass} />}

        <Container>
          <Row>
            <Col>
              <div className="main-menu">
                <div className="menu-left">
                 
                  <Link href={`/`}>
                  <div className="brand-logo">
                    <strong style={{ fontSize: '26px', cursor:"pointer" }}> LOGATIST</strong>
                    {/* <LogoImage logo={logoName} /> */}
                  </div>
                  </Link>
                </div>
                <div className="menu-right pull-right">
                  {/*Top Navigation Bar Component*/}
                  <div className="navbar">
                    <a href={null} onClick={openNav}>
                      <div className="bar-style">
                        <i
                          className="fa fa-bars sidebar-bar"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </a>
                    {/*SideBar Navigation Component*/}
                    <SideBar />
                  </div>
                  {/* <NavBar /> */}

                  <div>
                    <div className="icon-nav">
                      <ul>
                        {/* <li className="onhover-div mobile-search">
                          <div>
                            <Media
                              src={"/assets/images/icon/search.png"}
                              onClick={openSearch}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </li>
                        */}

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
          </Row>
        </Container>
      </header>

      <SearchOverlay />
    </div>
  )
}

export default HeaderOne
