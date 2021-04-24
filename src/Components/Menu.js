import React from 'react'
//import './Menu.css';

import { Nav, NavItem, NavLink, Container } from 'reactstrap';

const Menu = () => {
    

  return (

    <div>
      <Container className="menu">
        <Nav pills fill>
          <NavItem>
            <NavLink href="#" >Movie App</NavLink>
          </NavItem>  
        </Nav>
      </Container>
    </div>
    
  );
}

export default Menu;
