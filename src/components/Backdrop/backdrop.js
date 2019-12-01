import React from 'react'
import Backy from './backdrop.module.scss'


const backdrop = (props) => {
    return (
        <div className={Backy.backdrop} onClick={props.click}/>
    );
}

export default backdrop