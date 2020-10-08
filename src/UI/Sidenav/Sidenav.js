import React from 'react'

import "./Sidenav.css"

function Sidenav() {
    return (
        <div className="sidenav">
            <nav>
                <li>Login</li>
                <ul>
                    <li>Para compradores</li>
                    <li>Ver mais eventos</li>
                    <li>Denuncie este evento</li>
                    <li>Termos e Políticas</li>
                </ul>
                <ul>
                    <li>Para profissionais</li>
                    <li>Como funciona</li>
                    <li>Soluções</li>
                    <li>Serviços</li>
                    <li>Preço</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidenav
