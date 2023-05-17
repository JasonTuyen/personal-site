import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FaSun, FaMoon } from "react-icons/fa"

import "../styles/global.css"

const ListLink = props => (
  <li style={{display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function NavMenu() {
  return(
    <div className="navMenu">
      <ListLink to="/">Jason Tuyen</ListLink>
      <ul style={{listStyle: `none`, float: `right`}}>
        <ListLink  to="/about" >About</ListLink>
        <ListLink to="/projects">Projects</ListLink>
        <ListLink to="/contact">Contact</ListLink>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div style={{display: 'inline-block', verticalAlign: 'middle'}}>
              <input
                type="checkbox"
                id="dark-mode-toggle"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
                hidden
              />
                <label style={{display: 'inline-block', verticalAlign: 'middle'}} htmlFor="dark-mode-toggle">
                {theme === "light" ? <FaMoon style={{ cursor: 'pointer'}}/> : <FaSun style={{ cursor: 'pointer'}}/>}
              </label>
            </div>
          )}
      </ThemeToggler>
      </ul>
    </div>
  )
}