import React from 'react';

import "./EventDescription.css";

function EventDescription() {
    return (
        <div className="eventDescription">
            <h3>DESCRIÇÃO DO EVENTO</h3>
            <div className="eventDescription_detail">
                <p>O Instituto Limbios promove, no dia 19/09/2020,
                     o Seminário sobre Autismo e Neurociência, 
                     com a participação de neurocientistas, médicos, fonoaudiólogos, 
                     neuropsicopedagogos e terapeutas ocupacionais, discutindo a importância da 
                     intervenção multidisciplinar no desenvolvimento dos indivíduos com o Transtorno do 
                     Espectro Autista.
                </p>
                <p>Curso gratuito e com certificação</p>
            </div>
        </div>
    )
}

export default EventDescription
