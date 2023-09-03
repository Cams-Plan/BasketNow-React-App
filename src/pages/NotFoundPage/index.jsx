import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

const NotFoundPage = () => {

  const navigate = useNavigate();

  const NFPStyle = {
      width: '150px',
      height: '100%'
  }

  return (
    <div style={{textAlign: 'center', backgroundColor:'#4ac1c1'}}>
        <h1>404 Page Not Found</h1>
        <img src="/BN.png" style={NFPStyle} alt="BasketNow Logo"/>
        <p><strong><Link to={navigate(-1)}>Go Back</Link></strong></p>
    </div>
  )
}

export default NotFoundPage
