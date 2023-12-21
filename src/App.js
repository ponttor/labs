import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <iframe
          width='660' height='420'
          src='https://activate.infoprotector.com/cover/frame.php?video=358fe3d1-f5de-4e88-9733-8ce7d9aba4e2'
          frameBorder='0'
          referrerPolicy='unsafe-url'
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
