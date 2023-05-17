import React from 'react';
import PropTypes from 'prop-types';
import "../hojas-de-estilo/pantalla.css"


const Pantalla = ({input}) => {
    return (
        <div className='input'>
            {input}
        </div>
    );
};


Pantalla.propTypes = {

};


export default Pantalla;
