import React, { useState } from "react"
import { Link } from "gatsby"
import { Logo } from "../utils/imgImport"
import NavProductTab from "././NavProductTab"

const Header = () => {
  const [hambugerActive, setHambugerActiveState] = useState(false)
  const [navMenuShow, setNavMenuShow] = useState({})

  let humbugerClsName = "hamburger my-auto "
  let navMenuClsName = "navbar-nav "

  if (hambugerActive) {
    humbugerClsName += "active"
    navMenuClsName += "active"
  }

  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }
  const navMenuClick = navItem => {
    setNavMenuShow({
      ...navMenuShow,
      [navItem]: !navMenuShow[navItem],
    })
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <ul className={navMenuClsName}>
            <li
              className={`nav-item dropdown ${
                navMenuShow["products"] && "show"
              }`}
              onClick={() => navMenuClick("products")}
              role="presentation"
            >
              <a href="#products" className="nav-link">
                Products
              </a>
              <NavProductTab />
            </li>
            <li className="nav-item">
              <a href="#menu" className="nav-link">
                Applications
              </a>
            </li>
            <li className="nav-item">
              <a href="#menu" className="nav-link">
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a href="#menu" className="nav-link">
                Downloads
              </a>
            </li>
            <li className="nav-item">
              <a href="#menu" className="nav-link">
                Company
              </a>
            </li>
          </ul>
          <a href="#user">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M19 19.6673C19 14.5127 14.8213 10.334 9.66666 10.334C4.512 10.334 0.333328 14.5127 0.333328 19.6673"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.6667 4.33398C13.6667 6.54332 11.876 8.33398 9.66666 8.33398C7.45732 8.33398 5.66666 6.54332 5.66666 4.33398C5.66666 2.12465 7.45732 0.333984 9.66666 0.333984C11.876 0.333984 13.6667 2.12465 13.6667 4.33398Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Login</span>
          </a>
          <div
            className={humbugerClsName}
            onClick={hamburgerHandler}
            onKeyDown={hamburgerHandler}
            role="button"
            tabIndex="0"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
