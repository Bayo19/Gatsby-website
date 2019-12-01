import React from 'react';
import {Link} from 'gatsby'
import Sider from './sideDrawer.module.scss'

const sideDrawer = (props) => {
    return (
        <nav className={Sider.sideDrawer}>
            <ul>
                <li> <Link className={Sider.sideDrawerLink} to="/tools">Tools</Link></li>
                <li> <Link className={Sider.sideDrawerLink} to="/jspage">JavaScript</Link></li>
                <li> <Link className={Sider.sideDrawerLink} to="/nodePage">Node</Link></li>
                <li> <Link className={Sider.sideDrawerLink} to="/ruby">Ruby</Link></li>
                <li> <Link className={Sider.sideDrawerLink} to="/pythonpage">Python</Link></li>
                <li> <Link className={Sider.sideDrawerLink} to="/htmlpage">HTML and CSS</Link></li>
            </ul>
        </nav>
    );
}

export default sideDrawer