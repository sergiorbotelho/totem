import React from 'react';
import './error.css'
import imgErro from '../../assets/error.png';
import { Link } from 'react-router-dom';
function Error() {
    return (
        <div className='container-error'>
            <img src={imgErro} style={{width: 500, height: 500}} alt="Imagem erro 404 - Page not found" />
            <h2>PAGINA NÃO ENCONTRADA</h2>
            <p>Esta página que está procurando não existe</p>
            <Link to='/' className='link'>
                Voltar para Home
            </Link>
        </div>
    )
}

export default Error;