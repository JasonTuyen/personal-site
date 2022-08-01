import React from "react"
import { Link } from "gatsby"
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
        <ListLink to="/about" >About</ListLink>
        <ListLink to="/projects">Projects</ListLink>
        <ListLink to="/other-misc">Other</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </div>
  )
}