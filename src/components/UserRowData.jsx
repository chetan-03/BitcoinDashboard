import React from 'react'
import UserData from './UserData'
const UserRowData = ({ data, images }) => {
    console.log(data)
    return (
        <div className="grid-row">
            <UserData title={ data.asset } icon={ data.img } tag={ data.chain } />
            <UserData title={ data.amount + " BNB" } tag={ { name: data.state } } />
            <UserData title={ `${ data.user.substr(0, 5) }..${ data.user.substr(-7) }` } />
            <UserData title={ data.referral_earnings + " BNB" } />
        </div>
    )
}

export default UserRowData