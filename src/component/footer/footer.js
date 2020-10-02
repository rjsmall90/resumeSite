import React from 'react'

import Contact from './contact'

const Footer = () => {
    return (
        <div
          style={{
            borderTop: "solid",
            borderWidth: "2px",
            borderColor: "black",
            margin: "10px",
            color: "black",
            fontSize: "20px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
        <Contact />
        </div>
        )

}

export default Footer; 