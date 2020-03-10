import React from 'react'
import Layout from '../components/layout'
import jsbodyStyles from '../components/jsbody.module.scss'
import Card from '../components/Card'

const JsPage = () => {
    return (
        <Layout>
            <div className={jsbodyStyles.content}>
        <main>
            <div className={jsbodyStyles.piece}>
                <div className={jsbodyStyles.title}>
                    <h1 className={jsbodyStyles.jsHead}>javascript</h1>
                </div>
                <div className={jsbodyStyles.paragraph}>
                    <p><span className={jsbodyStyles.jsyel}>JavaScript</span> is one of the most popular and widely used programming languages in the world. It is one of the core technologies of the <a className={jsbodyStyles.noStyle} href="https://webfoundation.org/about/" target="_blank"><span className={jsbodyStyles.w1}>World</span><span className={jsbodyStyles.w2}> Wide</span> <span className={jsbodyStyles.w3}>Web</span></a> - every major web browser has a JS engine. Though it was originally made to be used in browsers for developers to add interactivity to <a className={jsbodyStyles.noStyle} href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines"><span className={jsbodyStyles.webpage}>web pages</span></a>, it can now also be used to build mobile apps, games, real-time networking apps and command line tools. In 2009 Ryan Dahl wrote <a className={jsbodyStyles.noStyle} href="https://nodejs.org/en/docs/" target="_blank"><span className={jsbodyStyles.node1}>Node JS</span></a>, which is a <span class="balloon" data-balloon="What does this even mean?" data-balloon-pos="up">'run-time environment'</span> that allows
                        developers to use JavaScript for server-side scripting. Microsoft, <a className={jsbodyStyles.noStyle} href="https://www.paypal.com" target="_blank"><span className={jsbodyStyles.paypal}>Paypal</span></a>,
                        <a className={jsbodyStyles.noStyle} href="https://www.netflix.com" target="_blank"><span className={jsbodyStyles.neto} data-balloon="Distractions hahahaha" data-balloon-pos="up"> Netflix, </span></a> <a className={jsbodyStyles.noStyle} href="https://www.uber.com" target="_blank">Uber</a> and
                        <a  className={jsbodyStyles.noStyle}href="https://www.linkedin.com/" target="_blank"><span className={jsbodyStyles.linkedin}> Linkedin</span></a> are just a few of the major companies that use <span class="balloon" data-balloon="Not the same thing as Java." data-balloon-pos="down">JavaScript</span> for their websites.</p>
                    <p>Below, you will find some of the best resources available for anyone that wants to learn JS.</p>
                </div>
                <div class="resource">

                    <div className={jsbodyStyles.cont}>

                    <Card link={'https://scotch.io/courses/getting-started-with-javascript-for-web-development?ref=home-start-here'} cardText={'Getting started with JS'} body={'An introduction to JavaScript by Chris Sevilleja'}/>

                    <Card link={'https://javascript.info'} cardText={'javascript.info'} body={'a wonderful online book'}/>
                        
                    <Card link={'https://www.mikedane.com/web-development/javascript/'} cardText={'mike dane'} body={'The basics of programming in JS'}/>
                        
                    <Card link={'https://www.theodinproject.com/courses/javascript'} cardText={'Odin Project'} body={'A thorough online course/book with projects'}/>

                    <Card link={'https://eloquentjavascript.net'} cardText={'eloquent JS'} body={'Another very thorough online book'}/>
                        
                    <Card link={'https://www.udemy.com/modern-javascript-from-the-beginning/'} cardText={'Traversy'} body={'Modern Javascript by Brad Traversy'}/>

                    <Card link={'https://www.udemy.com/the-complete-javascript-course/'} cardText={'Complete JavaScript'} body={'A highly rated and project driven course from Jonas Schmedtmann'}/>

                    <Card link={'https://javascript30.com/'} cardText={'Javascript30'} body={'Get ideas and learn more by building projects with wes bos. Great Javascript practice'}/>

                    <Card link={'https://keycode.info/'} cardText={'Keycodes'} body={'Keycode reference site by wes bos'}/>

                    </div>

                </div>
            </div>

        </main>
    </div>
        </Layout>
    )
}

export default JsPage