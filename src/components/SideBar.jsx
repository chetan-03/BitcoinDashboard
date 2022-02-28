import React from 'react'
import MenuList from './MenuList'
import Button from './Button'
const SideBar = ({ images }) => {
    const menuList = [
        {
            name: 'Home',
            icon: images['Home.svg'],
        },
        {
            name: 'Section 1',
            icon: images['section1.svg'],
        },
        {
            name: 'Section 2',
            icon: images['section2.svg'],
        },
        {
            name: 'Section 3',
            icon: images['section3.svg'],
        },
        {
            name: 'Section 4',
            icon: images['section4.svg'],
        },
        {
            name: 'Section 5',
            icon: images['section5.svg'],
        },
        {
            name: 'Section 6',
            icon: images['section6.svg'],
        },
        {
            name: 'Section 7',
            icon: images['section7.svg'],
        },
        {
            name: 'Section 8',
            icon: images['section8.svg'],
        },
        {
            name: 'Documentation',
            icon: images['documentation.svg'],
        }
    ]
    return (
        <div className="sidebar box">
            <div className="title row">
                <img src={ images['title.svg'] } alt="not found" className="title__image" />
                <h3 className="title__text">Name</h3>
                <img src={ images['closing icon.svg'] } alt="back icon" className="title__back" />
            </div>
            { menuList.map(list => <MenuList key={ list.name } pic={ list.icon } desc={ list.name } />) }
            <div className="row centerEven">
                <Button color={ { custom: "transparent", text: "#ffff" } } icon={ images['N.svg'] } text="&#36;0.90" />
                <Button color={ { custom: "green", text: "#3772ff" } } text="Buy &#36;XYZ" />
            </div>
            <div className="row Btw">
                <img src={ images['globe.svg'] } alt="globe" />
                <div className="row toggleBtn">
                    <img src={ images['night.svg'] } alt="night" className='transparent' />
                    <img src={ images['nightToggle.svg'] } className="transparent mt-1" alt="nightToggle" />
                </div>
            </div>
        </div>
    )
}

export default SideBar