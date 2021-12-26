import React, { Component } from 'react'
import '../styles/Navbar.css'
import {Navbar, Container, Nav, NavItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../images/logo.png'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.png'

export class NavbarMain extends Component {
    render() {
        return (
            <Navbar bg="navbarcolor" variant="dark" sticky = "top" >
            <Container>
            <Nav className='m-auto'>
              <Navbar.Brand href="#home"><img src={logo} width="50" length="50" className="d-inline-block align-top"/></Navbar.Brand>
              <Nav.Link bsPrefix='navlink' href="#home">about</Nav.Link>
              <Nav.Link bsPrefix='navlink' href="#home">companies</Nav.Link>
              <Nav.Link bsPrefix='navlink' href="#home">technologies</Nav.Link>
            </Nav>
            <Nav.Link href="https://github.com/FloatingAl"> 
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="35pt" height="35pt" fill="white" className='iconlink' viewBox="0 0 560.000000 560.000000"
                preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,560.000000) scale(0.100000,-0.100000)"
                    stroke="none">
                        <path d="M2571 4839 c-733 -82 -1361 -525 -1676 -1182 -488 -1019 -73 -2233
                        941 -2749 60 -31 154 -72 209 -93 116 -43 165 -43 202 0 22 25 23 33 23 242
                        l0 215 -27 -6 c-16 -4 -86 -9 -158 -12 -152 -7 -232 7 -328 59 -95 50 -147
                        110 -211 239 -61 126 -113 194 -190 251 -111 83 -131 118 -78 138 107 42 291
                        -57 387 -207 106 -165 229 -232 404 -221 108 7 211 40 211 68 0 39 43 145 81
                        201 45 66 57 56 -99 83 -497 85 -752 358 -803 858 -26 260 24 468 158 647 l48
                        65 -17 65 c-33 127 -16 355 34 465 12 27 14 27 78 22 119 -10 299 -82 454
                        -181 l52 -33 110 23 c276 58 562 58 838 0 l110 -23 52 33 c156 100 335 171
                        456 181 l66 6 28 -84 c37 -114 45 -299 17 -405 l-19 -71 49 -63 c164 -218 207
                        -519 122 -856 -95 -376 -368 -595 -817 -656 -49 -7 -88 -16 -88 -19 0 -4 11
                        -20 24 -36 39 -47 74 -125 90 -206 13 -61 16 -145 16 -416 0 -338 0 -340 23
                        -366 37 -43 86 -43 202 0 1143 427 1676 1745 1150 2842 -296 618 -865 1045
                        -1550 1164 -139 24 -440 33 -574 18z"/>
                        <path d="M1437 1883 c-19 -18 19 -48 43 -33 11 7 11 11 1 24 -14 17 -33 21
                        -44 9z"/>
                        <path d="M1525 1810 c-12 -20 6 -50 31 -50 29 0 31 20 6 43 -21 20 -28 21 -37
                        7z"/>
                        <path d="M1603 1694 c-8 -22 9 -48 34 -52 27 -4 35 20 17 47 -18 25 -42 27
                        -51 5z"/>
                        <path d="M1700 1567 c0 -29 18 -47 46 -47 28 0 36 22 18 49 -21 30 -64 28 -64
                        -2z"/>
                        <path d="M1844 1485 c-10 -24 16 -46 49 -43 36 4 44 19 22 42 -21 20 -64 21
                        -71 1z"/>
                        <path d="M2182 1478 c-19 -19 -14 -37 12 -44 31 -7 68 12 64 34 -4 21 -58 28
                        -76 10z"/>
                        <path d="M2014 1455 c-4 -9 0 -24 9 -33 22 -22 72 -6 72 23 0 27 -72 35 -81
                        10z"/>
                    </g>
                </svg>
            </Nav.Link>
            <Nav.Link href='https://www.linkedin.com/in/albaramehene/'> 
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="27pt" height="27dpt" fill="white" className='iconlink' viewBox="0 0 2000.000000 2000.000000"
            preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M9655 19989 c-2193 -73 -4292 -863 -5985 -2253 -269 -221 -454 -389
                    -726 -661 -346 -345 -597 -628 -855 -965 -1026 -1335 -1680 -2837 -1953 -4485
                    -133 -800 -165 -1694 -91 -2535 170 -1920 915 -3780 2123 -5300 404 -509 882
                    -1001 1382 -1426 874 -742 1917 -1349 3005 -1749 1664 -612 3486 -768 5240
                    -449 1619 294 3131 982 4434 2017 487 387 992 878 1407 1367 1318 1554 2135
                    3505 2318 5540 29 321 39 539 39 910 0 593 -37 1052 -128 1615 -304 1877
                    -1129 3601 -2415 5050 -174 196 -614 634 -810 807 -1267 1117 -2700 1863
                    -4330 2256 -621 150 -1289 237 -2001 262 -307 10 -326 10 -654 -1z m-3299
                    -5410 c555 -56 931 -395 1011 -914 25 -167 6 -384 -49 -550 -66 -202 -200
                    -381 -372 -498 -311 -211 -807 -264 -1200 -128 -438 152 -706 535 -706 1010 0
                    636 457 1070 1146 1089 33 1 110 -3 170 -9z m6435 -2839 c577 -58 1057 -271
                    1420 -630 200 -198 345 -409 469 -680 94 -206 185 -509 224 -750 52 -317 50
                    -199 53 -2287 l4 -1943 -1105 0 -1105 0 -4 1723 c-4 1841 -2 1770 -52 2007
                    -67 321 -226 588 -434 730 -343 232 -867 226 -1206 -15 -176 -125 -389 -422
                    -442 -615 -16 -61 -18 -188 -20 -1922 l-4 -1858 -1090 0 -1090 0 7 413 c10
                    569 11 5640 1 5705 l-8 52 1091 0 1090 0 0 -462 0 -462 34 69 c170 351 628
                    687 1136 833 140 41 286 71 417 87 133 16 475 19 614 5z m-5541 -3200 l0
                    -3090 -957 2 -958 3 -3 3088 -2 3087 960 0 960 0 0 -3090z"/>
                </g>
            </svg>
            </Nav.Link>
            </Container>
          </Navbar>
 
        )
    }
}

export default NavbarMain
