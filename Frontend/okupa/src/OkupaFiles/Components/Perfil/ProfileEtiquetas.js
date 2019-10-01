import React, { Component } from 'react';

export default class ProfileEtiquetas extends Component {

    render() {
        return(
            <div className="lista-etiquetas">
                    <ul>
                        <li className="etiqueta">Humor</li>
                        <li className="etiqueta">Teatro</li>
                        <li className="etiqueta">Música</li>
                        <li className="etiqueta">Clown</li>
                        <li className="etiqueta">Humor teatral</li>
                        <li className="etiqueta">Zona Oeste</li>
                        <li className="etiqueta">Nena, qué va a ser de mi</li>
                        <a href="https://www.google.com/search?q=etiquetas&rlz=1C1AFAB_enAR452AR472&sxsrf=ACYBGNTOtCDIRzAk-RUxxCZTpqMw92Ml3g:1569704759164&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ28n0tfTkAhXpGbkGHRLWCukQ_AUIEigB&biw=1366&bih=625">
                            <li className="etiqueta-puntos-suspensivos">...</li>
                        </a>
                    </ul>
                </div>
        );
    }
}