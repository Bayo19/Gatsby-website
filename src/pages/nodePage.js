import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import nodebody from '../components/nodebody.module.scss'

const NodePage = () => {
    return (
        <Layout>
            <div className={nodebody.content}>
            <main>

            <div className={nodebody.piece}>
                <div className={nodebody.title}>
                    <h1 className={nodebody.nodeHead}>Node</h1>
                </div>

                <div className={nodebody.paragraph}>
                    <p><span className={nodebody.nodeHead2}>NodeJS</span> is a 'run-time environment' that allows developers to use <Link to="/jspage" target ="_blank" className={nodebody.jsyel}>JavaScript</Link> for server-side scripting. This means it can be used to code the <a href="https://brainhub.eu/blog/9-famous-apps-using-node-js/" target="_blank" className={nodebody.backEnd}>backend of an application or website.</a> Node.js uses an event-driven, non-blocking I/O model <a href="https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee" target="_blank" className={nodebody.async}>(asynchornous request handling)</a> that makes it fast and efficient. <br/> <br/>It's very popular in the software development industry and is easy to learn for developers that are familiar with JavaScript, at least compared to other backend programming languages. Node is suitable for real time applications such as <a href="https://colyseus.io/" target="_blank" className={nodebody.nodeGame}>online games</a>,  <a href="https://itnext.io/build-a-group-chat-app-in-30-lines-using-node-js-15bfe7a2417b" target ="_blank" className={nodebody.blackLink}>chat apps</a>, media service providers, <a className={nodebody.ebaylink} href="https://tech.ebayinc.com/engineering/how-we-built-ebays-first-node-js-application/" target="_blank"><span className={nodebody.neto2}>e-comm</span><span className={nodebody.webpage2}>erce</span><span className={nodebody.webpage3}> applic</span><span className={nodebody.webpage4}>ations</span></a>  and social media platforms.</p>
                </div>
                
                <div class="resource">

                    <div className={nodebody.cont}>

                        <div className={nodebody.card}>
                            <h2><a href="https://nodejs.org/en/docs/" target="_blank">NodeJS.ORG</a></h2>
                            <p>Official Node documentation</p>
                        </div>

                        <div className={nodebody.card}>
                            <h2><a href="https://www.udemy.com/course/nodejs-the-complete-guide/" target="_blank">Complete Guide - NodeJS</a></h2>
                            <p>A wonderful insightful course by Maximilian Schwarzmuller. It covers REST API's, Authentication, MongoDB and SQL</p>
                        </div>

                        <div className={nodebody.card}>
                            <h2><a href="https://www.theodinproject.com/courses/nodejs" target="_blank">odin proj - node</a>
                            </h2>
                            <p>A thorough course with links to useful resources</p>
                        </div>

                        <div className={nodebody.card}>
                            <h2>
                                <a href="https://learnnode.com/" target="_blank">LEARN NODE - Wes Bos</a>
                            </h2>
                            <p>A premium training course to learn to build apps with Node.js, Express, MongoDB, and friends.</p>
                        </div>

                        <div className={nodebody.card}>
                            <h2>
                                <a href="https://www.youtube.com/watch?v=dFnkZ15-_0o" target="_blank">Node Introduction</a>
                            </h2>
                            <p>A free 2 hour review of The Complete Node.js Developer Course by Andrew Mead</p>
                        </div>

                        <div className={nodebody.card}>
                            <h2><a href="https://expressjs.com/" target="_blank">Express JS </a></h2>
                            <p>A Node JS Framework</p>
                        </div>

                        <div className={nodebody.card}>
                            <h2><a href="https://nodeschool.io/#workshopper-list" target="_blank">Nodeschool</a></h2>
                            <p>Open source workshops that teach web software skills. Do them on your own or at a workshop nearby.</p>
                        </div>

                        <div className={nodebody.card}>
                            <h2><a href="https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e#.9s49rbove" target="_blank">why use node.js</a></h2>
                            <p>An insightful article about why and when to use Node</p>
                        </div>

                    </div>

                </div>
                
            </div>

        </main>
    </div>
        </Layout>
    )
}

export default NodePage