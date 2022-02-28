import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserRowData from './UserRowData'
const UserTable = ({ images }) => {
    const [userData, setUserData] = useState([])
    const fetchUserData = async () => {
        const res = await axios.get('https://raw.githubusercontent.com/akshita151199/APIs/main/data')
        const { data } = res.data
        setUserData(data)
        console.log(data);
    }
    useEffect(() => {
        fetchUserData();
    }, [])
    console.log(userData.length);
    return (
        <div className="user-content">
            <div className="user__tabs row">
                <h4 className="tab">First Tab</h4>
                <h4 className="tab">Second Tab</h4>
            </div>
            <div className="user__table">
                <div className="grid-row">
                    <div>Assets</div>
                    <div>Amount</div>
                    <div>User Account</div>
                    <div >Referral Earning</div>
                </div>
                { userData.length > 0 && userData.map((data) => <UserRowData key={ data.amount } images={ images } data={ data } />) }
            </div>
        </div>
    )
}

export default UserTable