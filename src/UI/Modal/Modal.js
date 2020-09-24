import React, { useState } from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Button from "@material-ui/core/Button/Button";

import "./Modal.css";
import ReceiptItem from "./ReceiptItem/ReceiptItem";

function Modal() {

    const [receiptItems, setReceiptItems] = useState([
        {label: "Data", info: "23.04.2014 19:00"},
        {label: "Cliente", info: "Lucas Rhoden"},
        {label: "Pagamento ID", info: "#101523582"},
        {label: "Método de Pagamento", info: "Visa"},
        {label: "Item", info: "Sessão Namascrazy"}
    ])

    return (
        <div className="modal">
            <div className="modalHeader">
                <CheckCircleOutlineIcon />
                <div className="modalHeader_right">
                    <h3>Obrigado pela vossa compra!</h3>
                    <p>Você comprou uma sessão com nosso terapeuta <span className="prodName">Namascrazy</span>
                    , faça seu agendamento e boa consulta! Namaste <i style={{fontSize: "12px"}} className="fas fa-praying-hands"></i></p>
                </div>
            </div>
            <div className="modalBody">
                <div className="modal_receipt">
                    <h2>Recibo</h2>
                    <hr />
                    <div className="modal_receiptInfo">
                        <ul>
                            {receiptItems.map(item => (
                                <li><ReceiptItem label={item.label} info={item.info} /></li>
                            ))}
                        </ul>
                    </div>
                    <hr />
                    <div className="modal_receiptTotal">
                        <h3>Total</h3>
                        <p>$10,00</p>
                    </div>
                </div>
                <div className="modal_continue">
                    <h3>Confira nossas dicas para preparar-te para consulta!</h3>
                    <ol>
                        <li>dica 1</li>                            
                        <li>dica 2</li>
                        <li>dica 3</li>
                    </ol>
                    <Button><a href="/calendar">Agendar</a></Button>
                </div>
            </div>
            <div className="modalFooter">
                <p>Central de apoio</p>
                <Button>Contactar</Button>
            </div>
        </div>
    )
}

export default Modal
