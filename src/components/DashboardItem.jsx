import React from 'react'

const DashboardItem = ({ images }) => {
    return (
        <div className="dashboard__item glassbg row">
            <div className="dashboard__item__title row">
                <img src={ images['moneyIcon.png'] } alt="Money" className="dashboard__item__image" />
                12.5% of fee
            </div>
            <div className="dashboard__item__desc">
                Your Referral Link for xyz
            </div>
            <div className="row dashboard__item__link">
                <a href="http://unityexchange.design">http://unityexchange.design</a>
                <img src={ images['copy.svg'] } alt="copy" />
            </div>
        </div>
    )
}

export default DashboardItem