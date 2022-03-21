//import logo from './logo.svg'; this reat logo
import logo from './abu.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        My name is Abu Shayed and I'm going to master React! <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/unkownshore"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
