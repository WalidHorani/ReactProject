import {Row,Col,Bg,Elm} from '@/app/Components/General/Grid' ;
import style from './weather.module.css' ;


import { useEffect } from 'react';
import { useContext } from 'react';
import { TranslationContext } from '@/app/Context/TranslationContext';

export default function SearchBar( {cuurentWetherDataStateOBJ,locationInforamtionStateOBJ }) {
    /*
    |-----------------------------------------------------------------------
    |   init value for state
    |-----------------------------------------------------------------------
    */
        //

        
    /*
    |-----------------------------------------------------------------------
    |   defining state
    |-----------------------------------------------------------------------
    */
        //
    
    /*
    |-----------------------------------------------------------------------
    |   Event Handler
    |-----------------------------------------------------------------------
    */
        //


    /*
    |-----------------------------------------------------------------------
    |   define effect
    |-----------------------------------------------------------------------
    */
        //

    
    /*
    |-----------------------------------------------------------------------
    |   effect function
    |-----------------------------------------------------------------------
    */
        //
    


    /*
    |-----------------------------------------------------------------------
    |   use Context
    |-----------------------------------------------------------------------
    */
        //use context
        let translateContextARR = useContext(TranslationContext) ;

        //define variable dependin in context
        let translateFunction = translateContextARR[0] ;

    /*
    |-----------------------------------------------------------------------
    |   context Function
    |-----------------------------------------------------------------------
    */
        //

        
    /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return (
            <Row s={{o:'unset'}}>
                <Col p={{c:'12',jc:'c',ai:'c'}} s={{o:'unset'}}>
                    <Bg p={{c:'6'}} s={{bc:'white',p:'1vh 2vw', br:'20px 20px',o:'unset',bs:'1vh -0.5vh 10px 0px rgba(255, 255, 255, 0.5)'}}>
                        <Col p={{c:'12',fr:'n'}}>
                            <Col p={{c:'12'}}>
                                <Col p={{fr:'n',jc:'c',ai:'s'}}>
                                    <Elm p={{c:'auto'}}>
                                        <h4>{locationInforamtionStateOBJ.data[0].city}</h4>
                                    </Elm>
                                    <Elm p={{c:'auto'}}> 
                                        <span>{translateFunction(cuurentWetherDataStateOBJ.weather[0].description)}</span>
                                    </Elm>
                                </Col>
                                <Col p={{jc:'c',ai:'c'}}>
                                    <Elm p={{c:'6'}}>
                                        {/* <i className={"bi bi-cloud "+style.mainIcon}></i> */}
                                        <img className="img-fluid" src={`/weatherImges/${cuurentWetherDataStateOBJ.weather[0].icon}.png`} style={{width:'100%'}}/>
                                    </Elm>
                                </Col>
                            </Col>
                            <Col p={{c:'12'}}>
                                <Col  p={{jc:'s',ai:'s'}}>
                                    <Elm p={{c:'auto'}}>
                                        <h1 className={style.tempTitle}>{Math.round(cuurentWetherDataStateOBJ.main.temp)}°C</h1>
                                    </Elm>
                                </Col>
                                <Col  p={{fr:'n',jc:'c',ai:'s'}}>
                                    <Col p={{c:'12',jc:'s',ai:'c'}}> 
                                        <Elm p={{c:'auto'}}>
                                            <span>{translateFunction('details')}</span>
                                        </Elm>
                                    </Col>
                                    <Col p={{c:'12',fr:'n',jc:'c',ai:'s'}}>
                                        <Col p={{c:'12',jc:'s',ai:'c'}}>
                                            <Col p={{c:'6',jc:'s',ai:'c'}}>
                                                <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                                                    <span>{translateFunction('Feels like')}</span>
                                                </Elm>
                                            </Col>
                                            <Col p={{c:'6',jc:'e',ai:'c'}}>
                                                <Elm p={{c:'auto'}}>
                                                    <span>{Math.round(cuurentWetherDataStateOBJ.main.feels_like)}°C</span>
                                                </Elm>
                                            </Col>
                                        </Col>
                                        <Col p={{c:'12',jc:'s',ai:'c'}}>
                                            <Col p={{c:'6',jc:'s',ai:'c'}}>
                                                <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                                                    <span>{translateFunction('Wind')}</span>
                                                </Elm>
                                            </Col>
                                            <Col p={{c:'6',jc:'e',ai:'c'}}>
                                                <Elm p={{c:'auto'}}>
                                                    <span>{cuurentWetherDataStateOBJ.wind.speed} {translateFunction('m/s')}</span>
                                                </Elm>
                                            </Col>
                                        </Col>
                                        <Col p={{c:'12',jc:'s',ai:'c'}}>
                                            <Col p={{c:'6',jc:'s',ai:'c'}}>
                                                <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                                                    <span>{translateFunction('Humidity')}</span>
                                                </Elm>
                                            </Col>
                                            <Col p={{c:'6',jc:'e',ai:'c'}}>
                                                <Elm p={{c:'auto',jc:'e',ai:'c'}}>
                                                    <span>{cuurentWetherDataStateOBJ.main.humidity}%</span>
                                                </Elm>
                                            </Col>
                                        </Col>
                                        <Col p={{c:'12',jc:'s',ai:'c'}}>
                                            <Col p={{c:'6',jc:'s',ai:'c'}}>
                                                <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                                                    <span>{translateFunction('Pressure')}</span>
                                                </Elm>
                                            </Col>
                                            <Col p={{c:'6',jc:'e',ai:'c'}}>
                                                <Elm p={{c:'auto'}}>
                                                    <span>{cuurentWetherDataStateOBJ.main.pressure} {translateFunction('hPa')}</span>
                                                </Elm>
                                            </Col>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                        </Col>
                    </Bg>
                </Col>
            </Row>
        );
}