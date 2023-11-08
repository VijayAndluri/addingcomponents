import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button>Hello World</button>
        </p>
        <a
          className="Add link"
          href="https://innoviousitservices.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          innoviousitservices
        </a>
      </header>
    </div>
  );
}

export default App;
