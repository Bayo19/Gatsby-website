import React from 'react'
import Layout from '../components/layout'
import Tooly from '../components/tools.module.scss'
import Card from '../components/Card'

const Tools = () => {
    return ( 
    <Layout>
        {/* <Card link={'https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2'} cardText={'Click here'} body={'the body description of the card'}/> */}
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
                    
                    <Card link={'https://www.diffchecker.com/}/'} cardText={'Diff Checker'} body={'A tool to compare text differences between two text files. Helpful when learning from tutorials'} />

                    <Card  link={'https://devdocs.io/'} cardText={'Dev Docs'} body={'DevDocs combines multiple developer documentations in a clean and organized web UI with offline support'}/>

                    <Card  link={"https://css-doodle.com/"} cardText={'CSS doodle'} body={'A web component for drawing patterns with CSS'}/>

                    <Card  link={"https://addyosmani.com/resources/essentialjsdesignpatterns/book/"} cardText={'JS Design Patterns'} body={'Learning JavaScript Design Patterns. A book by Addy Osmani'}/>

                    <Card link={"https://public-apis.xyz/"} cardText={'Public APIs'} body={'A collection of public and free APIs for development'} />

                    <Card link={"https://css-tricks.com/"} cardText={'CSS TRICKS'} body={'A great resource itself. has all the css information you need and more!'} />
                        
                    <Card link={"https://picsum.photos/"} cardText={'Lorem Picsum'} body={'The Lorem Ipsum for photos'}/>

                    <Card link={"https://colorhunt.co/"} cardText={'ColorHunt'} body={'Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes'}/>

                    <Card link={"https://app.streamlineicons.com/"} cardText={'Streamline Icons'}  body={'The World\'s Largest Icon Library'}/>

                    <Card link={"https://coolors.co"} cardText={'Coolors'} body={'Color Scheme Generator'}/>

                    <Card link={"https://multicolor.io"} cardText={'multicolor.io'} body={'Another wonderful picture resource by the creator of alligator.io'}/>

                    <Card link={'https://kazzkiq.github.io/balloon.css/'} cardText={'Balloon.css'} body={'Simple tooltips made of pure CSS'}/>
                    
                    <Card link={'https://tobiasahlin.com/blog/'} cardText={'Tobias ahlin'} body={'JS, design and animation tips and tutorials by Tobias Ahlin'}/>

                    <Card link={'http://www.0to255.com/'} cardText={'0 to 255'} body={'A color tool for finding lighter and darker colors based on any color. Very valuable for developers and designers'}/>

                    <Card link={'http://grid.malven.co/'} cardText={'grid.malvern'} body={'A simple visual cheatsheet for CSS Grid Layout'} />
                    
                    <Card link={'https://codepen.io/oliviale/post/css-guides'} cardText={'CSS guides'} body={'Guides, Cheatsheets and Tools by Olivia Ng'} />
                    
                    <Card link={'https://michalsnik.github.io/aos/'} cardText={'animate on scoll'} body={'Animate on scroll library'}/>
                    
                    <Card link={'https://9elements.github.io/fancy-border-radius/full-control.html'}  cardText={'fancy border radius'} body={'Border radius generator of organic looking shapes'}/>
                    
                        </div>
                    </div>
                </div>
        </main>
    </div>
    </Layout>
    )
}

export default Tools