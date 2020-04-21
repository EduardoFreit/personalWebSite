import React, { Component } from 'react';
import './style.css';
import iconInst from './icon_instagram.png';
import iconTwit from './icon_twitter.png';
import iconZap from './icon_zap.png';
import { Image } from 'react-bootstrap';

const styleIcon = {
  opacity: '0.0',
  WebkitFilter: 'brightness(110%)',  
}

const styleIconTwit = {
  'opacity': '1.0',
  'animation-name': 'move-icons-twit',
  'animation-duration': '0.5s',
  'animation-fill-mode': 'forwards',
}

const styleIconZap = {
  'opacity': '1.0',  
  'animation-name': 'move-icons-zap',
  'animation-duration': '0.5s',
  'animation-fill-mode': 'forwards', 
}


const styleIconLink = {
  'pointer-events': 'none',//desativar eventos
  'cursor': 'default',//desativar ponteiro especial
}

class Icons extends Component {//
 
  constructor(props) {
    super(props);
  }
  
  render () {
    const styleIc = this.props.clkIc ? {} : styleIcon;
    const styleIcTw = !this.props.clkIc ? {} : styleIconTwit;
    const styleIcZp = !this.props.clkIc ? {} : styleIconZap;
    const styleIconLk = this.props.clkIc ? {} : styleIconLink;
    return(
        <div className='icons'>
          <a href='https://api.whatsapp.com/send?phone=5581981062016' target="_blank" style={styleIconLk}>
            <Image title="WhatsApp"  src={iconZap} id = 'zap' style={styleIcZp}/>
          </a>
          <a href='https://www.instagram.com/duduufreitass/' target="_blank" style={styleIconLk}>  
            <Image title='Instagram' src={iconInst}  id = 'inst' style={styleIc}/>
          </a>
          <a href='https://twitter.com/EduuFreitass' target="_blank" style={styleIconLk}>  
            <Image title='Twitter' src={iconTwit}  id = 'twit' style={styleIcTw}/>
          </a>
        </div>
    );
  }
}

export default Icons;
