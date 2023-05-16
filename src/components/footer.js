import React from "react"

export default function Footer() {
  return(
    <div>
      <div style={{paddingTop: 50}}></div>
      <hr style={{color:'var(--textHR)', borderColor:'var(--textHR)', backgroundColor: 'var(--textHR)'}}/>
      <p style={{textAlign: "center"}}><a href="https://github.com/JasonTuyen" target="_blank" rel="noopener noreferrer">github</a> | <a href="https://www.linkedin.com/in/jason-tuyen/">linkedin</a> | <a href="mailto:chat@jasontuyen.com">email</a></p>
      
    </div>
  )
}