import React, { Component } from 'react';
import './style.css';
import cover from './cover.png';
import photo1 from './photo1.jpeg';
import { Image } from 'react-bootstrap';
import Icons from './icons/index';

const styleProfile = {
  transform: 'scale(1.16)',
  WebkitFilter: 'brightness(110%)',//
}

class Cover extends Component {//
 
  constructor(props) {
    super(props);
    this.state = {
      clickProfile: true,
    }
  }

  handlerClick = (event) => {
    this.setState({
      clickProfile: !this.state.clickProfile,
      clickIcon: !this.state.clickIcon,
    });
  }

  render () {
    const styleProf = (this.state.clickProfile) ? {} : styleProfile;
   
    return(      
      <div className="cover_profile">
        <Icons clkIc={!this.state.clickProfile} />
        <div className='cover'>
          <Image src={cover} fluid/>
        </div> 
        <div className='profile'>  
          <a onClick={this.handlerClick}>              
            <Image alt='Eu' src={photo1} style = {styleProf} fluid />
          </a>             
        </div>      
      </div>
    );
  }
}

export default Cover;
