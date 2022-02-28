import React from 'react'
import Header from './Header'
import Add from './Add'
import Dashboard from './Dashboard'
import DashboardItem from './DashboardItem'
import UserTable from './UserTable'
const Middle = ({ images }) => {
    return (
        <div className="content box">
            <Header title="Section" images={ images } />
            <Add
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                pic={ images['bitconIcon.svg'] }
            />
            <Dashboard images={ images } subtitle='Your rewards' title="$0.26231428" />
            <div className="dashboard__items row">
                <DashboardItem images={ images } />
                <DashboardItem images={ images } />
            </div>
            <UserTable images={ images } />
        </div>
    )
}

export default Middle