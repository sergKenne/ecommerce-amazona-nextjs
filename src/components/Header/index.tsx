import React, { use } from 'react'
import './index.scss'
import Image from 'next/image'
import logo from '../../../public/assets/icons/logo.png'
import Link from 'next/link'
import SelectComponent from './SelectComponent'
import SearchInputComponent from './SearchInputComponent'

const Header = () => {

  return (
    <header className='header'>
      <div className="container header__inner">
        <div className='header__left-item'>
          <button className='header__bars-btn '>
            <svg className='header__bars-svg'>
              <use href="#bars" /> 
            </svg>
          </button>
          <Link href={"/"} className="header__logo">
            <Image src={logo} className='header__logo-img' alt='logo' />
            <span>Amazona</span>
          </Link>
          <svg className='header__circle'>
            <use href="#circle" />
          </svg>
        </div>
        <div className="header__form-filters">
          <SelectComponent />
          <SearchInputComponent/>
        </div>
        <div className="header__right-btns">
          <button type='button' className='btn btn--cart'>
            <svg className='header__bars-svg'>
              <use href="#cart" />
            </svg>
            <span>Cart</span>
          </button>
          <button type='button' className='btn'>
            <span>Sign in</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header