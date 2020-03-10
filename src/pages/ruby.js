import React from 'react'
import Layout from '../components/layout'
import rubyStyle from '../components/ruby.module.scss'


const Ruby = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
    return ( <
        Layout >
        <
        div className = { rubyStyle.content } >
        <
        main >
        <
        div className = { rubyStyle.piece } >
        <
        div className = { rubyStyle.title } >
        <
        h1 className = { rubyStyle.rubyHead } > ruby < /h1> <
        /div> <
        div className = { rubyStyle.paragraph } >
        <
        p > < span className = { rubyStyle.roobSpan } > Ruby < /span> is a very high-level programming language created by Yukihiro Matsumoto in an effort to emphasize human needs instead of computer needs. A high level language is one that is closer to human languages and further from machine language (ones and zeros).  <br/ > < br / >
        According to the creator of the language, Ruby was made to make programmers more productive and happy and that seems to be the
        case as the language is used by massive companies such as Twitter, AirBnb, Shopify, Stripe and Github.
=======
=======
>>>>>>> parent of 0acf185... let's see
>>>>>>> parent of 0f9447d... update trying to revert
    return (
        <Layout>

        <div className={rubyStyle.content}>
        <main>
            <div className={rubyStyle.piece}>
                <div className={rubyStyle.title}>
                    <h1 className={rubyStyle.rubyHead}>ruby</h1>
                </div>
                <div className={rubyStyle.paragraph}>
<<<<<<< HEAD
                <p><span className={rubyStyle.roobSpan}>Ruby</span> is a very high-level programming language created by Yukihiro Matsumoto in an effort to emphasize human needs instead of computer needs. A high level language is one that is closer to human languages and further from machine language (ones and zeros).  <br/><br/>
                According to the creator of the language, Ruby was made to make programmers more productive and happy and that seems to be the case as the language is used by massive companies such as Twitter, AirBnb, Shopify, Stripe and Github.
=======
<<<<<<< HEAD
                <p><span className={rubyStyle.roobSpan}>Ruby</span> is a very high-level programming language created by Yukihiro Matsumoto in an effort to emphasize human needs instead of computer needs. A high level language is one that is closer to human languages and further from machine language (ones and zeros).  According to the creator of the language, Ruby was made to make programmers more productive and happy nad that seems to be the case as the language is used by massive companies such as Twitter, AirBnb, Shopify, Stripe and Github.
>>>>>>> parent of 6b5d62d... editing some code
=======
                <p><span className={rubyStyle.roobSpan}>Ruby</span> is a very high-level programming language created by Yukihiro Matsumoto in an effort to emphasize human needs instead of computer needs. A high level language is one that is closer to human languages and further from machine language (ones and zeros).  <br/><br/>
                According to the creator of the language, Ruby was made to make programmers more productive and happy and that seems to be the case as the language is used by massive companies such as Twitter, AirBnb, Shopify, Stripe and Github.
>>>>>>> parent of 0acf185... let's see
>>>>>>> parent of 0f9447d... update trying to revert

Most programming languages have similarities and because Ruby has the most readable syntax for new developers, it's a great language to learn as an introduction to programming as <span className={rubyStyle.roobStein}>it can help to understand how other languages work.</span></p>
                </div>
                <div class="resource">

                    <div className={rubyStyle.cont}>

                        <div className={rubyStyle.card}>
                            <h2><a href="https://ruby-doc.org/" target="_blank">Ruby Documentation</a>
                            </h2>
                            <p>Help and documentation for the Ruby programming language</p>
                        </div>

                         <div className={rubyStyle.card}>
                            <h2><a href="https://www.mikedane.com/programming-languages/ruby/" target="_blank">mike dane</a></h2>
                            <p>The basics of programming in Ruby</p>
                        </div>

                        <div className={rubyStyle.card}>
                            <h2><a href="https://www.rubyguides.com/about/" target="_blank">Ruby Guides</a>
                            </h2>
                            <p>Become a Ruby expert by learning from Jesus</p>
                        </div>
                        <div className={rubyStyle.card}>
                            <h2><a href="https://www.codecademy.com/learn/learn-ruby" target="_blank">Codecademy</a></h2>
                            <p>A great introduction to Ruby by Codecademy</p>
                        </div>

                        <div className={rubyStyle.card}>
                            <h2>
                                <a href="https://theswissbay.ch/pdf/Gentoomen%20Library/Programming/Ruby/The%20Ruby%20Programming%20Language%20-%20Oreilly.pdf" target="_blank">The Ruby programming language</a>
                            </h2>
                            <p>A book written by the author of the Ruby language</p>
                        </div>
                        <div className={rubyStyle.card}>
                            <h2>
                                <a href="https://launchschool.com/books/ruby/read/introduction#briefhistory" target="_blank">Launch School</a>
                            </h2>
                            <p>Free online guide book for learning Ruby</p>
                        </div>

                    </div>

                </div>
            </div>

        </main>
    </div>
        </Layout>
    )
}

export default Ruby