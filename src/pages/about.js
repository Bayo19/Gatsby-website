import React from 'react'
import Layout from '../components/layout'
import Abouty from '../components/about.module.scss'

const About = () => {
    return (
        <Layout>
            <div className={Abouty.content}>
        <main>
            <div className={Abouty.piece}>
                <div className={Abouty.title}>
                    <h1 className={Abouty.aboutHead}>About</h1>
                </div>
                <div className={Abouty.paragraph}>
                   <p className={Abouty.para1}>As a very curious person who always has about 50 tabs open in my browser, I thought it would be great to have a single place where all of my programming and coding related interests were kept. So I made this website. 

 For now the focus is on web developement but the scope of the website will open up and be more varied as I learn more  about coding and programming.
<br/><br/>
The purpose of this website is to help people, primarily junior developers, by putting all the best web development resources in one place for easy access, especially in case we forget the name of fun tools we have used before.</p>

<p>If you'd like to make any suggestions or if you have a helpful resource you would like featured here, contact me <a className={Abouty.noStyle} href="mailto:dev.bayo@gmail.com">dev.bayo@gmail.com</a></p>
                </div>
                </div>
                </main>
                </div>
        </Layout>
    )
}

export default About