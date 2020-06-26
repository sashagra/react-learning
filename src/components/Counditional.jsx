import React from 'react';

const ValidationMsg = ({ val }) => {
    
    return (
        <>
        {val > 10 ? <h2>Grate then 10</h2> : <h3>Less then <em>10</em></h3>}
        {val && <h5>We have val</h5>}
        </>
    )

}

export default ValidationMsg;