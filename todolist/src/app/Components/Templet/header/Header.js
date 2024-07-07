import { Row, Col, Bg, Elm} from "../../General/Grid"; 

import { useState,useContext } from 'react';
import {TranslationContext} from '@/app/Context/TranslationContext';

export default function Header({cookieStateSTR,setCookieState,cookiesServiceOBJ}) {
    /*
    |-----------------------------------------------------------------------
    |   defining state
    |-----------------------------------------------------------------------
    */
        let [ hoverdStateSTR , setHoverdState ] = useState('default');

        let isHoverMyNameBOL = hoverdStateSTR === 'myName' ;
        let isHoverWork = hoverdStateSTR === 'work' ;
        let isHoverAbout = hoverdStateSTR === 'about' ;
        let isHoverContact = hoverdStateSTR === 'contact' ;
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
        function handleHoverLeave() {
            setHoverdState('default');
        }
        function handleHoverMyName() {
            setHoverdState('myName');
        }
        function handleHoverWork() {
            setHoverdState('work');
        }
        function handleHoverAbout() {
            setHoverdState('about');
        }
        function handleHoverContact() {
            setHoverdState('contact');
        }
        function handleChangeSelectLang(e){
            let newLangValueSTR = e.target.value ;
            cookiesServiceOBJ.updateCookieValue( 'lang', newLangValueSTR );
            setCookieState(newLangValueSTR);
        }
    /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return (
            <Row s={{bc:'white',c:'black'}}>
                <Col p={{c:'6'}}>
                    <Bg p={{jc:'s',ai:'c'}}>
                        <Elm p={{jc:'s',ai:'c'}} >
                            {!isHoverMyNameBOL && <span onPointerEnter={handleHoverMyName} >{translateFunction('©Code By Walid')}</span>}
                            {isHoverMyNameBOL && <span onPointerLeave={handleHoverLeave} >{translateFunction('©Walid Horani')}</span> }
                        </Elm>
                    </Bg>
                </Col>
                <Col p={{c:'6'}}>
                    <Bg p={{jc:'e',ai:'c'}} >
                        <Elm p={{c:'auto',jc:'e',ai:'c'}}>
                            <span onPointerEnter={handleHoverWork} onPointerLeave={handleHoverLeave} >
                                {translateFunction('My Work')}
                            </span>
                        </Elm>
                        <Elm p={{c:'auto',jc:'e',ai:'c'}}>
                            <span onPointerEnter={handleHoverAbout} onPointerLeave={handleHoverLeave}>
                                {translateFunction('About Us')}
                            </span>
                        </Elm>
                        <Elm p={{c:'auto',jc:'e',ai:'c'}}>
                            <span onPointerEnter={handleHoverContact} onPointerLeave={handleHoverLeave}>
                                {translateFunction('Contact Us')}
                            </span>
                        </Elm>
                        <Elm p={{c:'auto',jc:'e',ai:'c'}}>
                            <select onChange={handleChangeSelectLang} name='lang' value= { cookieStateSTR } >
                                <option value='en'> {translateFunction('en')} </option>
                                <option value='ar'> {translateFunction('ar')} </option>
                            </select>
                        </Elm>
                    </Bg>
                </Col>
            </Row>
        );
}