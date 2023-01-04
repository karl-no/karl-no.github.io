import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="div-header-content">
          <div className="div-header">
            <h2 className="text-header">Karl Neuman</h2>
          </div>
          <div className="div-links">
            <a href="-">Sobre</a>
            <a href="-">Projetos</a>
            <a href="-">Contato</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;