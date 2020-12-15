import React from 'react';
import Pages from './Pages';
import MainPage from './Pages/MainPage';
import ProductPage from './Pages/MainPage/ProductPage';
import ProductDetailPage from './Pages/MainPage/ProductPage/ProductDetailPage';
import BoardPage from './Pages/MainPage/BoardPage';


import LoginPage from './Pages/LoginPage';
import MyPage from './Pages/MyPage';
import {Route} from 'react-router-dom';


function App() {
  return(
    <div>
      <Route path="/" component={MainPage} exact/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/product/:category" component={ProductPage}/>
      <Route path="/product/:category/:item" component={ProductDetailPage}/>
      <Route path="/board/:board" component={BoardPage}/>
      <Route path="/profile/:userName" component={MyPage}/>
      <Route path="/" component={Pages}/>
    </div>
    
  )
}

export default App;
