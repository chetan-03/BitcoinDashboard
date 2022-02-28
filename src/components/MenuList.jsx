import React from 'react'

const MenuList = ({ pic, desc }) => {
    return (
        <div className="sidebar__menu row">
            <img src={ pic } alt="icon" className="list__image" />
            <h3 className="list__text">{ desc }</h3>
        </div>
    )
}

export default MenuList