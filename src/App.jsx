import React from 'react';
import './App1.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import VideoCards from './components/VideoCards';
const App = () => {
  const images = [
    { id: 1, src: null, title: "" },
    { id: 2, src: "/pan_icon.png", title: "Automobile" },
    { id: 3, src: "/pan_icon.png", title: "Beauty & Cosmetic" },
    { id: 4, src: "/pan_icon.png", title: "Corperate" },
    { id: 5, src: "/pan_icon.png", title: "Education" },
    { id: 6, src: "/pan_icon.png", title: "Electronics & Machinery" },
    { id: 7, src: "/pan_icon.png", title: "Entertainment" },
    { id: 8, src: "/pan_icon.png", title: "Medical" },
    { id: 9, src: "/pan_icon.png", title: "Music Production" },
    { id: 10, src: "/pan_icon.png", title: "Music Videos" },
    { id: 11, src: "/pan_icon.png", title: "Personal" },
    { id: 12, src: "/pan_icon.png", title: "Real Estate" },
    { id: 13, src: "/pan_icon.png", title: "Sports & Fitness" },
    { id: 14, src: "/pan_icon.png", title: "Super Market" },
    { id: 15, src: null, title: "" }
  ];
  const team = [
    { id: 1, src: null, title: "" },
    { id: 2, src: "/pan_icon.png", title: "JIM" },
    { id: 3, src: "/pan_icon.png", title: "FRED" },
    { id: 4, src: "/pan_icon.png", title: "EDMUND" },
    { id: 5, src: null, title: "" },
  ]
  const videos = [
    { id: 1, src: "fulfilled 10s.mp4" },
    { id: 2, src: "coachben1bts.mp4" },
    { id: 3, src: "2024-2025 5.mp4" },
    { id: 4, src: "v1691.mp4" },
    { id: 5, src: "v9161.mp4" },
    { id: 6, src: "v9162.mp4" },
    { id: 7, src: "v9163.mp4" }
  ]
  return (
    <main>
      <div className='content'>
        <Navbar />
        <div className='ovl'></div>
        <section id='home' className='home'>
          <div>
            <video autoPlay muted loop className='mainvideo'>
              <source src='/panmain.mp4' type='video/mp4' />
            </video>
          </div>
          <div className='title'>
            <h1 className=' f'>STUDIO</h1>
            <h1 className=' s'>PANEMERA</h1>
          </div>

        </section>
        <section id='about' className='about'>
          <div className='text'>
            <h2>Beauty in Motion</h2>
            <p>Studio Panemara is a full-service branding company and content creator specializing in videography. We are dedicated to consistently providing high customer satisfaction by rendering excellent service, quality products, and furnishing an enjoyable atmosphere at an acceptable price/value relationship. We will also maintain a friendly, fair, and creative work environment, which respects diversity, ideas, and hard work.</p>
          </div>

        </section>
        <section id='service' className='service'>
          <Cards button='button-serv' card={images} classo='overlay-services' classs='services' classc='con-services' slider='slider-serv' />
        </section>
        <section id='showcase' className='showcase' >
          <VideoCards videoCard={videos} />
        </section>
        <section id='crew' className='crew'>
          <Cards title="" card={team} classo='overlay' classs='team-member' classc='con' slider='slider' button='button' />
        </section>
      </div>
      <footer id="contact" className='contact'>
        <div className='curve'>
          <div className='con-icon'>
            <a href='https://www.instagram.com/studio.panemera?igsh=cHFwdmh4ZzZ1cnE3'><img className='a' src="insta.png" /></a>
            <a href="mailto:studiopanemara@gmail.com"><img className='b' src="gmail.png" /></a>
            <a href="https://wa.me/233557609106"><img className='c' src="whatsapp.png" /></a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App