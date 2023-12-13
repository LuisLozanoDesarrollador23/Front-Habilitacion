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
          <MenuLink to="/Admin">
            Usario
          </MenuLink>
          <MenuLink to="/Machine">
          Reserva
          </MenuLink>                    
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navegador