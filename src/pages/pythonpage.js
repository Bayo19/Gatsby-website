import React from 'react'
import Layout from '../components/layout'
import pythonPage from '../components/pythonpage.module.scss'
import Card from '../components/Card'

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
                    <p>Python is a high-level, general purpose programming language made in 1991 by <span><a className={pythonPage.guido} href="https://gvanrossum.github.io/" target="_blank"  rel="noopener noreferrer">Guido van Rossum</a></span>. It that can be used for a wide range of things from automating tasks to web development and data analysis. The syntax is easy to read and therefore, Python developers can express concepts with more ease than they can using other languages like JavaScript or <a className={pythonPage.noStyle} href="https://www.programiz.com/cpp-programming#what-is-cpp" target="_blank"  rel="noopener noreferrer"><span className={pythonPage.C1}>C</span><span className={pythonPage.C2}>+</span><span className={pythonPage.C3}>+.</span></a><br/><br/> <span className={pythonPage.IG}>I</span><span className={pythonPage.IG2}>n</span><span className={pythonPage.IG3}>s</span><span className={pythonPage.IG4}>t</span><span className={pythonPage.IG5}>a</span><span className={pythonPage.IG6}>g</span><span className={pythonPage.IG7}>r</span><span className={pythonPage.IG8}>a</span><span className={pythonPage.IG9}>m</span>, Youtube, <span className={pythonPage.spotify}>Spotify</span> and <span className={pythonPage.dropbox}>Dropbox</span> are some of the well-known companies that use Python to build their applications and websites.<br />
                    According to <a className={pythonPage.real} href="https://realpython.com/" target="_blank" rel="noopener noreferrer">realpython</a>, the Python community is one of the most supportive and friendly developer communities around and because of this new python programmers are unlikely to ever face any lack of resources.</p>
                    <p id="cent">Here are some of the best resources available for anyone that wants to learn Python.</p>
                </div>
                <div class="resource">

                    <div className={pythonPage.cont}>
                        <Card link={'https://automatetheboringstuff.com/'}  cardText={'Automate the boring stuff'} body={'Automate things with Python'}/>
                        
                        <Card link={'https://wiki.python.org/moin/BeginnersGuide/NonProgrammers'} cardText={'Python Resources'} body={'Python books, interactive courses, tools and videos'}/>

                        <Card link={'https://www.youtube.com/watch?v=_uQrJ0TkZlc'} cardText={'Python for beginners'} body={'A six hour online video course for new Python developers'} />

                        <Card link={'https://www.youtube.com/user/schafer5/playlists'} cardText={'Corey Schafer'} body={'A youtube channel with a wealth of Python information; including Django and Flask which are Python frameworks'}/>

                        <Card link={'https://python.swaroopch.com/'} cardText={'a byte of python'} body={'A free book on programming with the Python language. It serves as a guide to Python for a beginner audience. '} />

                        <Card link={'http://inventwithpython.com/'} cardText={'invent with python'} body={'An incredible website with free online books teaching python for beginners and computer game development'}/>

                        <Card link={'https://runestone.academy/runestone/books/published/thinkcspy/index.html#'} cardText={'How to think like a computer scientist'} body={'An interactive edition of the highly rated Python book by Allen B Downey'}/>
                        
                    </div>

                </div>
            </div>

        </main>
    </div>
        </Layout>
    )
}

export default Python