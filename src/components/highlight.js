import React from "react"

const Highlight = ({title, desc, github, link, image}) => {
    return(
        <div style={{border: '1px solid var(--textHR)', padding:50, marginBottom:25}}>
            <h3 style={{color: 'var(--textLink)', paddingLeft:5}}>{title}</h3>
            <p style={{color: 'var(--textNormal)', paddingLeft:5}}>{desc}</p>
            <img src={image}  alt={title} style={{border: '1px solid var(--textHR)', display: 'block', margin: 'auto'}}/>
            <div className="highlight-buttons"><button style={{backgroundColor: 'var(--bg)', border: '1px solid var(--textLink)'}}>{github}</button> <button style={{backgroundColor: 'var(--bg)', border: '1px solid var(--textLink)'}}>{link}</button></div>
        </div>
    )
}

export default Highlight