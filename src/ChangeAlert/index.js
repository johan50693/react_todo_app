import React from 'react'
import { useStorageListener } from './useStorageListener';

const ChangeAlert = ({sincronize}) => {

    const {show, toggleShow} = useStorageListener(sincronize);

    if(show) {
        return  (
            <div>
                <p>
                    Tenemos cambios!!
                </p>
                <button
                    onClick={() => toggleShow(false)}
                >
                    Volver a cargar la información
                </button>
            </div>
        );
    }
}


export {ChangeAlert};
