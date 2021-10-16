import React from 'react';
import {Link} from 'react-router-dom'

const BackBtnBlock = () => {
    return (
        <Link to="/">
            <button className="go-back-btn">Back</button>
        </Link>
    )
}

export default BackBtnBlock