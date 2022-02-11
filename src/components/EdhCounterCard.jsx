import React from "react";
import EdhCounter1 from "../Imagens/EdhCounter1.png"
import EdhCounter2 from "../Imagens/EdhCounter2.png"
import EdhCounter3 from "../Imagens/EdhCounter3.png"

export default function EdhCounterCard({visible}) {
  const animPrefix = 'animate__animated animate__'
  return (
    <div
      className={'projects ' + animPrefix + (visible ? 'fadeIn' : 'fadeOut')}
      style={{ zIndex: visible ? 1 : 0 }}
    >
    <div className='project-description'>
      <h3>EdhCounter</h3>
      <p>Um aplicativo contador de vida para o jogo Magic the Gathering focado no formato COMMANDER.</p>
      <a href='https://expo.dev/@vdiorio/EdhCounter'>
        <button>
          <span>Teste</span>
          <div className="liquid" />
        </button>
      </a><br />
      <a href='https://github.com/vdiorio/EdhCounter'>
      <button>
        <span>Github</span>
        <div className="liquid" />
      </button>
      </a>
    </div>
    <div className='projects-screenshots'>
      <img src={EdhCounter2} className="screenshot" alt="screenshot de aplicativo" />
      <img src={EdhCounter1} className="screenshot" alt="screenshot de aplicativo" />
      <img src={EdhCounter3} className="screenshot" alt="screenshot de aplicativo" />
    </div>
  </div>
  )
}