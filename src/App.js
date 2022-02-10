import { useEffect, useRef, useState } from 'react';
import './App.css';
import myPicture from './Imagens/VitorDiorio.jpg';
import "animate.css/animate.min.css";
import Giticon from "./Imagens/Giticon.png"
import instagram from "./Imagens/instagram.png"
import linkedin from "./Imagens/linkedin.png"
import twitter from "./Imagens/twitter.png"
import RecipesAppCard from './components/RecipesAppCard';
import EdhCounterCard from './components/EdhCounterCard';

function App() {
  const timer = useRef();
  const options = {
    rootMargin: '0px',
    threshold: 1.0
  }
  useEffect(() => {
    const observerProject = new IntersectionObserver(handleVisible, options);
    observerProject.observe(document.querySelector('#projects'));
    const observerContact = new IntersectionObserver(handleVisibleContact, options);
    observerContact.observe(document.querySelector('#contact'));
    window.addEventListener('scroll', handleScroll, true)
    timer.current = setInterval(() => {
      setProjectVisible((old) => !old);
    }, 4000)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const handleScroll = (event) => {
    setScrollPercent(event.srcElement.scrollTop - 400)
  }

  const [scrollPercent, setScrollPercent] = useState(-500);
  const [projectVisible, setProjectVisible] = useState(false);

  const animPrefix = 'animate__animated animate__'
  const styles = {
    transform: `translateX(${(scrollPercent) * 0.08}%)`,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0
  }
  
  const handleVisible = (entries) => {
    return entries[0].isIntersecting && !projectAnimation.includes('animate') 
      ? setProjectAnimation(animPrefix + 'fadeIn') : true
  }

  const handleVisibleContact = (entries) => {
    console.log(entries[0]);
    return entries[0].isIntersecting && !contactAnimation.includes('animate') 
      ? setContactAnimation(animPrefix + 'backInRight') : true
  }

  const [projectAnimation, setProjectAnimation] = useState('');
  const [contactAnimation, setContactAnimation] = useState('');
  
  return (
    <div className='body'>
      <div className="slide" onScroll={(e) => console.log(e)}>
        <img className={'myPicture ' + animPrefix + ('backInUp')} src={myPicture} alt="Vitor Diorio" />
        <div className={'name-card ' + animPrefix + ('backInUp')}>        
          <h1>Vitor Martins Diorio</h1>
          <h5>Full-Stack Developer</h5>
        </div>
      </div>
      <div className="slide half">
        <h1 className="background-title" id="about" style={styles}>SOBRE MIM</h1>
        <p className='text-wbackground'>Desenvolvedor Full-Stack de Cajamar-SP estudando na TRYBE, Eu faço aplicações web! Principalmente em REACT. </p>
      </div>
        <div className={'slide project-cards ' + projectAnimation} style={{ opacity: 0 }}>
        <div className='projects-header'>
          <h1>Projetos:</h1>
          <button onClick={() => {
              setProjectVisible(!projectVisible);
              clearInterval(timer.current);
            }}>
            <span>{'>'}</span>
            <div className="liquid" />
          </button>
        </div >
        <div className='project-caroussel'  id="projects">
          <RecipesAppCard visible={projectVisible} />
          <EdhCounterCard visible={!projectVisible} />
        </div>
      </div>
      <div className="slide half">
        <h1
          className="background-title"
          id="icon"
          style={{
            transform: `translateX(${(scrollPercent - 800) * 0.08}%)`,
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0
          }}
        >
          CONTATO
        </h1>
        <div className={'text-wbackground ' + contactAnimation} style={{opacity: 0}} id='contact'>
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
