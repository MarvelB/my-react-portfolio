import './App.css';
import { useEffect, useState } from 'react';
import Home from 'pages/Home/Home';
import NavBar from 'components/NavBar/NavBar';
import { projectAuth } from 'firebase/config';
import firebase from "firebase/app"
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from 'pages/Login/Login';

function App() {

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged((user: firebase.User | null) => {
      setUser(user);
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="App bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800 min-h-screen">

        {isAuthReady && (
          <BrowserRouter>

            <NavBar setDarkMode={setDarkMode} showLogout={user ? true : false} />

            <Switch>

              <Route path="/login">
                {!user && <Login />}
                {user && <Redirect to="/" />}
              </Route>

              <Route exact path="/">
                {user && <Home />}
                {!user && <Redirect to="/login" />}
              </Route>

            </Switch>

          </BrowserRouter>
        )}
        
      </div>
    </div>
  );
}

export default App;
