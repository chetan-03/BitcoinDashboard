import React from 'react'
import LongBtn from './LongBtn'
import Button from './Button'
const Description = ({ images }) => {
    return (
        <div className="desc box">
            <div className="desc__title row">
                <LongBtn icon={ images['avalancheIcon.svg'] } title={ "Avalanchel" } btn={ { icon: images['downArrow.svg'], custom: "downBtn" } } />
                <LongBtn custStyle={ "walletBtn" } icon={ images['Wallet.svg'] } title={ "0XF6..1353" } btn={ { icon: images['downArrow.svg'], custom: "downBtn" } } />
            </div>
            <div className="custom-link">
                <div className="row">
                    <img src={ images['arrow-left.svg'] } alt="back" className="custom-link__icon" />
                    <h3 className="custom-link__title">Custom link</h3>
                </div>
                <label className='custom-link__text' htmlFor="input">https://testnet.xyz.xyz/trade?ref=</label>
                <input autoComplete='off' type="text" id="input" className="custom-link__input transparent" placeholder='Enter' />
                <div className="row submitBtns">
                    <Button text={ "Custom link" } icon={ images['enterIcon.svg'] } color={ { custom: "custom__btn" } } />
                    <Button text={ "Cancel" } icon={ images['cancelIcon.svg'] } color={ { custom: "cancel__btn" } } />
                </div>

            </div>
        </div>
    )
}

export default Description