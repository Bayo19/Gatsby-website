import React from 'react'
import Layout from '../components/layout'
import rubyStyle from '../components/ruby.module.scss'
import Card from '../components/Card'

const Ruby = () => {
    return (
        <Layout>
        <div className={rubyStyle.content}>
        <main>
            <div className={rubyStyle.piece}>
                <div className={rubyStyle.title}>
                    <h1 className={rubyStyle.rubyHead}>ruby</h1>
                </div>
                <div className={rubyStyle.paragraph}>
                <p><span className={rubyStyle.roobSpan}>Ruby</span> is a very high-level programming language created by Yukihiro Matsumoto in an effort to emphasize human needs instead of computer needs. A high level language is one that is closer to human languages and further from machine language (ones and zeros).  <br/><br/>
                According to the creator of the language, Ruby was made to make programmers more productive and happy and that seems to be the case as the language is used by massive companies such as Twitter, AirBnb, Shopify, Stripe and Github.

Most programming languages have similarities and because Ruby has the most readable syntax for new developers, it's a great language to learn as an introduction to programming as <span className={rubyStyle.roobStein}>it can help to understand how other languages work.</span></p>
                </div>
                <div class="resource">

                    <div className={rubyStyle.cont}>

                        <Card link={"https://ruby-doc.org/"} cardText={'Ruby Documentation'} body={'Help and documentation for the Ruby programming language'}/>
                       
                        <Card link={'https://www.mikedane.com/programming-languages/ruby/'} cardText={'Mike Dane'}  body={'The basics of programming in Ruby'}/>
                        
                        <Card link={'https://www.rubyguides.com/about/'} cardText={'Ruby Guides'} body={'Become a Ruby expert by learning from Jesus'}/>

                        <Card link={'https://www.codecademy.com/learn/learn-ruby'} cardText={'Codecademy'} body={'A great introduction to Ruby by Codecademy'}/>
                        
                        <Card link={'https://theswissbay.ch/pdf/Gentoomen%20Library/Programming/Ruby/The%20Ruby%20Programming%20Language%20-%20Oreilly.pdf'} cardText={'The Ruby programming language'} body={'A book written by the author of the Ruby language'}/>

                        <Card link={'https://launchschool.com/books/ruby/read/introduction#briefhistory'} cardText={'Launch School'} body={'Free online guide book for learning Ruby'}/>
                    </div>

                </div>
            </div>

        </main>
    </div>
        </Layout>
    )
}

export default Ruby