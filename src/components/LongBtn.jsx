import React from 'react'
import Button from './Button'

const LongBtn = ({ icon, title, btn, custStyle }) => {
    return (
        <div className={ `row balance transparent ${ custStyle }` }>
            <img src={ icon } className="balance__pic btn__text" alt={ title } />
            <span className="balance__text btn__text">{ title }</span>
            <Button text={ btn.name } icon={ btn.icon } color={ { custom: btn.custom, text: btn.text__color } } />
        </div>
    )
}

export default LongBtn