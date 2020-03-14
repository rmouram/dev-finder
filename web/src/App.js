import React, {useState} from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  
  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class='input-block'>
            <label htmlFor='github_username'>Usuário do Githib</label>
            <input name='github_username' id='github_username' required />
          </div>

          <div class='input-block'>
            <label htmlFor='techs'>Tecnologias</label>
            <input name='techs' id='techs' required />
          </div> 

          <div className='input-group'>
            <div class='input-block'>
              <label htmlFor='longitude'>Longitude</label>
              <input name='github_username' id='github_username' required />
            </div>
            <div class='input-block'>
              <label htmlFor='latitude'>Latitude</label>
              <input name='github_username' id='github_username' required />
            </div>
          </div>

          <button type='submit'>Salvar</button>
        </form>
      </aside>
      
      <main>
        <ul>
          <li className='dev-item'>
            <header>
              <img src='https://avatars0.githubusercontent.com/u/28973566?s=460&u=996a6a1cc0b3aa07daf5cb1324eea08e0a5f984a&v=4' alt='Rômulo Ferreira'></img>
              <div className='user-info'>
                <strong>Rômulo Ferreira</strong>
                <span> ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Estudante de Engenharia de Computação - Futuro Data Scientist/Data Engineer ou algo de legal que der na telha.</p>
            <a href='https://github.com/rmouram'>Acessar perfil no github</a>
          </li>

          <li className='dev-item'>
            <header>
              <img src='https://avatars0.githubusercontent.com/u/28973566?s=460&u=996a6a1cc0b3aa07daf5cb1324eea08e0a5f984a&v=4' alt='Rômulo Ferreira'></img>
              <div className='user-info'>
                <strong>Rômulo Ferreira</strong>
                <span> ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Estudante de Engenharia de Computação - Futuro Data Scientist/Data Engineer ou algo de legal que der na telha.</p>
            <a href='https://github.com/rmouram'>Acessar perfil no github</a>
          </li>

          <li className='dev-item'>
            <header>
              <img src='https://avatars0.githubusercontent.com/u/28973566?s=460&u=996a6a1cc0b3aa07daf5cb1324eea08e0a5f984a&v=4' alt='Rômulo Ferreira'></img>
              <div className='user-info'>
                <strong>Rômulo Ferreira</strong>
                <span> ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Estudante de Engenharia de Computação - Futuro Data Scientist/Data Engineer ou algo de legal que der na telha.</p>
            <a href='https://github.com/rmouram'>Acessar perfil no github</a>
          </li>

          <li className='dev-item'>
            <header>
              <img src='https://avatars0.githubusercontent.com/u/28973566?s=460&u=996a6a1cc0b3aa07daf5cb1324eea08e0a5f984a&v=4' alt='Rômulo Ferreira'></img>
              <div className='user-info'>
                <strong>Rômulo Ferreira</strong>
                <span> ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Estudante de Engenharia de Computação - Futuro Data Scientist/Data Engineer ou algo de legal que der na telha.</p>
            <a href='https://github.com/rmouram'>Acessar perfil no github</a>
          </li>
        </ul>
      </main>

    </div>
  )
}

export default App;
