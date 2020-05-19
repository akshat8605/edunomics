import React from 'react';
import Home from './Home'
import Login from './login/login'
import './main.css'
import './materialize.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default class Main extends React.Component{
componentDidMount(){    
AOS.init()
}
    
    render(){
        const {login}=this.props
        return(
            <div >
               <Home/>
            {login?<Login Login={this.props.Login}/>:null}
            </div>
        )
    }
}