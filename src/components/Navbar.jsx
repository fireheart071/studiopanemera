const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <div className='logo'>
                    <a href="#home" aria-label="Go to home"><img className='pan-icon' src="/pan.png" alt="Studio Panemera logo" loading="lazy" decoding="async" /></a>
                </div>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#service">SERVICES</a></li>
                    <li><a href="#showcase">RESULTS</a></li>
                    <li><a href="#crew">CREW</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>

                <label htmlFor="chickletta" aria-label="Toggle navigation menu">
                    <img className='menu' src="/menu.png" alt="Open navigation menu" loading="lazy" decoding="async" />
                </label>
                <input type="checkbox" id='chickletta' className='chickletta' />
                <nav className='ph-nav'>
                    <ul className='ph-nav'>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#service">SERVICES</a></li>
                        <li><a href="#showcase">RESULTS</a></li>
                        <li><a href="#crew">CREW</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </nav>
        </div>
    )
}

export default Navbar