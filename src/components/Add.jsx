import React from 'react'
import Button from './Button'

const Add = ({ text, pic }) => {
    return (
        <div className="banner green row">
            <div className="row banner__info">
                <span className="banner__text">
                    { text }
                </span>
                <Button text={ "Tutorial" } color={ { custom: 'banner__btn', text: 'black' } } />
            </div>
            <img src={ pic } className="banner__pic" alt="bitcoin" />
        </div>
    )
}

export default Add