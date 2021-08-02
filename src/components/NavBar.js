import React from 'react';
import '../style.css';

const NavBar = () =>{
    return (<header>
        
            <img className='headerLogoImg' src='data:image/png;base64,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' />
        <div className='headerContenedorLink'>
            <div className='headerLink'>
                HOME
            </div>
            <div className='headerLink'>
                CATEGORIAS
            </div>
            <div className='headerLink headerLink-final'>
                CONTACTO
            </div>
        </div>
    </header>);
}
export default NavBar;