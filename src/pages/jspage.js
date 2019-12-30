import React from 'react'
import Layout from '../components/layout'
import jsbodyStyles from '../components/jsbody.module.scss'

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

                        <div className={jsbodyStyles.card}>
                            <h2><a href="https://scotch.io/courses/getting-started-with-javascript-for-web-development?ref=home-start-here" target="_blank">Getting started with JS</a>
                            </h2>
                            <p>An introduction to JavaScript by Chris Sevilleja</p>
                        </div>
                        <div className={jsbodyStyles.card}>
                            <h2><a href="https://javascript.info" target="_blank">javascript.info</a></h2>
                            <p>A wonderful online book</p>
                        </div>

                        <div className={jsbodyStyles.card}>
                            <h2><a href="https://www.mikedane.com/web-development/javascript/" target="_blank">mike dane</a></h2>
                            <p>The basics of programming in JS</p>
                        </div>

                        <div className={jsbodyStyles.card}>
                            <h2><a href="https://www.theodinproject.com/courses/javascript" target="_blank">odin proj</a>
                            </h2>
                            <p>A thorough online course/book with projects</p>
                        </div>

                        <div className={jsbodyStyles.card}>
                            <h2>
                                <a href="https://eloquentjavascript.net" target="_blank">eloquent JS</a>
                            </h2>
                            <p>Another very thorough online book</p>
                        </div>

                        <div className={jsbodyStyles.card}>
                            <h2><a href="https://www.udemy.com/modern-javascript-from-the-beginning/" target="_blank">Traversy</a></h2>
                            <p>Modern Javascript by Brad Traversy</p>
                        </div>

                        <div className={jsbodyStyles.card}>
                            <h2><a href="https://www.udemy.com/the-complete-javascript-course/" target="_blank">Complete JS </a></h2>
                            <p>A highly rated and project driven course from Jonas Schmedtmann</p>
                        </div>

                        <div className={jsbodyStyles.card}>
                            <h2><a href="https://javascript30.com/" target="_blank">Javascript30</a></h2>
                            <p>Get ideas and learn more by building projects with wes bos. Great Javascript practice</p>
                        </div>

                        <div className={jsbodyStyles.card}>
                            <h2><a href="https://keycode.info/" target="_blank">Keycodes</a></h2>
                            <p>Keycode reference site by wes bos</p>
                        </div>

                    </div>

                </div>
            </div>

        </main>
    </div>
        </Layout>
    )
}

export default JsPage