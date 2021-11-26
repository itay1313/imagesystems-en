import React, { useState } from "react"
import { Link } from "gatsby"
import { Logo } from "../utils/imgImport"

const menus = [
  {
    name: "PRODUCTS",
  },
  {
    name: "Aplications",
  },
  {
    name: "videos",
  },
  {
    name: "downloads",
  },
  {
    name: "Company",
  },
]

const Header = () => {
  const [hambugerActive, setHambugerActiveState] = useState(false)

  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }

  let humbugerClsName = "hamburger my-auto "
  let navMenuClsName = "navbar-nav "

  if (hambugerActive) {
    humbugerClsName += "active"
    navMenuClsName += "active"
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <ul className={navMenuClsName}>
            {menus.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <a href="#menu" className="nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="btn-primary btn-login">Login</button>
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
