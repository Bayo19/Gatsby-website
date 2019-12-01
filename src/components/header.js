import React from 'react'
import {Link} from 'gatsby'
import headerStyles from './header.module.scss'
import '../components/SideDrawer/drawerToggleButton'
import DrawerToggleButton from '../components/SideDrawer/drawerToggleButton'
const Header = (props) => {
   return (
    <header>
        <div className={headerStyles.toolbar}>
        <nav className={headerStyles.toolbarNavigation}>
            <div className={headerStyles.toolbarToggleButton}>
             <DrawerToggleButton  click={props.drawerClickHandler}/>   
            </div>
            <div className={headerStyles.toolbarLogo}><a href="/">Coding Resources</a></div>
            <div className={headerStyles.spacer}></div>
            <div className={headerStyles.toolbarNavItems}>
                <ul>
                    {/* <li><Link className={headerStyles.toolbarNavItemsLinks} to="/jspage">Languages</Link></li> */}
                    <li><Link className={headerStyles.toolbarNavItemsLinks} to="/tools">Tools</Link></li>
                </ul>
            </div>
        </nav>
        </div>
        <div className={headerStyles.secondNav}>
        <div className={headerStyles.tags}>
                        
                        <div className={headerStyles.tag }><Link className={headerStyles.linkFont} to="/jspage">JavaScript</Link></div>
                        <div className={headerStyles.tag2}><Link className={headerStyles.linkFont} to="/nodePage">Node</Link></div>
                        <div className={headerStyles.tag3}><Link className={headerStyles.linkFont} to="/ruby">Ruby</Link></div>
                        <div className={headerStyles.tag4}><Link className={headerStyles.linkFont} to="/pythonpage">Python</Link></div>
                        <div className={headerStyles.tag5}><Link className={headerStyles.linkFont} to="/htmlpage">HTML & CSS</Link></div>

                    </div>
        </div>
    </header>
    
   );
}

export default Header