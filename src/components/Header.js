import React from 'react';
import Icon from './../img/Icon.png';

function Header() {
  return (
    <React.Fragment>
      <h1 align="center">Brewski Brew Lodge</h1>
      <img align="center" src={Icon} alt="A icon of a lodge" />
    </React.Fragment>
  );
}

export default Header;