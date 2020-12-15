import React from 'react';
import MainPage from './Pages/MainPage';
import LoginPage from './Pages/LoginPage';
import MyPage from './Pages/MyPage';
import {Route} from 'react-router-dom';

function App() {
  return(
    <div>
      <Route path="/" component={MainPage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/profile/:userName" component={MyPage}/>
      
    </div>
    
  )
}

export default App;
