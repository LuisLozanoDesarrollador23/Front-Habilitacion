import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElements'
const Navegador = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>        
          <MenuLink to="/">
          Home
          </MenuLink>
          <MenuLink to="/User">
            Usuario
          </MenuLink>
          <MenuLink to="/Room">
          Habitaciones
          </MenuLink>                    
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navegador