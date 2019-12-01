import React from "react"
import Layout from '../components/layout'
import Footer from '../components/footer'
import Index from '../components/index.module.scss'


const IndexPage = () => {
    return (
        <div>
            <div className={Index.container}>
            <div class="itemu item1 animated bounceInLeft "><p><span class="random1"><a href="about.ejs">welcome</a></span></p></div>
    <div class="itemu item2 animated bounceInDown "><p><span class="random2"><a href="tools.ejs">to</a></span></p></div>
    <div class="itemu item3 animated bounceInDown "><p><span class="random3"><a href="jspage.ejs">coding</a></span></p></div>
    <div class="itemu item4 animated bounceInDown "><p><span class="random4"><a href="tools.ejs">resources</a></span></p></div>
            </div>
          
            <Footer />
        </div>
    )
}

export default IndexPage