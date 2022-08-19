import './App.css';
import Vid from './assests/infinite.mp4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video autoPlay loop className='video'>
          <source src={Vid} type='video/mp4'></source>
          Infinite
        </video>
      </header>
      <footer>
        <h4 style={{color: 'lightslategrey'}}>Made with &infin; &amp; React</h4>
      </footer>
    </div>
  );
}

export default App;
