import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Div from '../index.js';
import mais from './mais.png';
import './style.css';

const styleBut = {
  'animation': 'move-botton 1.35s forwards',
}
const styleImag = {
  'animation': 'rotate-image 1.4s forwards',
}

class Button extends Component {
    constructor(props){
        super(props);

        this.state = {
            clickProfile: true,
            styleImag: {
                'animation': 'rotate-image 1.4s forwards',
            },
            styleBut : {
                'animation': 'move-botton 1.35s forwards',
            },
            styleImag_init: {
                'animation': 'none',
            },
            styleBut_init: {
                'animation': 'none',
            }
        }  
    }

    handlerClick = (event) => {
        this.setState({
            clickProfile: !this.state.clickProfile,
            styleImag_init: {                
                'animation': 'no-rotate-image 1.4s forwards',
            },
            styleBut_init: {                
                'animation': 'no-move-botton 1.4s forwards',
            }
        });
    }

    render(){
        const styleBt = this.state.clickProfile ? this.state.styleBut_init : this.state.styleBut;
        const styleImg = this.state.clickProfile ? this.state.styleImag_init : this.state.styleImag;
        return (
            <div className='button-perfil'>
                <div className='bottao' style={styleBt}>
                    <a href='#' onClick={this.handlerClick}>
                        <Image src={mais} style={styleImg}></Image>
                    </a>
                </div>
                <div className='div-content'>
                    <Div btClick={this.state.clickProfile}/>
                </div>
            </div>
        );
    }
}

export default Button;