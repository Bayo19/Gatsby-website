import React from 'react'
import {Link} from 'gatsby'
import Footy from '../components/footer.module.scss'

const Footer = () => {
    return (
        <footer className={Footy.footer}>

<div className={Footy.footerItem}>
    © Coding Resources 2019
</div>

<div className={Footy.footerItem}>
<Link className={Footy.footyLink} to="/about">About</Link>
</div>

</footer>
    )
    
}

export default Footer