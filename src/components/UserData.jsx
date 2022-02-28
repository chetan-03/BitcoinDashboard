import React from 'react'
import Button from './Button'
const UserData = ({ icon, title, tag }) => {
    console.log({ icon, title, tag })
    return (
        <div className='assets'>
            { icon && <img src={ icon } alt="asset icon" className="asset__image" /> }
            <div className="asset__info row">
                <div className="asset__name">{ title }</div>
                { tag && <div className="asset__tag">
                    { tag.name !== undefined && <span className="asset__tag__text">{ tag.name } </span> }
                    { tag.img !== undefined && <Button text="AVAX" icon={ tag.img } color={ { custom: "asset__tag-btn" } } /> }
                </div> }
            </div>
        </div>
    )
}

export default UserData