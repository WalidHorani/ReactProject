import Row from "@/app/Components/General/Row";
import Col from "@/app/Components/General/Col";
import Bg from '@/app/Components/General/Bg' ;
import Elm from '@/app/Components/General/Elm' ;

import {useContext} from 'react';
import {TranslationContext} from '@/app/Context/TranslationContext';

export default function DateRow({dateServiceOBJ}) {
    /*
    |-----------------------------------------------------------------------
    |   External service dateService
    |-----------------------------------------------------------------------
    */
        let monthSTR = dateServiceOBJ.getMonthSTR();
        let yearINT = dateServiceOBJ.geYearINT();
    /*
    |-----------------------------------------------------------------------
    |   Context
    |-----------------------------------------------------------------------
    */
        let translateContextARR = useContext(TranslationContext) ;
        let translateFunction = translateContextARR[0] ;
    
    
    /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return (
            <Row styleOBJ={{height:'auto'}}>
                <Col >
                    <Bg p={{jc:'s',ai:'c'}}>
                        <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                            <span>{translateFunction(monthSTR)}</span>
                        </Elm>
                        <Elm p={{c:'auto',jc:'s',ai:'c'}} >
                            <span>{yearINT}</span>
                        </Elm>
                    </Bg>  
                </Col>
            </Row>
        );
}