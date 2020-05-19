import React from 'react'
import './login.css'
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
export default class Login extends React.Component{
    state={
        signup:"slide-up",
        login:''
    }
    Click=()=>{
        const {login,signup}=this.state
        if (signup=="slide-up"){
            this.setState({login:signup,signup:''})
        }else{this.setState({signup:login,login:''})}
    }
    render(){
        const {login,signup}=this.state
     return(
        <div style={{backgroundColor:'rgb(0,0,0,0.5)',width:'100%',height:'100%',position:'fixed',top:0}}>
        <div style={{display: 'flex',position:'fixed',bottom:0,left:'50%',marginLeft:'-225px',  alignItems: 'center', justifyContent: 'center'}}>
            <IconButton style={{position:'absolute',top:'20px',color:'white',zIndex:1,right:'20px'}} onClick={this.props.Login}>
                <Close/>
            </IconButton>
            <div className="form-structor">
                <div className={`signup ${signup}`}>
                    <h2 className="form-title" id="signup" onClick={this.Click}><span>or</span>Sign up</h2>
                        <form action="" method="POST" name="form1">
                            <div className="form-holder">
                                <input type="text" className="input" placeholder="Name" required="" name="name"/>
                                <input type="email" className="input" placeholder="Email" name="email" required=""/>
                                <input type="tel" className="input" placeholder="Contact Number" name="contact_no" required=""/>
                                <input type="date" className="input" placeholder="DOB" name="dob"/>
                                <input type="name" className="input" placeholder="Organisation Name" name="organizationName" required=""/>
                                <input type="password" className="input" placeholder="Password" name="password" required=""/>
                            </div>
                            <button className="submit-btn" type="submit">Sign up</button>
                        </form>
                </div>
                <div className={`login ${login}`}>
                    <div className="center">
                        <h2 className="form-title" id="login" onClick={this.Click}>
                            <span>or</span>Log in</h2>
                            <form action="" method="POST" name="form2">
                                <div className="form-holder">
                                    <input type="email" className="input" placeholder="Email" required="" name="email"/>
                                    <input type="password" className="input" placeholder="Password" name="password" required=""/>
                                </div>
                                <button className="submit-btn">Log in</button>
                            </form>
                            </div></div>
                            </div>
                            </div>
                            </div>
                            )
                        }
                    }