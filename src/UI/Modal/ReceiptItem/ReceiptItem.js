import React from 'react'

import "./ReceiptItem.css";

function ReceiptItem({label, info}) {
    return (
        <div className="receiptItem">
            <p>{label}</p>
            <p>{info}</p>
        </div>
    )
}

export default ReceiptItem
