import React,{useState, useEffect} from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
import api from './services/api'

function App() {

  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords

        setLatitude(latitude)
        setLongitude(longitude)

      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, []);
  
  async function handleAddDev(e){
    e.preventDefault()

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })

    console.log(response.data)
  }

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className='input-block'>
            <label htmlFor='github_username'>Usuário do Githib</label>
            <input 
              name='github_username' 
              id='github_username' 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className='input-block'>
            <label htmlFor='techs'>Tecnologias</label>
            <input 
              name='techs' 
              id='techs' 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div> 

          <div className='input-group'>
            <div className='input-block'>
              <label htmlFor='longitude'>Longitude</label>
              <input 
                type='number'
                name='github_username' 
                id='github_username' 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
            <div className='input-block'>
              <label htmlFor='latitude'>Latitude</label>
              <input 
                type='number'
                name='github_username' 
                id='github_username' 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
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
