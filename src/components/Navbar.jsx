import React from 'react'
const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <li><img className='pan-icon' src="/pan.png" alt="panemera icon" /></li>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#showcase">Showcase</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <label htmlFor="chickletta">
                    <img className='menu' src="/menu.png" alt="panemera icon" />
                </label>
                <input type="checkbox" id='chickletta' className='chickletta' />
                <nav className='ph-nav'>
                    <ul className='ph-nav'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#showcase">Showcase</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </nav>
        </div>
    )
}

export default Navbar