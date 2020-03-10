import React from 'react'
import Layout from '../components/layout'
import bodyStyles from '../components/body.module.scss'
import Card from '../components/Card'

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
                        like <a className={bodyStyles.blackLink} href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank"  rel="noopener noreferrer">flexbox</a> and <a className={bodyStyles.blackLink} href="https://gridbyexample.com/learn/" target="_blank"  rel="noopener noreferrer">css grid</a>, developers can arrange and align elements on a webpage however they like. CSS can be used to change the <span className={bodyStyles.size}>font-size</span> or <span className={bodyStyles.fFamily}>font-family</span> of the mark up; it can
                        even be used for animations and art.
                    </p>
                </div>
<br/><br/><br/>
                <div class="resource">

                    <div className={bodyStyles.cont2}>
                        <Card link={'https://www.youtube.com/watch?v=UB1O30fR-EE'} cardText={'HTML Crash Course'} body={'A great introduction to HTML by Traversy Media'} />

                        <Card link={'https://adamschwartz.co/magic-of-css/'} cardText={'Magic of CSS'} body={'A CSS course to turn you into a magician. By Adam Schwartz'} />

                        <Card link={'https://developer.mozilla.org/en-US/docs/Web/HTML'} cardText={'HTML Documentation'} body={'Learn what HTML is and how to use it'}/>
                        
                        <Card link={'https://www.youtube.com/watch?v=UB1O30fR-EE'} cardText={'HTML Crash Course'} body={'A great introduction to HTML by Traversy Media'} />

                        <Card link={'https://css-tricks.com/'} cardText={'CSS Tricks'} body={'A great resource itself. has all the css information you need and more!'}/>
                        
                        <Card link={'https://www.youtube.com/user/TechGuyWeb/search?query=html+css'} cardText={'HTML & CSS Projects'} body={'HTML & CSS syntax and projects by Brad Traversy. Great content as usual'}/>

                        <Card link={"https://www.thenetninja.co.uk/courses/html-for-beginners-tutorial"} cardText={'Net Ninja HTML'} body={'HTML taught be an enthusiastic teacher'}/>

                        <Card link={'https://colorhunt.co/'} cardText={'Colorhunt'} body={'Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes'}/>

                        <Card link={'https://coolors.co'} cardText={'Coolors'} body={'Color Scheme Generator'}/>

                        <Card link={'https://www.youtube.com/watch?v=9zBsdzdE4sM&feature=emb_title'} cardText={'CSS grid'} body={'A quick video discussing and explaining all you need to know about CSS Grid'}/>

                        <Card link={'https://picsum.photos/'} cardText={'Lorem Picsum'} body={" The 'Lorem Ipsum' for photos "}/>
                        
                    </div>
                </div>
            </div>
        </main>
    </div>
        </Layout>
    )
}

export default HTMLPage