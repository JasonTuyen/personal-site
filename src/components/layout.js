import React from "react"
import NavMenu from "../components/navmenu"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (
    <div style={{margin: `3rem auto`, maxWidth: 1000, padding: `0 1rem`, 
    backgroundColor: 'var(--bg)',
    color: 'var(--textNormal)',
    }}>
      <NavMenu />
      <div style={{margin: `3rem auto`, maxWidth: 800}}>
      {children}
      <Footer />
      </div>
    </div>
  )
}