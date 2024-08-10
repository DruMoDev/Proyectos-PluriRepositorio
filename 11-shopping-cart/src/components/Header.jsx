import React from 'react'
import Filters from './Filters'

function Header({filter}) {
  return (
    <header>
        <h1>React Shop</h1>
        <Filters filter={filter}></Filters>
    </header>
  )
}

export default Header