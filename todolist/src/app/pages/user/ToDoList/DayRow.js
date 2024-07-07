import Row from "@/app/Components/General/Row";
import Col from "@/app/Components/General/Col";
import Bg from '@/app/Components/General/Bg' ;
import Elm from '@/app/Components/General/Elm' ;
import {useContext} from 'react';
import {TranslationContext} from '@/app/Context/TranslationContext';
export default function DateRow({dateServiceOBJ}) {
    /*
    |-----------------------------------------------------------------------
    |   using External service dateService
    |-----------------------------------------------------------------------
    */
        let dayStrDayOfMontIntARR = dateServiceOBJ.getDayStrAndDayOfMonth();
    /*
    |-----------------------------------------------------------------------
    |   Context
    |-----------------------------------------------------------------------
    */
        let translateContextARR = useContext(TranslationContext) ;
        let translateFunction = translateContextARR[0] ;

    /*
    |-----------------------------------------------------------------------
    |   JSX Element
    |-----------------------------------------------------------------------
    */
        function convertArrayToElements(element){
            return(
                <Col key={element.id} p={{c:'auto',fr:'n',jc:'c',ai:'c'}}>
                    <Elm p={{c:'auto',jc:'c',ai:'c'}}>
                        <span style={{ color: element.isCurrentDayBOL ? '#ff7900' : 'white' }}>
                            {translateFunction(element.daySTR)}
                        </span>
                    </Elm>
                    <Elm p={{c:'auto',jc:'c',ai:'c'}}>
                        <span style={{ color: element.isCurrentDayBOL ? '#ff7900' : 'white' }}>
                            {element.dayOfMonthINT}
                        </span>
                    </Elm>
                </Col>
            );
        }
        let daysJsxElements = dayStrDayOfMontIntARR.map(convertArrayToElements);
    
    /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return (
                <Row styleOBJ={{height:'auto'}}>
                    <Col>
                        <Bg p={{jc:'s',ai:'c'}}>
                            {daysJsxElements}
                        </Bg>
                    </Col>
                </Row>
        );
}