import React from 'react'

const SearchInputComponent = () => {
  return (
    <form action="" className='header__search'>
      <input className='header__search-input' type="text" placeholder='Search...' />
      <button className='header__search-btn' type='submit'>
        <svg viewBox="0 0 24 24" className='header__search-svg'>
          <use href="#search" />
        </svg>
      </button>
    </form>
  )
}

export default SearchInputComponent