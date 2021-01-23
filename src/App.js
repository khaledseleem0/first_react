import React,{Component} from 'react';
import {BrowserRouter,Route ,Switch} from 'react-router-dom';
import Index from './component/index/index';
import Erorr from './component/erorr/erorr';
import Nav from './component/nav/nav';
import Sigin from './component/sigin/sigin';
import Siginup from './component/SiginUp/SiginUp';
import Product from './component/products/product';

class App extends Component{
    render(){
        return(
     <BrowserRouter>
          <Nav/>
          
           <Switch>
             <Route exact path='/' component={Index}/>
             <Route  path='/product' component={Product}/>
             <Route  path='/sigin' component={Sigin}/>
             <Route  path='/signup' component={Siginup}/>
             <Route  path='/:erorr' component={Erorr}/>

           </Switch>
     </BrowserRouter>
        )}}
export default App