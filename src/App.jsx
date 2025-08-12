import { useEffect } from 'react';
import './App1.css';
import Cards from './components/Cards';
import CardsTeam from './components/Cardsteam';
import Navbar from './components/Navbar';
import VideoCards from './components/VideoCards';

const App = () => {
  const images = [
    { id: 1, src: "/pan_icon.png", title: "Automobile" },
    { id: 2, src: "/pan_icon.png", title: "Beauty & Cosmetic" },
    { id: 3, src: "/pan_icon.png", title: "Corperate" },
    { id: 4, src: "/pan_icon.png", title: "Education" },
    { id: 5, src: "/pan_icon.png", title: "Electronics & Machinery" },
    { id: 6, src: "/pan_icon.png", title: "Entertainment" },
    { id: 7, src: "/pan_icon.png", title: "Medical" },
    { id: 8, src: "/pan_icon.png", title: "Music Production" },
    { id: 9, src: "/pan_icon.png", title: "Music Videos" },
    { id: 10, src: "/pan_icon.png", title: "Personal" },
    { id: 11, src: "/pan_icon.png", title: "Real Estate" },
    { id: 12, src: "/pan_icon.png", title: "Sports & Fitness" },
    { id: 13, src: "/pan_icon.png", title: "Super Market" },
  ];
  const team = [
    { id: 1, src: "/JIM.png", title: "JIM" },
    { id: 2, src: "/FRED.png", title: "FRED" },
    { id: 3, src: "", title: "EDMUND" },
  ]
  const videos = [
    { id: 1, src: "https://res.cloudinary.com/dprm1pdxg/video/upload/q_auto:eco,f_auto,dl_1/v1743448696/0331_2_vwtifb.mp4" },
    { id: 2, src: "https://res.cloudinary.com/dprm1pdxg/video/upload/q_auto:eco,f_auto,dl_1/v1743448593/0331_1_ejlfmn.mp4" },
    { id: 3, src: "https://res.cloudinary.com/dprm1pdxg/video/upload/q_auto:eco,f_auto,dl_1/v1743448425/0331_qzmrig.mp4" },
    { id: 4, src: "https://res.cloudinary.com/dprm1pdxg/video/upload/q_auto:eco,f_auto,dl_1/v1743447098/v1691_2_b5vwja.mp4" },
    { id: 5, src: "https://res.cloudinary.com/dprm1pdxg/video/upload/q_auto:eco,f_auto,dl_1/v1743447588/v9161_zomwm4.mp4" },
    { id: 6, src: "https://res.cloudinary.com/dprm1pdxg/video/upload/q_auto:eco,f_auto,dl_1/v1743447698/v9162_2_dehafe.mp4" },
    { id: 7, src: "https://res.cloudinary.com/dprm1pdxg/video/upload/q_auto:eco,f_auto,dl_1/v1743447760/v9163_2_b8rqpn.mp4" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const title = document.querySelector('.title');
      if (title) {
        title.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <div className='content'>
        <Navbar />
        <div className='ovl'></div>
        <section id='home' className='home'>
          <div>
            <video autoPlay muted loop className='mainvideo'>
              <source src='https://res.cloudinary.com/dprm1pdxg/video/upload/q_auto:low,f_auto,dl_1/v1743445901/panmain_4_djc0us.mp4' type='video/mp4' />
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
          <Cards button='button-serv' card={ images } classo='overlay-services' classs='services' classc='con-services' slider='slider-serv' />
        </section>
        <section id='showcase' className='showcase' >
          <VideoCards videoCard={ videos } />
        </section>
        <section id='crew' className='crew'>
          <CardsTeam title="" card={ team } classo='overlay' classc='con' slider='slider' button='button' />
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