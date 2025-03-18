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
    { id: 2, src: "/pan_icon.png", title: "MR. JIM" },
    { id: 3, src: "/pan_icon.png", title: "MR. FRED" },
    { id: 4, src: "/pan_icon.png", title: "MR. EDMUND" },
    { id: 5, src: null, title: "" },
  ]
  const videos = [
    { id: 1, src: "fulfilled 10s.mp4" },
    { id: 2, src: "coachben1bts.mp4", },
    { id: 3, src: "2024-2025 5.mp4", },
  ]
  return (
    <main>
      <div className='content'>
        <Navbar />
        <section id='home' className='home'>
          <h1 className='title'>Studio PANEMERA</h1>
        </section>
        <section id='about' className='about'>
          <div className='text'>
            <h2>Beauty in Motion</h2>
            <p>Studio Panemara is a full-service branding company and content creator specializing in videography. We are dedicated to consistently providing high customer satisfaction by rendering excellent service, quality products, and furnishing an enjoyable atmosphere at an acceptable price/value relationship. We will also maintain a friendly, fair, and creative work environment, which respects diversity, ideas, and hard work.</p>
          </div>
          <Cards title="" card={team} classo='overlay' classs='team-member' classc='con' slider='slider' button='button' />
        </section>
        <section id='service' className='service'>
          <Cards button='button-serv' title="OUR SERVICES" card={images} classo='overlay-services' classs='services' classc='con-services' slider='slider-serv' />
        </section>
        <section id='showcase' className='showcase' >
          <VideoCards videoCard={videos} title='OUR WORKS' />
        </section>
      </div>
      <footer id="contact" className='contact'>
        <div className='curve'>
          <div className='con-icon'>
            <a href='https://www.instagram.com/studio.panemera?igsh=cHFwdmh4ZzZ1cnE3'><img className='a' src="insta.png" /></a>
            <a href="mailto:studiopanemara@gmail.com"><img className='b' src="gmail.png" /></a>
          </div>
          <div className='con-text'>
            <h1>Contact Us</h1>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App