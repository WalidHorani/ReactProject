import style from './Row.module.css';
import {useContext} from 'react';
import {TranslationContext} from '@/app/Context/TranslationContext';

export default function Row({children,styleOBJ={},addClassSTR=''}) {

    let classNameGroupSTR =  'row ' + style.mainRow + ' ' + addClassSTR ;
    let translateContextARR = useContext(TranslationContext) ;
    let cookieStateSTR = translateContextARR[1] ;
    /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return (
            <div className={classNameGroupSTR} style={styleOBJ} dir={ cookieStateSTR === 'en'?'ltr':'rtl'} >
                {children}
            </div>
        );
}