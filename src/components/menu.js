import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    <div style={{ backgroundColor: '#f4f4f4', paddingTop: '10px' }}>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-evenly' }}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/service'>Comunity</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
        </ul>
    </div>
)

export default Menu
