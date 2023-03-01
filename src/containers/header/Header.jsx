import { useState } from 'react'
import './header.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logoCreat from '../../assets/logoCreat.png'

const Tabs = () => (
  <ul>
    <li><a href='#'>Home</a></li>
    <li><a href='#'>About us</a></li>
    <li><a href='#'>Blog</a></li>
    <li><a href='#'>Contact</a></li>
  </ul>
)

const Cta = () => (
  <>
    <a className='button-secondary' href='#'>Log in</a>
    <a className='button-primary' href='#'>Sign up</a>
  </>
)

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={logoCreat} alt='logo creat' />
      </div>
      <div className='header__tabs'>
        <Tabs />
      </div>
      <div className='header__cta'>
        <Cta />
      </div>
      <div className='header__menu'>
      { toggleMenu
        ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false) } />
        : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true) } />
      }
      {toggleMenu && (
        <div className='header__menu__content'>
          <div className='header__menu__tabs'>
            <Tabs />
          </div>
          <div className='header__menu__cta'>
            <Cta />
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Header
