import React, { Component } from 'react';
import './style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Profile from './profile_Eu.png';
import Icons from './icons/index';
import { Image } from 'react-bootstrap';
import { Jumbotron, Container} from 'react-bootstrap'

var stylePage_init = {
  'animation': 'none',
}

var aux = 0;

class Div extends Component {
    constructor(props){
        super(props);
        this.state = {
            stylePage: {
                'animation': 'drag-page 0.4s linear 0.7s forwards',
            }
        }           
    }

    componentDidUpdate(){
        stylePage_init = {
            'animation': 'no-drag-page 0.4s linear forwards',
        }
    }

    render(){
        const stylePg = this.props.btClick ? stylePage_init : this.state.stylePage;
        return (            
            <div className='pageContent' style={stylePg}>
                <div className='profile-pic'>
                    <Image src={Profile}/>      
                </div>
                <div className='perfil'>
                    <Jumbotron id='perfil-jumb' fluid>
                        <Container>
                            <div className='nome-apresent'>
                                <h1><strong>Eduardo Freitas</strong></h1>
                                <h5>Gmail:&nbsp;&nbsp;<a href="mailto:webmaster@example.com">lepf@discente.ifpe.edu.br</a></h5>                     
                                <p>
                                    Estudante em Analise e Desenvolvimento de Sistema,
                                    no Instituto Federal de Pernambuco - Campus Recife.                            
                                </p>
                            </div>
                            <div className='experencia'>
                                <h4><strong>Experiências:</strong></h4>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>HTML/CSS</li>
                                    <li>NodeJs</li>
                                    <li>ReactJs</li>
                                    <li>C/C++</li>
                                    <li>SQL(Oracle)</li>
                                    <li>R</li>
                                    <li>Huskell</li>
                                    <li>Java</li>
                                </ul>
                            </div>
                            <div className='icon-social'>
                                <Icons id='ixon'></Icons>
                            </div>
                        </Container>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

export default Div;