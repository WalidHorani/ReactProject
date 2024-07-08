import {Row,Col,Bg,Elm} from '@/app/Components/General/Grid' ;
import style from './weather.module.css';

import { useContext } from 'react';
import { TranslationContext } from '@/app/Context/TranslationContext';

export default function DailyDetails({forcastWetherDataStateARR,setForcastWetherDataState}) {
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
        function handleClickUpdateActiveDeteail(idINT) {
            function updateActiveDeteail(elmOBJ, lisIdINT){
                let newDataOBJ = {...elmOBJ} ;
                if( lisIdINT === idINT ){
                    newDataOBJ.isActive = !elmOBJ.isActive ;
                }
                return newDataOBJ ;
            }
            let newDataArr = forcastWetherDataStateARR.map(updateActiveDeteail);
            setForcastWetherDataState(newDataArr);
        }


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
    |   convert list to jsx element
    |-----------------------------------------------------------------------
    */
        function convertListToElement(elmOBJ) {
            return(
                <div key={elmOBJ.idINT}  onClick={()=>{handleClickUpdateActiveDeteail(elmOBJ.idINT)}} style={{width:'100%',marginBottom:'1vh'}}>
                    <Col p={{c:'12',fr:'n',jc:'c',ai:'s'}}>
                        <Col p={{c:'12',jc:'c',ai:'c'}}>
                            <Bg p={{c:'12',jc:'s',ai:'c'}} s={{bc:'white',c:'black',br:'10px 10px'}}>
                                <Elm p={{c:'1',jc:'s',ai:'c'}}>
                                    <img className='img-fluid' src={`/weatherImges/${elmOBJ.weather[0].icon}.png`}  style={{width:'100%'}}/>
                                </Elm>
                                <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                                    <span>{elmOBJ.dt_txt}</span>
                                </Elm>
                                <Elm></Elm>
                                <Elm p={{c:'auto',jc:'e',ai:'c'}}>
                                    <span>{translateFunction(elmOBJ.weather[0].description)}</span>
                                </Elm>
                                <Elm p={{c:'auto',jc:'e',ai:'c'}}>
                                    <span>{Math.round(elmOBJ.main.temp_max)}°C / {Math.round(elmOBJ.main.temp_min)}°C</span>
                                </Elm>
                            </Bg>
                        </Col>
                        {elmOBJ.isActive &&
                            <Col p={{c:'12',jc:'s',ai:'c'}}>
                                <Col p={{c:'6',fr:'n',jc:'c',ai:'s'}}>
                                    <Col p={{c:'12',jc:'s',ai:'c'}}>
                                        <Elm p={{c:'6',jc:'s',ai:'c'}}>
                                            <span>{translateFunction('Pressure')} :</span>
                                        </Elm>
                                        <Elm p={{c:'6',jc:'e',ai:'c'}}>
                                            <span className={style.orange}>{elmOBJ.main.pressure} {translateFunction('hPa')}</span>
                                        </Elm>
                                    </Col>
                                    <Col p={{c:'12',jc:'s',ai:'c'}}>
                                        <Elm p={{c:'6',jc:'s',ai:'c'}}>
                                            <span>{translateFunction('Clouds')} :</span>
                                        </Elm>
                                        <Elm p={{c:'6',jc:'e',ai:'c'}}>
                                            <span className={style.orange}>{elmOBJ.clouds.all}%</span>
                                        </Elm>
                                    </Col>
                                    <Col p={{c:'12',jc:'s',ai:'c'}}>
                                        <Elm p={{c:'6',jc:'s',ai:'c'}}>
                                            <span>{translateFunction('Sea Level')} :</span>
                                        </Elm>
                                        <Elm p={{c:'6',jc:'e',ai:'c'}}>
                                            <span className={style.orange}>{elmOBJ.main.sea_level} {translateFunction('m')}</span>
                                        </Elm>
                                    </Col>
                                </Col>
                                <Col p={{c:'6',fr:'n',jc:'c',ai:'s'}}>
                                    <Col p={{c:'12',jc:'e',ai:'c'}}>
                                        <Elm p={{c:'6',jc:'s',ai:'c'}}>
                                            <span>{translateFunction('Humidity')} :</span>
                                        </Elm>
                                        <Elm p={{c:'6',jc:'e',ai:'c'}}>
                                            <span className={style.orange}>{elmOBJ.main.humidity}%</span>
                                        </Elm>
                                    </Col>
                                    <Col p={{c:'12',jc:'e',ai:'c'}}>
                                        <Elm p={{c:'6',jc:'s',ai:'c'}}>
                                            <span>{translateFunction('Wind Speed')} :</span>
                                        </Elm>
                                        <Elm p={{c:'6',jc:'e',ai:'c'}}>
                                            <span className={style.orange}>{elmOBJ.wind.speed} {translateFunction('m/s')}</span>
                                        </Elm>
                                    </Col>
                                    <Col p={{c:'12',jc:'e',ai:'c'}}>
                                        <Elm p={{c:'6',jc:'s',ai:'c'}}>
                                            <span>{translateFunction('Feels like')} :</span>
                                        </Elm>
                                        <Elm p={{c:'6',jc:'e',ai:'c'}}>
                                            <span className={style.orange}>{Math.round(elmOBJ.main.feels_like)}°C</span>
                                        </Elm>
                                    </Col>
                                </Col>
                            </Col>
                        }
                    </Col>
                </div>
            );
        }
        let elementJSX = forcastWetherDataStateARR.map(convertListToElement) ;

        
    /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return (
            <>
                <Row >
                    <Col p={{c:'12',jc:'c',ai:'c'}}>
                        <Bg p={{c:'9'}} s={{c:'white'}}>
                            <Col p={{c:'12',jc:'s',ai:'c'}}>
                                <Elm p={{c:'auto'}}>
                                    <h3>{translateFunction('Three Hours Forecast')}</h3>
                                </Elm>
                            </Col>
                        </Bg>
                    </Col>
                </Row>
                <Row >
                    <Col p={{c:'12',jc:'c',ai:'c'}}>
                        <Bg p={{c:'9',fr:'n',jc:'c',ai:'s'}} s={{c:'white'}}>

                            {elementJSX}

                        </Bg>
                    </Col>
                </Row>
            </>
        );
}