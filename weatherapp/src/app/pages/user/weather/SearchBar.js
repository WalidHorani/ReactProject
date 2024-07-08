import {Row,Col,Bg,Elm} from '@/app/Components/General/Grid' ;
import Style from './weather.module.css'

import { useState } from 'react';
import { useContext } from 'react';
import { TranslationContext } from '@/app/Context/TranslationContext';

export default function SearchBar({setCityStateSTR, searchTextStateSTR, setSearchTextStateSTR,validationServiceOBJ}) {
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
        let [ isValidCountryAndCityStateBOL, setIsValidCountryAndCityStateBOL ] = useState(true) ;
    
    /*
    |-----------------------------------------------------------------------
    |   Event Handler
    |-----------------------------------------------------------------------
    */
        function handleChangeSeacrhInput(e) {
            let newTextSTR = e.target.value ;
            setSearchTextStateSTR(newTextSTR);
        }
        function handleClickSearchCity() {
            let RegExpOBJ = new RegExp(`^[a-zA-Z'\\s]{3,20}, [a-zA-Z'\\s]{3,20}$`) ;
            let isValidCountryAndCityBOL = validationServiceOBJ.handleValidation(searchTextStateSTR, RegExpOBJ);
            if(isValidCountryAndCityBOL){
                setIsValidCountryAndCityStateBOL(true);
                setCityStateSTR(searchTextStateSTR);
            }else{
                setIsValidCountryAndCityStateBOL(false);
            }
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
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return (
            <Row >
                <Col p={{c:'12',jc:'c',ai:'c'}} >
                    <Col p={{c:'9'}} >
                        <Bg p={{c:'12', jc:'c',ai:'c'}}>
                            <Elm >
                                <input  type='text' 
                                        value={searchTextStateSTR} 
                                        onChange={(e)=>{handleChangeSeacrhInput(e)}} 
                                        placeholder={translateFunction('City')}
                                />
                            </Elm>
                            <Elm p={{c:'auto',jc:'s',ai:'c'}} >
                                <button 
                                        className={Style.searchButon}
                                        onClick={handleClickSearchCity}
                                >
                                    {translateFunction('Search')}
                                </button>
                            </Elm>
                            {!isValidCountryAndCityStateBOL && 
                                <Elm p={{c:'auto',jc:'s',ai:'c'}} >
                                    <span className={Style.validationErrorMsgLocation}>
                                        {translateFunction('Not Valid Location ex---> Country, City')}
                                    </span>
                                </Elm>
                            }
                        </Bg>
                    </Col>
                </Col> 
            </Row>
        );
}