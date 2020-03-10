import React from 'react'
import {Link} from 'gatsby'
import Footy from '../components/footer.module.scss'

const Footer = () => {
   
    let cur_date = new Date()
    let year = cur_date.getFullYear()
    

    return (
        <footer className={Footy.footer}>

<div className={Footy.footerItem}>
    © Coding Resources {year}
</div>

<div className={Footy.footerItem}>
<Link className={Footy.footyLink} to="/about">About</Link>
</div>

</footer>
    )
    
}

export default Footer