import React from 'react';
import Icon from './../img/Icon.png';

function Header() {
  return (
    <React.Fragment>
      <h1>Brewski Brew Lodge</h1>
      <img src={Icon} alt="A icon of a lodge" />
    </React.Fragment>
  );
}

export default Header;