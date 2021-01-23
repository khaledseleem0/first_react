import React , { Component } from 'react';
import Home from '../home/home';
import About from '../about/about';
import Footer from '../footer/footer';
import Creations from '../creation/creation';


class Index  extends Component {
    render(){
        return(
<div>
            <Home/>
            <About/>
            <Creations/>
            <Footer/>
</div>
        )
    }
}
export default Index;