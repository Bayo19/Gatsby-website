import React from 'react'
import Drawer from './drawerToggleButton.module.scss'


const DrawerToggleButton = (props) => {
    return (
        <button className={Drawer.toggleButton} onClick={props.click}>
        <div className={Drawer.toggleButtonLine}/>
        <div className={Drawer.toggleButtonLine}/>
        <div className={Drawer.toggleButtonLine}/>
    </button>
    )
}

    


export default DrawerToggleButton;