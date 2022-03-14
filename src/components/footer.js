import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import ComMandoLogo from "../images/com-mando-logo.png"

const menus = [
  {
    submenu: "Products",
    menu: ["TEMA", "TrackEye", "DIC System", "Photogrammetry", "Calibrations"],
  },
  {
    submenu: "Applications",
    menu: ["Car Safety Test", "Military", "Deformation", "Biology & liquid"],
  },
  {
    submenu: "Documents",
    menu: ["Brochures", "Release Notes", "How To"],
  },
  {
    submenu: "Login",
    menu: ["Log In", "Customer Register", "Partner register"],
  },
  {
    submenu: "About us",
    menu: [
      "News",
      "Company",
      "Investors",
      "Career",
      "Contact us",
    ],
  },
]
const socials = [
  {
    name: "Linkedin",
    icon: faLinkedin,
    href: "https://www.linkedin.com/notifications/",
  },
  {
    name: "Twitter",
    icon: faTwitter,
    href: "https://twitter.com/",
  },
  { name: "Youtube", icon: faYoutube, href: "https://youtube.com/" },
]
const contacts = [
  {
    name: "info@email.com",
    href: "mailto:info@email.com",
  },
  {
    name: "sales@email.com",
    href: "mailto:sales@email.com",
  },
  {
    name: "support@email.com",
    href: "mailto:support@email.com",
  },
]

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <nav className="footer-nav">
          <div className="row d-flex justify-content-between flex-wrap flex-column flex-lg-row">
            <ul className="follow-us d-flex">
              {socials.map((item, idx) => (
                <li className="d-flex justify-content-center" key={idx}>
                  <a href={item.href} className="text-center">
                    <FontAwesomeIcon
                      icon={item.icon}
                      size="2x"
                      color="#5A5A5A"
                    />
                    {/* <p className="social-name">{item.name}</p> */}
                  </a>
                </li>
              ))}
            </ul>
            {menus.map((item, idx) => (
              <div className="menu-list" key={idx}>
                <p className="menu-type">{item.submenu}</p>
                <ul>
                  {item.menu.length !== 0 &&
                    item.menu.map((menu, index) => (
                      <li key={index}>
                        <Link to="#menu">{menu}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
        <div className="bottom-bar">
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-5">
            <p className="footer-label text-white">Copyright Image Systems AB. All rights reserved.</p>

            <div className="contact-container d-flex pt-3">
              <div className="contact-credit d-flex align-items-center flex-wrap">
                <p className="me-4">Developed by</p>
                <img
                  src={ComMandoLogo}
                  loading="lazy"
                  className="mt-1"
                  alt="Com-mando logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
