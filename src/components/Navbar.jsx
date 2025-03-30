import React from 'react'
const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <li><img className='pan-icon' src="/pan.png" alt="panemera icon" /></li>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#service">SERVICES</a></li>
                    <li><a href="#showcase">RESULTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>

                <label htmlFor="chickletta">
                    <img className='menu' src="/menu.png" alt="panemera icon" />
                </label>
                <input type="checkbox" id='chickletta' className='chickletta' />
                <nav className='ph-nav'>
                    <ul className='ph-nav'>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#service">SERVICES</a></li>
                        <li><a href="#showcase">RESULTS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </nav>
        </div>
    )
}

export default Navbar