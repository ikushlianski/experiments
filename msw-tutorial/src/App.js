import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      const result = await fetch('/user');

      return await result.json();
    };

    fetchUser().then((data) => {
      console.log('data', data);
      setUsername(data.username);
      setLoggedIn(Boolean(data.username));
    }).catch((e) => {
      console.log('error when fetching user', e);
      console.error(e);

      setUsername(null);
      setLoggedIn(false);
    });


  }, []);

  const handleLogin = async () => {
    try {
      const result = await fetch('/login', {
        method: 'POST',
      });

      const data = await result.json();

      setUsername(data.username);
      setLoggedIn(Boolean(data.username));
    } catch (e) {
      console.log('error logging in', e);

      setUsername(null);
      setLoggedIn(false);

    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {loggedIn ? `Hey there, ${username}!`:
          <button onClick={handleLogin}>Login</button>}
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
