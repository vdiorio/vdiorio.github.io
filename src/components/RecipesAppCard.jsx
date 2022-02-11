import React from "react";
import recipesApp1 from "../Imagens/RecipesApp1.png"
import recipesApp2 from "../Imagens/RecipesApp2.png"
import recipesApp3 from "../Imagens/RecipesApp3.png"

export default function RecipesAppCard({visible}) {
  const animPrefix = 'animate__animated animate__'
  return (
    <div
      className={'projects ' + animPrefix + (visible ? 'fadeIn' : 'fadeOut')}
      style={{ zIndex: visible ? 1 : 0 }}
    >
    <div className='project-description'>
      <h3>Recipes App</h3>
      <p>Um aplicativo de receitas para conhecer, favoritar e preparar receitas.</p>
      <a href='http://recipes-app-mu.vercel.app'>
        <button>
          <span>Teste</span>
          <div className="liquid" />
        </button>
      </a><br />
      <a href='https://github.com/vdiorio/Recipes-App'>
      <button>
        <span>Github</span>
        <div className="liquid" />
      </button>
      </a>
    </div>
    <div className='projects-screenshots'>
      <img src={recipesApp1} className="screenshot" alt="screenshot de aplicativo" />
      <img src={recipesApp2} className="screenshot" alt="screenshot de aplicativo" />
      <img src={recipesApp3} className="screenshot" alt="screenshot de aplicativo" />
    </div>
  </div>
  )
}