import React from 'react';
import Pages from './Pages';
import MainPage from './Pages/MainPage';
import RegisterPage from './Pages/LoginPage/RegisterPage';
import ProductPage from './Pages/MainPage/ProductPage';
import ProductDetailPage from './Pages/MainPage/ProductPage/ProductDetailPage';
import BoardPage from './Pages/MainPage/BoardPage';
import MyPage from './Pages/MyPage';
import BagPage from './Pages/MyPage/BagPage';
import {Route} from 'react-router-dom';


function App() {
  return(
    <div>
      <Route path="/" component={MainPage} exact/>
      <Route path="/main/register" component={RegisterPage} exact/>
      <Route path="/main/product/:category" component={ProductPage} exact/>
      <Route path="/main/product/:category/:productId" component={ProductDetailPage} />
      <Route path="/main/board/:board" component={BoardPage}/>
      <Route path="/main/profile/:userName" component={MyPage}/>
      <Route path="/main/profile" component={BagPage} exact/>
      <Route path="/" component={Pages}/>
    </div>
    
  )
}

export default App;
