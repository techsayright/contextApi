import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/Home/MainHeader/MainHeader';
import { AuthContext } from '../src/store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{

    if(localStorage.getItem('isLoggedIn')==='1'){
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {

    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {

    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler

    }}>
      <MainHeader />
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home />}
    </AuthContext.Provider>
  );
}

export default App;