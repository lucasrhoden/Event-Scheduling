import React from 'react';
import Button from "@material-ui/core/Button/Button"

import "./Footer.css";
import perguntasLogo from "../../assets/images/perguntas_frequentes.png";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_qna">
                <img alt="perguntas-frequentes-img" src={perguntasLogo} />
                <Button variant="outlined">Central de ajuda</Button>
            </div>
            <div className="footer_sitemap">
                <div className="footer_sitemap_content">
                    <div className="footer_sitemap_left">
                        <p>Para compradores</p>
                        <ul>
                            <li>Ver mais eventos</li>
                            <li>Denuncie este evento</li>
                            <li>Termos e Políticas</li>
                        </ul>
                    </div>
                    <div className="footer_sitemap_center">
                        <p>Powered by</p>
                        <h3>Namasweb</h3>
                    </div>
                    <div className="footer_sitemap_right">
                        <p>Para profissionais</p>
                        <ul>
                            <li>Como funciona</li>
                            <li>Soluções</li>
                            <li>Serviços</li>
                            <li>Preço</li>
                        </ul>
                    </div>
                </div>
                <div className="footer_copyright">
                    <p>© COPYRIGHT 2020</p>
                    <p>NAMASWEB</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
