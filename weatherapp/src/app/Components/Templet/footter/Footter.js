import { Row, Col, Bg, Elm} from "../../General/Grid"; 

import { useState } from 'react';
import {useContext} from 'react';
import {TranslationContext} from '@/app/Context/TranslationContext';
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
            <Row s={{bc:'white',c:'black',m:'0px'}}>
                <Col p={{c:'12',fr:'n'}}>
                    <Bg p={{c:'12',ai:'s'}}>
                        <Col p={{c:'4',ai:'s'}}>
                            <Bg p={{fr:'n',jc:'c',ai:'s'}}>
                                <Elm p={{jc:'s',ai:'c'}}><h2>{translateFunction('My Work')}</h2></Elm>
                                <Elm p={{jc:'s',ai:'c'}}><span>{translateFunction('Back End Laravel')}</span></Elm>
                                <Elm p={{jc:'s',ai:'c'}}><span>{translateFunction('Front End React')}</span></Elm>
                                <Elm p={{jc:'s',ai:'c'}}><span>{translateFunction('Full Stack')}</span></Elm>
                            </Bg>
                        </Col>
                        <Col p={{c:'4',ai:'s'}}>
                            <Bg p={{fr:'n',jc:'c',ai:'s'}}>
                                <Elm p={{jc:'s',ai:'c'}}><h2>{translateFunction('About Us')}</h2></Elm>
                                <Elm p={{jc:'s',ai:'c'}}><span>{translateFunction('About Walid')}</span></Elm>
                                <Elm p={{jc:'s',ai:'c'}}><span>{translateFunction('GitHup')}</span></Elm>
                                <Elm p={{jc:'s',ai:'c'}}><span>{translateFunction('Linkedin')}</span></Elm>
                            </Bg>
                        </Col>
                        <Col p={{c:'4',ai:'s'}}>
                            <Bg p={{c:'12',fr:'n',jc:'c',ai:'s'}}>
                                <Elm p={{jc:'s',ai:'c'}}><h2>{translateFunction('STAY UPDATE')}</h2></Elm>
                                <Elm p={{jc:'s',ai:'c'}}><p>{translateFunction('stay update with latest project by sending your email')}</p></Elm>
                                <Elm p={{c:'10',jc:'s',ai:'c'}}>
                                    <input onChange={handleChangeInputEmail} type='email' placeholder={translateFunction('exm@gmail.com')} />
                                </Elm>
                                {!isValidStateBOL &&
                                    <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                                        <p>{translateFunction('Not Valid Email Try Again')}</p>
                                    </Elm>
                                }
                                <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                                    <button 
                                        className='footerSendBtn'
                                        onClick={handleClickButtonSendEmail}>
                                            <i className="bi bi-envelope-arrow-up"></i>{translateFunction('Send Email')}
                                    </button>
                                </Elm>
                            </Bg>
                        </Col>
                    </Bg>
                    <Bg p={{c:'12',ai:'s'}}>
                        <Col p={{c:'6',jc:'s',ai:'c'}}>
                            <Bg p={{jc:'s',ai:'c'}}>
                                <Elm p={{jc:'s',ai:'c'}}><p>{translateFunction('©2022 Walid Horani. All Rights Reserved.')}</p></Elm>
                            </Bg>
                        </Col>
                        <Col p={{c:'6',jc:'e',ai:'c'}}>
                            <Bg p={{c:'6',jc:'e',ai:'c'}}>
                                <Elm p={{c:'auto',jc:'e',ai:'c'}}>
                                    <a href="https://github.com/WalidHorani"><i className="bi bi-github"></i></a>
                                </Elm>
                                <Elm p={{c:'auto',jc:'e',ai:'c'}}><i className="bi bi-linkedin"></i></Elm>
                                <Elm p={{c:'auto',jc:'e',ai:'c'}}><i className="bi bi-twitter-x"></i></Elm>
                            </Bg>
                        </Col>
                    </Bg>
                </Col>                    
            </Row>
        );
}