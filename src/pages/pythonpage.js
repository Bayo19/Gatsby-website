import React from 'react'
import Layout from '../components/layout'
import pythonPage from '../components/pythonpage.module.scss'

const Python = () => {
    return (
        <Layout>
           <div className={pythonPage.content}>
        <main>
            <div className={pythonPage.piece}>
                <div className={pythonPage.title}>
                    <h1 className={pythonPage.pythonHead}><span className={pythonPage.python1}>pyt</span><span className={pythonPage.python2}>hon</span></h1>
                </div>
                <div className={pythonPage.paragraph}>
                    <p>Python is a high-level, general purpose programming language made in 1991 by <span><a className={pythonPage.guido} href="https://gvanrossum.github.io/" target="_blank">Guido van Rossum</a></span>. It that can be used for a wide range of things from automating tasks to web development and data analysis. The syntax is easy to read and therefore, Python developers can express concepts with more ease than they can using other languages like JavaScript or <a className={pythonPage.noStyle} href="https://www.programiz.com/cpp-programming#what-is-cpp" target="_blank"><span className={pythonPage.C1}>C</span><span className={pythonPage.C2}>+</span><span className={pythonPage.C3}>+.</span></a><br/><br/> <span className={pythonPage.IG}>I</span><span className={pythonPage.IG2}>n</span><span className={pythonPage.IG3}>s</span><span className={pythonPage.IG4}>t</span><span className={pythonPage.IG5}>a</span><span className={pythonPage.IG6}>g</span><span className={pythonPage.IG7}>r</span><span className={pythonPage.IG8}>a</span><span className={pythonPage.IG9}>m</span>, Youtube, <span className={pythonPage.spotify}>Spotify</span> and <span className={pythonPage.dropbox}>Dropbox</span> are some of the well-known companies that use Python to build their applications and websites.<br />
                    According to <a className={pythonPage.real} href="https://realpython.com/" target="_blank">realpython</a>, the Python community is one of the most supportive and friendly developer communities around and because of this new python programmers are unlikely to ever face any lack of resources.</p>
                    <p id="cent">Here are some of the best resources available for anyone that wants to learn Python.</p>
                </div>
                <div class="resource">

                    <div className={pythonPage.cont}>
                        <div className={pythonPage.card}>
                            <h2><a href="https://automatetheboringstuff.com/" target="_blank">Automate the boring stuff</a>
                            </h2>
                            <p>Automate things with Python</p>
                        </div>

                        <div className={pythonPage.card}>
                            <h2><a href="https://wiki.python.org/moin/BeginnersGuide/NonProgrammers" target="_blank">Python Resources</a>
                            </h2>
                            <p>Python books, interactive courses, tools and videos</p>
                        </div>
                        <div className={pythonPage.card}>
                            <h2><a href="https://www.youtube.com/watch?v=_uQrJ0TkZlc" target="_blank">Python for beginners</a></h2>
                            <p>A six hour online video course for new Python developers</p>
                        </div>

                        <div className={pythonPage.card}>
                            <h2><a href="https://www.youtube.com/user/schafer5/playlists" target="_blank">Corey Schafer</a></h2>
                            <p>A youtube channel with a wealth of Python information; including Django and Flask which are Python frameworks</p>
                        </div>

                        <div className={pythonPage.card}>
                            <h2><a href="https://python.swaroopch.com/" target="_blank"> a byte of python</a>
                            </h2>
                            <p>A free book on programming with the Python language. It serves as a guide to Python for a beginner audience. </p>
                        </div>

                        <div className={pythonPage.card}>
                            <h2>
                                <a href="http://inventwithpython.com/" target="_blank">invent with python</a>
                            </h2>
                            <p>An incredible website with free online books teaching python for beginners and computer game development</p>
                        </div>
                        <div className={pythonPage.card}>
                            <h2>
                                <a href="https://runestone.academy/runestone/books/published/thinkcspy/index.html#" target="_blank">How to think like a computer scientist</a>
                            </h2>
                            <p>An interactive edition of the highly rated Python book by Allen B Downey</p>
                        </div>

                    </div>

                </div>
            </div>

        </main>
    </div>
        </Layout>
    )
}

export default Python