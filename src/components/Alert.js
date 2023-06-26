import React from 'react';

function Alert({ alert }) {

    function capitaLize(word){
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitaLize(alert.type)}</strong>: {alert.msg}
        </div>
    );
};

export default Alert;
