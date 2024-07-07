export default function Col({children, p}) {
    let defaultClassSTR = 'col d-flex flex-row justify-content-center align-items-center';
    let isClassEditeNeededBOL = p !== undefined ;
    if( isClassEditeNeededBOL ){
        for (let elm in p){
            if( elm === 'c' ){
                defaultClassSTR = defaultClassSTR.replace("col", "col-"+p[elm] );
            }else if( elm === 'fr' ){
                if( p[elm] === 'n' ){
                    defaultClassSTR = defaultClassSTR.replace("flex-row", "flex-column");
                }
            }else if( elm === 'jc' ){
                if( p[elm] === 's' ){
                    defaultClassSTR = defaultClassSTR.replace("justify-content-center", "justify-content-start");
                }else if( p[elm] === 'e' ){
                    defaultClassSTR = defaultClassSTR.replace("justify-content-center", "justify-content-end");
                }
            }else if( elm === 'ai' ){
                if( p[elm] === 's' ){
                    defaultClassSTR = defaultClassSTR.replace("align-items-center", "align-items-start");
                }else if( p[elm] === 'e' ){
                    defaultClassSTR = defaultClassSTR.replace("align-items-center", "align-items-end");
                }
            }
        }
    }
    p = defaultClassSTR ;
    /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return (
            <div className={p}>
                {children}
            </div>
        );
}