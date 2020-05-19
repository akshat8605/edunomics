import React from 'react';
import Bar from './Component/bar/bar'
import './App.css';
import Main from './Component/Main/main'
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css/dist/js/materialize.min.js";
import Drawer from './Component/bar/drawer'
class App extends React.Component {
state={
  login:false,
  drawer:false
}
Login=()=>{
  this.setState({login:!this.state.login})
}
toggleDrawer=()=>{
  this.setState({drawer:!this.state.drawer})
}
  render(){
  
  return (
    <div className="App">
     <Bar Login={this.Login} toggleDrawer={this.toggleDrawer}/>
     <Main login={this.state.login} Login={this.Login}/>
     <Drawer open={this.state.drawer} onClose={this.toggleDrawer}  Login={this.Login}/>
    </div>
  )
}
}

export default App;
