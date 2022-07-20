import React from 'react';

export default function ResetButton({props}){

    const handleReset = () => {
        props(prev => [])
    }

    return (
        <button className="btn_reset" type="button" onClick={handleReset}>Wyczyść</button>
    )

}