import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
  const originalTitle = document.title;

  useEffect(() => {
    let interval1, interval2, timeout

    interval1 = setInterval(() => {
      document.title = '(1) You have a new message'
    }, 2000)

    timeout = setTimeout(() => {
      interval2 = setInterval(() => {
        document.title = originalTitle
      }, 2000)
    }, 1000)


    return () => {
      clearTimeout(timeout)
      clearInterval(interval1)
      clearInterval(interval2)
    }
  }, [originalTitle])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
