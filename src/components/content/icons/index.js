import React, { Component } from 'react';
import './style.css';
import iconInst from './icon_instagram.png';
import iconTwit from './icon_twitter.png';
import iconZap from './icon_zap.png';
import iconGit from './icon_github.png';
import { Image } from 'react-bootstrap';

class Icons extends Component {//
 
  constructor(props) {
    super(props);
  }
  
  render () {
    return(
        <div className='icons-content'>
          <a href='https://api.whatsapp.com/send?phone=5581981062016' target="_blank" >
            <Image title="WhatsApp"  src={iconZap} id = 'zap-content' />
          </a>
          <a href='https://www.instagram.com/duduufreitass/' target="_blank">  
            <Image title='Instagram' src={iconInst}  id = 'inst-content' />
          </a>
          <a href='https://twitter.com/EduuFreitass' target="_blank" >  
            <Image title='Twitter' src={iconTwit}  id = 'twit-content' />
          </a>
          <a href='https://github.com/EduardoFreit/' target="_blank" >  
            <Image title='Twitter' src={iconGit}  id = 'twit-content' />
          </a>
        </div>
    );
  }
}

export default Icons;
