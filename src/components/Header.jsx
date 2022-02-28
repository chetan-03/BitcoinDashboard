import React from 'react'
import LongBtn from './LongBtn'
const Header = ({ title, images }) => {
    return (
        <header className="nav row">
            <div className="section">
                { title }
            </div>
            <LongBtn icon={ images['Wallet.svg'] } title={ "0.2$XYZ" } btn={ { name: "Tier 1", custom: 'green', text__color: '#3772ff' } } />
        </header>
    )
}

export default Header