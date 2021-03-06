import React from 'react'
import { Link } from 'react-router-dom'

export default function SemiBlockReverse(props) {
    return (
    <div className="container">
            <div className="row">
                <div className="col s12 l6 m6 p-t-100 "  data-aos="fade-left">
                <h4>{props.title}</h4>
                    <p className="m-t-10 left">
                        {props.text}
                    </p>
                    <div className="row m-t-10"  data-aos="fade-right">
                        <div className="col s6 left">  {props.isbutton1 ? <a target="_blank" href={props.button1path}><button className="button  hoverable pink lighten-1 waves-effect white-text m-t-10">{props.button1text}</button></a>:<></>}</div>
                        <div className="col s6 right">  {props.isbutton2 ? <a  href={props.button2path}><button className="hoverable button light-green accent-4 waves-effect white-text m-t-10">{props.button2text}</button></a>:<></>}</div>

                    
                    </div>
                </div>
                <div className="col s12 l6 m6 "  data-aos="fade-left" >
                {props.children}
                    
              
                </div>
            </div>
    </div>
    )
}