import React from 'react'
import Button from './Button'
const Dashboard = ({ subtitle, title, images }) => {
    return (
        <div className="dashboard row glassbg">
            <div className="dashboard__info row">
                <h4 style={ { backgroundColor: 'transparent' } }>{ subtitle }</h4>
                <h2 style={ { backgroundColor: 'transparent' } }>{ title }</h2>
                <div className="row" style={ { backgroundColor: 'transparent', gap: '.5em' } }>
                    <Button text="$40 AVAX" color={ { custom: 'bandge transparent', text: 'white', width: '6.3em' } } />
                    <Button text="$10 BNB" color={ { custom: 'bandge transparent', text: 'white', width: '5.9em' } } />
                    <Button text="$210 BTC" color={ { custom: 'bandge transparent', text: 'white', width: '6.4em' } } />
                </div>
            </div>
            <Button icon={ images['enterIcon.svg'] } text="Custom link" color={ { custom: 'dashbord__btn custom' } } />
        </div>
    )
}

export default Dashboard