import React from 'react'
import Layout from '../components/layout'
import Tooly from '../components/tools.module.scss'

const Tools = () => {
    return ( 
    <Layout>
        <div className={Tooly.content}>
        <main>

            <div className={Tooly.piece}>
                <div className={Tooly.title}>
                    <h1 className={Tooly.toolHead}>Tools</h1>
                </div>

                <div className={Tooly.paragraph}>
                   <p>On this page, you'll find a variety of great tools that solve little issues, tools that allow you to do some things faster and a some helpful resources and free books. </p>
                </div>

                <div class="resource">
                    <div className={Tooly.cont}>
                    <div className={Tooly.card}>
                            <h2><a href="https://www.diffchecker.com/" target="_blank">Diff Checker</a></h2>
                            <p> A tool to compare text differences between two text files. Helpful when learning from tutorials</p>
                        </div>

                    <div className={Tooly.card}>
                            <h2><a href="https://devdocs.io/" target="_blank">Dev Docs</a></h2>
                            <p> DevDocs combines multiple developer documentations in a clean and organized web UI with offline support</p>
                        </div>
                    <div className={Tooly.card}>
                            <h2><a href="https://css-doodle.com/" target="_blank">CSS doodle</a></h2>
                            <p> A web component for drawing patterns with CSS</p>
                        </div>

                        <div className={Tooly.card}>
                            <h2><a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/" target="_blank">JS Design patterns</a></h2>
                            <p>Learning JavaScript Design Patterns. A book by Addy Osmani</p>
                        </div>
                        <div className={Tooly.card}>
                            <h2><a href="https://public-apis.xyz/" target="_blank">public apis</a></h2>
                            <p>A collection of public and free APIs for development</p>
                        </div>
                        <div className={Tooly.card}>
                            <h2><a href="https://css-tricks.com/" target="_blank">css tricks</a></h2>
                            <p>A great resource itself. has all the css information you need and more!</p>
                        </div>

                        <div className={Tooly.card}>
                            <h2><a href="https://picsum.photos/" target="_blank">lorem picsum</a></h2>
                            <p>The Lorem Ipsum for photos</p>
                        </div>

                         <div className={Tooly.card}>
                            <h2><a href="https://colorhunt.co/" target="_blank">ColorHunt</a></h2>
                            <p>Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes</p>
                        </div>

                        <div className={Tooly.card}>
                            <h2><a href="https://app.streamlineicons.com/" target="_blank">streamline icons</a></h2>
                            <p>The World's Largest Icon Library</p>
                        </div>

                        <div className={Tooly.card}>
                            <h2><a href="https://coolors.co" target="_blank">Coolors</a></h2>
                            <p>Color Scheme Generator</p>
                        </div>
                        <div className={Tooly.card}>
                            <h2><a href="https://multicolor.io" target="_blank">multicolor.io</a></h2>
                            <p>Another wonderful picture resource by the creator of <a className={Tooly.blackLink} href="https://alligator.io/" target="_blank">alligator.io</a></p>
                        </div>
                        <div className={Tooly.card}>
                            <h2><a href="https://kazzkiq.github.io/balloon.css/" target="_blank">Balloon.css</a></h2>
                            <p>Simple tooltips made of pure CSS.</p>
                        </div>

                        <div className={Tooly.card}>
                            <h2><a href="https://tobiasahlin.com/blog/" target="_blank">Tobias ahlin</a></h2>
                            <p>JS, design and animation tips and tutorials by Tobias Ahlin</p>
                        </div>

                         <div className={Tooly.card}>
                            <h2><a href="http://www.0to255.com/" target="_blank">0<span class="span3">to</span>255</a></h2>
                            <p>A color tool for finding lighter and darker colors based on any color. Very valuable for developers and designers</p>
                        </div>
                         <div className={Tooly.card}>
                            <h2><a href="http://grid.malven.co/" target="_blank">grid.malvern</a></h2>
                            <p>A simple visual cheatsheet for CSS Grid Layout</p>
                        </div>
                         <div className={Tooly.card}>
                            <h2><a href="https://codepen.io/oliviale/post/css-guides" target="_blank">CSS guides</a></h2>
                            <p>Guides, Cheatsheets and Tools by Olivia Ng</p>
                        </div>
                         <div className={Tooly.card}>
                            <h2><a href="https://michalsnik.github.io/aos/" target="_blank">animate on scoll</a></h2>
                            <p>Animate on scroll library</p>
                        </div>
                         <div className={Tooly.card}>
                            <h2><a href="https://9elements.github.io/fancy-border-radius/full-control.html" target="_blank">fancy border radius</a></h2>
                            <p>Border radius generator of organic looking shapes</p>
                        </div>
                        </div>
                    </div>
                </div>
        </main>
    </div>
    </Layout>
    )
}

export default Tools