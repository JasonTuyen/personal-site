import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function NavMenu() {
  return(
    <div>
      <ListLink to="/">Jason Tuyen</ListLink>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/projects">Projects</ListLink>
        <ListLink to="/other-misc">Other</ListLink>
      </ul>
    </div>
  )
}