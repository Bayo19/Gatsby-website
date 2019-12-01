import React from 'react'
import Layout from '../components/layout'
import bodyStyles from '../components/body.module.scss'

const HTMLPage = () => {
    return (
        <Layout>
          <div className={bodyStyles.content}>
        <main>

            <div className={bodyStyles.piece}>
                <div className={bodyStyles.title}>
                    <h1 className={bodyStyles.htmlHead}><span className={bodyStyles.span1}>HTML</span><span className={bodyStyles.span2}>&CSS</span></h1>
                </div>

                <div className={bodyStyles.paragraph}>
                    <p className={bodyStyles.para}>
                        When it comes to Web development and coding in general, most people start with <span className={bodyStyles.hyperStyle}>HTML</span>. HYPER TEXT MARK-UP LANGUAGE is the standard
                        mark up language for creating applications and websites on the net; it is not a programming language, it is strictly presentational. The bulk of html can be learnt in less than a week but its almost valueless on its own; it needs
                        some <span className={bodyStyles.css1}>C</span><span className={bodyStyles.css2}>S</span><span className={bodyStyles.css3}>S</span>.<br/>
                        <br/>

                         <span className={bodyStyles.span22}>CSS</span> is a stylesheet language used for describing the presentation of the document written in HTML. For example, with  <span className={bodyStyles.css10}>CSS</span> we can make a word <span className={bodyStyles.blueCol}>blue</span> or <span className={bodyStyles.greenCol}>green</span> or even make every letter of a word a different color. With tools
                        like <a className={bodyStyles.blackLink} href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">flexbox</a> and <a className={bodyStyles.blackLink} href="https://gridbyexample.com/learn/" target="_blank">css grid</a>, developers can arrange and align elements on a webpage however they like. CSS can be used to change the <span className={bodyStyles.size}>font-size</span> or <span className={bodyStyles.fFamily}>font-family</span> of the mark up; it can
                        even be used for animations and art. Learn more <a className={bodyStyles.blackHyper} href="https://learnlayout.com/" target="_blank">here</a>
                    </p>
                </div>
<br/><br/><br/>
                <div class="resource">

                    <div className={bodyStyles.cont2}>
                    <div className={bodyStyles.card}>
                            <h2><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML introduction</a></h2>
                            <p> Learn what HTML is and how to use it</p>
                        </div>

                        <div className={bodyStyles.card}>
                            <h2><a href="https://css-tricks.com/" target="_blank">css tricks</a></h2>
                            <p>A great resource itself. has all the css information you need and more!</p>
                        </div>

                        <div className={bodyStyles.card}>
                            <h2><a href="https://www.youtube.com/user/TechGuyWeb/search?query=html+css" target="_blank">Traversy</a></h2>
                            <p>HTML&CSS syntax and projects by Brad Traversy. Great content as usual</p>
                        </div>

                        <div className={bodyStyles.card}>
                            <h2><a href="https://www.thenetninja.co.uk/courses/html-for-beginners-tutorial" target="_blank">Net Ninja HTML</a></h2>
                            <p>This teacher has a great teaching style</p>
                        </div>

                        <div className={bodyStyles.card}>
                            <h2><a href="https://colorhunt.co/" target="_blank">ColorHunt</a></h2>
                            <p>Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes</p>
                        </div>

                        <div className={bodyStyles.card}>
                            <h2><a href="https://coolors.co" target="_blank">Coolors</a></h2>
                            <p>Color Scheme Generator</p>
                        </div>

                        <div className={bodyStyles.card}>
                            <h2><a href="https://www.thenetninja.co.uk/courses/css-grid-tutorial" target="_blank">Net Ninja Grid</a></h2>
                            <p>The best free CSS grid tutorial on the internet</p>
                        </div>
                        <div className={bodyStyles.card}>
                            <h2><a href="https://picsum.photos/" target="_blank">Lorem Picsum</a></h2>
                            <p>The 'Lorem Ipsum' for photos</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
        </Layout>
    )
}

export default HTMLPage