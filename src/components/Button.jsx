import React from 'react'


const Button = ({ icon, text, color }) => {
    return (
        <a className={ `btn row ${ color.custom }` }>
            { icon && <img src={ icon } alt={ icon + "broken" } className="btn__icon" /> }
            { text && <span className="btn__text" style={ { color: color.text } }>{ text }</span> }
        </a>
    )
}

export default Button