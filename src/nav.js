import React from 'react';
import logo from '../src/components/logotur.png';
import ImgPrincipal from './imgprincipal'; // Importe corretamente o componente ImgPrincipal

function Navbar() {
    return (
        <div className="Home">
            <header>
                <nav>
                    <div id="logo">
                        {/* Aqui você pode colocar a tag <img> para exibir sua imagem */}
                        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} /> {/* Substitua logo pelo caminho da sua imagem do logo */}
                        Acess <br /> Tour
                    </div>
                    <ul className="navigation-menu">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#serv-groom">Serviços</a></li>
                        <li><a href="#locate">Quem Somos</a></li>
                    </ul>
                    <div className="btn-group">
                        <button className="btn-outline-dark btn-hover-color"><span className="material-symbols-outlined">Faça o seu login</span></button>
                    </div>
                </nav>
            </header>
            {/* Inclua o componente ImgPrincipal aqui */}
            <ImgPrincipal />
        </div>
    );
}

export default Navbar;
