import React from 'react';
import Pages from './Pages';
import MainPage from './Pages/MainPage';
import RegisterPage from './Pages/LoginPage/RegisterPage';
import ProductPage from './Pages/MainPage/ProductPage';
import ProductDetailPage from './Pages/MainPage/ProductPage/ProductDetailPage';
import BoardPage from './Pages/MainPage/BoardPage';


import LoginPage from './Pages/LoginPage';
import MyPage from './Pages/MyPage';
import {Route} from 'react-router-dom';


function App() {
  return(
    <div>
      <Route path="/login" component={LoginPage}/>
      <Route path="/main" component={MainPage} exact/>
      <Route path="/main/register" component={RegisterPage} exact/>
      <Route path="/main/product/:category" component={ProductPage} exact/>
      <Route path="/main/product/:category/:productId" component={ProductDetailPage} />
      <Route path="/main/board/:board" component={BoardPage}/>
      <Route path="/main/profile/:userName" component={MyPage}/>
      <Route path="/main" component={Pages}/>
    </div>
    
  )
}

export default App;
