export default function Bg({children,p,s}) {
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
    let defaultStyleOBJ ={backgroundColor:'',width:'100%',padding:'0vh 0%',borderRadius:'0px 0px'};
    let isStyleEditeNeededBOL = s !== undefined ;
    if( isStyleEditeNeededBOL ){
        for( let sty in s ){
            if( sty === 'bc'){
                defaultStyleOBJ.backgroundColor = s[sty] ;
            }else if( sty === 'w' ){
                defaultStyleOBJ.width = s[sty] ;
            }else if( sty === 'p' ){
                defaultStyleOBJ.padding = s[sty] ;
            }else if( sty === 'br' ){
                defaultStyleOBJ.borderRadius = s[sty] ;
            }
        }
    }
    /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return (
            <div className={p} style={defaultStyleOBJ}>
                {children}
            </div>
        );
}