import React from 'react';
import Button from "@material-ui/core/Button/Button"

import "./Footer.css";
import perguntasLogo from "../assets/images/perguntas_frequentes.png";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_qna">
                <img alt="perguntas-frequentes-img" src={perguntasLogo} />
                <Button variant="outlined">Central de ajuda</Button>
            </div>
        </div>
    )
}

export default Footer
