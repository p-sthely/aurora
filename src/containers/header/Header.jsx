import { useState } from 'react'
import './header.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logoCreat from '../../assets/logoCreat.png'

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={logoCreat} alt='logo creat' />
      </div>
      <div className='header__tabs'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About us</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
      <div className='header__cta'>
        <a class='button-secondary' href='#'>Log in</a>
        <a class='button-primary' href='#'>Sign up</a>
      </div>
      <div className='header__menu'>
      { toggleMenu
        ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false) } />
        : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true) } />
      }
      </div>
    </div>
  )
}

export default Header
