/* eslint-disable react-hooks/exhaustive-deps */
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
import { ReactComponent as Html } from './Imagens/dev-Icons/html.svg'
import { ReactComponent as Css } from './Imagens/dev-Icons/css.svg'
import { ReactComponent as Docker } from './Imagens/dev-Icons/docker.svg'
import { ReactComponent as Git } from './Imagens/dev-Icons/git.svg'
import { ReactComponent as Javascript } from './Imagens/dev-Icons/javascript.svg'
import { ReactComponent as Jest } from './Imagens/dev-Icons/jest.svg'
import { ReactComponent as Mocha } from './Imagens/dev-Icons/mocha.svg'
import { ReactComponent as Mysql } from './Imagens/dev-Icons/mysql.svg'
import { ReactComponent as Node } from './Imagens/dev-Icons/node.svg'
import { ReactComponent as Npm } from './Imagens/dev-Icons/npm.svg'
import { ReactComponent as ReactLogo } from './Imagens/dev-Icons/react.svg'
import { ReactComponent as Redux } from './Imagens/dev-Icons/redux.svg'

function App() {
  const [language, setLanguage] = useState((window.navigator.userLanguage || window.navigator.language).includes('pt'));
  const [loaded, setLoaded] = useState((0));
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
      <div class="switch">
        <input onChange={() => setLanguage((last) => !last)} id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox" checked={!language} />
        <label for="language-toggle"></label>
        <span class="on">PT</span>
        <span class="off">EN</span>
      </div>
      <div className="slide" style={{ opacity: loaded }}>
        <img
          className={loaded && 'myPicture ' + animPrefix + ('backInUp')}
          src={myPicture}
          alt="Vitor Diorio"
          onLoad={() => setLoaded(1)}
          />
        <div className={loaded && 'name-card ' + animPrefix + ('backInUp')}>        
          <h1>Vitor Martins Diorio</h1>
          <h5>{language ? 'Desenvolvedor Full-Stack' : 'Full-Stack Developer'}</h5>
        </div>
      </div>
      <div className="slide half">
        <h1 className="background-title" id="about" style={styles}>{language ? 'SOBRE MIM' : 'ABOUT ME'}</h1>
        {language ? 
        <p className='text-wbackground right'>
          Desenvolvedor Full-Stack de Cajamar-SP estudando na TRYBE.<br />
          Eu faço aplicações web! Principalmente em REACT.
        </p>
        : <p className='text-wbackground right'>
        Full-Stack developer from São Paulo/Brasil currently studing in TRYBE.<br />
        I make web applications! Mainly in REACT.
      </p>}
      </div>
        <div className={'slide project-cards ' + projectAnimation} style={{ opacity: 0 }}>
        <div className='projects-header'>
          <h1>{language ? 'Projetos:' : 'Projects:'}</h1>
          <button onClick={() => {
              setProjectVisible(!projectVisible);
              clearInterval(timer.current);
            }}>
            <span>{'>'}</span>
            <div className="liquid" />
          </button>
        </div >
        <div className='project-caroussel'  id="projects">
          <RecipesAppCard visible={projectVisible} language={language} />
          <EdhCounterCard visible={!projectVisible} language={language} />
        </div>
      </div>
      <div className="slide half skills">
        <h1>
          {language ? 'Pronto para trabalhar com:' : 'Ready to work with:'}
        </h1>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <div className='skill-card'><Html /> Html</div>
              <div className='skill-card'><Css /> Css</div>
              <div className='skill-card'><Git /> Git</div>
              <div className='skill-card'><ReactLogo /> React</div>
              <div className='skill-card'><Jest /> Jest</div>
              <div className='skill-card'><Redux /> Redux</div>
              <div className='skill-card'><Npm /> Npm</div>
              <div className='skill-card'><Javascript /> Javascript</div>
              <div className='skill-card'><Docker /> Docker</div>
              <div className='skill-card'><Mysql /> Mysql</div>
              <div className='skill-card'><Mocha /> Mocha</div>
              <div className='skill-card'><Node /> Node</div>
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
          {language ? 'CONTATO' : 'CONTACT'}
        </h1>
        <div className={'text-wbackground ' + contactAnimation} style={{opacity: 0}} id='contact'>
          <a href="https://github.com/vdiorio" target="_blank" rel="noreferrer"><img className='icon' src={Giticon} alt="Github" /></a>
          <a href="https://www.instagram.com/zvitordiorio/" target="_blank" rel="noreferrer"><img className='icon' src={instagram} alt="instagram" /></a>
          <a href="https://www.linkedin.com/in/vitordiorio/" target="_blank" rel="noreferrer"><img className='icon' src={linkedin} alt="linkedin" /></a>
          <a href="https://twitter.com/Samuraidoaxe" target="_blank" rel="noreferrer"><img className='icon' src={twitter} alt="twitter" /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
