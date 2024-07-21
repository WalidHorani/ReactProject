import { Row, Col, Bg, Elm} from "../../General/Grid"; 

import { useState } from 'react';
import {useContext} from 'react';
import {TranslationContext} from '@/app/Context/TranslationContext';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiFolderUser } from "react-icons/pi";
import { BiMailSend } from "react-icons/bi";
export default function Footter({validationServiceOBJ}) {
    /*
    |-----------------------------------------------------------------------
    |   State
    |-----------------------------------------------------------------------
    */
        let [ emailStateSTR, setEmailState ] = useState('');
        let [isValidStateBOL, setIsValidState] = useState(true);
    
    /*
    |-----------------------------------------------------------------------
    |   Context
    |-----------------------------------------------------------------------
    */
        let translateContextARR = useContext(TranslationContext) ;
        let translateFunction = translateContextARR[0] ;
    /*
    |-----------------------------------------------------------------------
    |   Event Handler
    |-----------------------------------------------------------------------
    */
        function handleChangeInputEmail(e){
             let emailSTR = e.target.value;
             setEmailState(emailSTR);
        }
        function handleClickButtonSendEmail(){
            let isValidEmailBOL = validationServiceOBJ.handleValidationEmail(emailStateSTR,1,50);
            if(isValidEmailBOL){
                setIsValidState(true);
                setEmailState('');
            }else{
                setIsValidState(false);
            }
        }
    /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return(
            <>
                <Row s={{bc:'black',c:'white',m:'0px'}} >
                    <Col p={{c:'12 col-md-4',fr:'n'}} >
                        <h2>{translateFunction('My Work')}</h2>
                        <span>{translateFunction('Back End Laravel')}</span>
                        <span>{translateFunction('Front End React')}</span>
                        <span>{translateFunction('Full Stack')}</span>
                    </Col>
                    <Col p={{c:'12 col-md-4',fr:'n'}} >
                        <h2>{translateFunction('About Us')}</h2>
                        <span>{translateFunction('About Walid')}</span>
                        <span>{translateFunction('GitHup')}</span>
                        <span>{translateFunction('Linkedin')}</span>
                    </Col>
                    <Col p={{c:'12 col-md-4',fr:'n',jc:'c',ai:'c'}} >
                        <Elm>
                            <h2>{translateFunction('STAY UPDATE')}</h2>
                        </Elm>
                        <Elm p={{jc:'s'}}>
                            <p>{translateFunction('stay update with latest project by sending your email')}</p>
                        </Elm>
                        <Elm p={{jc:'s'}}>
                            <input onChange={handleChangeInputEmail} type='email' placeholder={translateFunction('exm@gmail.com')} />
                            <button 
                                className='footerSendBtn'
                                onClick={handleClickButtonSendEmail}
                            >
                                <BiMailSend />{translateFunction('Send Email')}
                            </button>
                        </Elm>
                    {!isValidStateBOL && <p>{translateFunction('Not Valid Email Try Again')}</p> }
                    </Col>
                </Row>
                <Row s={{bc:'black',c:'white',m:'0px'}} >
                    <Col p={{c:'12 col-md-6'}}>
                        <p>{translateFunction('©2022 Walid Horani. All Rights Reserved.')}</p>
                    </Col>
                    <Col p={{c:'12 col-md-6',}}>
                        <a href="https://github.com/WalidHorani"><FaGithub /></a>
                        <a href=""><FaLinkedin /></a>
                        <a href=""><PiFolderUser /></a>
                    </Col>
                </Row>
            </>
        );
}