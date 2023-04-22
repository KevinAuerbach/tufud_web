import React from 'react'
import logo_ani from "../images/logo-anii.png"
import logo_500 from "../images/logo-500-latam.png"

function Instituciones() {
  return (
    <div>
    <h2 className='display-6 mb-4'>Nos Respaldan</h2>
    <img src={logo_ani} width="200" alt="Logo Ani" className="img-fluid" />
    <img src={logo_500} width="200" alt="Logo 500" className="ms-5 img-fluid"/>
    </div>
  )
}

export default Instituciones