import { useEffect, useState } from 'react';
import './App.css';
import myPicture from './Imagens/VitorDiorio.jpg';
import "animate.css/animate.min.css";
import Giticon from "./Imagens/Giticon.png"
import instagram from "./Imagens/instagram.png"
import linkedin from "./Imagens/linkedin.png"
import twitter from "./Imagens/twitter.png"

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(handleVisible, options);
    window.addEventListener('scroll', handleScroll, true)
    observer.observe(document.querySelector('#about'));
    return () => {
      IntersectionObserver.disconect();
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (event) => {
    setScrollPercent(event.srcElement.scrollTop - 400)
  }

  const options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }

  const [aboutClasses, setAboutClasses] = useState('background-title');
  const [scrollPercent, setScrollPercent] = useState(-500);

  const handleVisible = (entries) => {
    return entries[0].isIntersecting && !aboutClasses.includes('animate') 
      ? setAboutClasses((oldState) => oldState + ' ' + animPrefix + 'fadeIn') : true
  }

  const animPrefix = 'animate__animated animate__'
  const styles = {
    transform: `translateX(${(scrollPercent) * 0.1}%)`,
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
  
  return (
    <div className='body'>
      <div className="slide" onScroll={(e) => console.log(e)}>
        <img className={'myPicture ' + animPrefix + (window.innerWidth > 900 ? 'zoomInLeft' : 'zoomInDown')} src={myPicture} alt="Vitor Diorio" />
        <div className={'name-card ' + animPrefix + (window.innerWidth > 900 ? 'zoomInRight' : 'zoomInUp')}>        
          <h1>Vitor Martins Diorio</h1>
          <h5>Full-Stack Developer</h5>
        </div>
      </div>
      <div className="slide half">
        <p className='text-wbackground'>Desenvolvedor Full-Stack de Cajamar-SP estudando na TRYBE, Eu faço aplicações web! Principalmente em REACT. </p>
        <h1 className={aboutClasses} id="about" style={styles}>SOBRE MIM</h1>
      </div>
      <div className='slide'>
      </div>
      <div className="slide half">
        <h1
          className={aboutClasses}
          id="icon"
          style={{
            transform: `translateX(${(scrollPercent - 900) * 0.1}%)`,
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
        >
          CONTATO
        </h1>
        <div className='text-wbackground'>
          <a href="https://github.com/vdiorio" ><img className='icon' src={Giticon} alt="Github" /></a>
          <a href="https://www.instagram.com/zvitordiorio/"><img className='icon' src={instagram} alt="instagram" /></a>
          <a href="https://www.linkedin.com/in/vitordiorio/"><img className='icon' src={linkedin} alt="linkedin" /></a>
          <a href="https://twitter.com/Samuraidoaxe"><img className='icon' src={twitter} alt="twitter" /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
