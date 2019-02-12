import React from 'react'
import { Link } from 'gatsby'
import Github from '../images/fork.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      backgroundImage: 'linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)',
      marginBottom: '',
      height: '200px'
    }}
  >
    <a href="https://github.com/MochIsrin068" target="blank" ><img src={Github}></img></a>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        marginTop: '-130px'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
