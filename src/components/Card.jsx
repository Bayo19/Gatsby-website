import React from 'react'
import  CardStyle from './card.module.scss'

const Card = (props) => {
    return (
        <div className={CardStyle.card}>
            <h2><a href={props.link} target='_blank'>{props.cardText}</a></h2>
            <p>{props.body}</p>
        </div>
    )
}

export default Card
