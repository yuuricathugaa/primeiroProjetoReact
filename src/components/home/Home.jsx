import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container-home'>
      <h1>Página Principal</h1>

        <ul className='links'>
          <li>
            <Link to="/Descricao">Descrição da ODS 4</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre Mim</Link>
          </li>
        </ul>

    </div>
  );
}

export default Home;