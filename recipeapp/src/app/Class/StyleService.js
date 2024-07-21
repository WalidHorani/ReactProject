"use client";

export default class StyleService{
    /* 
    |-------------------------------------------------------------
    |   constructor
    |-------------------------------------------------------------
    */
        constructor(){
            //
        }

        
    /* 
    |-------------------------------------------------------------
    |   Create
    |-------------------------------------------------------------
    */
        createStyleObject() {
            // console.log('no');
        }
    

    /* 
    |-------------------------------------------------------------
    |   Read
    |-------------------------------------------------------------
    */ 
   

    /* 
    |-------------------------------------------------------------
    |   Update
    |-------------------------------------------------------------
    */ 
        updateStyleObject(payloadForUpdateStyleObjectOBJ) {
            //payloadForUpdateStyleObjectOBJ={'s':s,'defaultStyleOBJ':defaultStyleOBJ} ;
            let {s,defaultStyleOBJ} = payloadForUpdateStyleObjectOBJ ;
            let payloadForIsCoustemStyleNeeded = {'s':s} ;
            let isCoustemStyleNeededBOL = this.isCoustemStyleNeeded(payloadForIsCoustemStyleNeeded);
            if(isCoustemStyleNeededBOL){
                for(let stySTR in s){
                    switch(stySTR){
                        case 'm':
                            defaultStyleOBJ['margin'] = s[stySTR];
                            break;
                        case 'mb':
                            defaultStyleOBJ['marginBottom'] = s[stySTR];
                            break;
                        case 'mt':
                            defaultStyleOBJ['marginTop'] = s[stySTR];
                            break;
                        case 'mr':
                            defaultStyleOBJ['marginRight'] = s[stySTR];
                            break;
                        case 'ml':
                            defaultStyleOBJ['marginLeft'] = s[stySTR];
                            break;
                        case 'p':
                            defaultStyleOBJ['padding'] = s[stySTR];
                            break;
                        case 'pb':
                            defaultStyleOBJ['paddingBottom'] = s[stySTR];
                            break;
                        case 'pt':
                            defaultStyleOBJ['paddingTop'] = s[stySTR];
                            break;
                        case 'pr':
                            defaultStyleOBJ['paddingRight'] = s[stySTR];
                            break;
                        case 'pl':
                            defaultStyleOBJ['paddingLeft'] = s[stySTR];
                            break;
                        case 'bc':
                            defaultStyleOBJ['backgroundColor'] = s[stySTR];
                            break;
                        case 'bi':
                            defaultStyleOBJ['backgroundImage'] = s[stySTR];
                            break;
                        case 'br':
                            defaultStyleOBJ['borderRadius'] = s[stySTR];
                            break;
                        case 'bs':
                            defaultStyleOBJ['boxShadow'] = s[stySTR];
                            break;
                        case 'h':
                            defaultStyleOBJ['height'] = s[stySTR];
                            break;
                        case 'w':
                            defaultStyleOBJ['width'] = s[stySTR];
                            break;
                        case 'o':
                            defaultStyleOBJ['overflow'] = s[stySTR];
                            break;
                        case 'c':
                            defaultStyleOBJ['color'] = s[stySTR];
                        case 'fw':
                            if( s[stySTR] === 'w' ){
                                defaultStyleOBJ['flexWrap'] = 'wrap';
                            }else if( s[stySTR] === 'n' ){
                                defaultStyleOBJ['flexWrap'] = 'nowrap';
                            }
                        default :
                            defaultStyleOBJ[stySTR] = s[stySTR] ;
                            break;
                    }
                }
                return defaultStyleOBJ;
            }else{
                return defaultStyleOBJ ;
            }
        }
        updateBootStrapClass(payloadForUpdateBootStrapClassOBJ) {
            //payloadForUpdateBootStrapClassOBJ = {'p':p,'defaultClassSTR':defaultClassSTR} ;
            let {p,defaultClassSTR} = payloadForUpdateBootStrapClassOBJ ;
            let payloadForIsCoustemBootstrapNeededOBJ = {'p':p} ;
            let isCoustemBootstrapNeededBOL = this.isCoustemBootstrapNeeded(payloadForIsCoustemBootstrapNeededOBJ);
            if(isCoustemBootstrapNeededBOL){
                for(let stySTR in p){
                    switch(stySTR){
                        case 'c':
                            defaultClassSTR = defaultClassSTR.replace("col", "col-"+p[stySTR] );
                            break;
                        case 'fr':
                            defaultClassSTR = p[stySTR] === 'n' ? defaultClassSTR.replace("flex-row", "flex-column"):defaultClassSTR; 
                            break;
                        case 'jc':
                            if(p[stySTR] === 's'){
                                defaultClassSTR = defaultClassSTR.replace("justify-content-center", "justify-content-start");
                            }else if(p[stySTR] === 'e'){
                                defaultClassSTR = defaultClassSTR.replace("justify-content-center", "justify-content-end");
                            }
                            break;
                        case 'ai':
                            if(p[stySTR] === 's'){
                                defaultClassSTR = defaultClassSTR.replace("align-items-center", "align-items-start");
                            }else if(p[stySTR] === 'e'){
                                defaultClassSTR = defaultClassSTR.replace("align-items-center", "align-items-start");
                            }
                            break;
                        case 'ta':
                            if(p[stySTR] === 'c'){
                                defaultClassSTR = defaultClassSTR.replace("text-start", "text-center");
                            }else if(p[stySTR] === 'e'){
                                defaultClassSTR = defaultClassSTR.replace("text-start", "text-end");
                            }
                            break;
                        default :
                            defaultClassSTR += ' '+  p[stySTR] ;
                    }
                }
                return defaultClassSTR;
            }else{
                return defaultClassSTR ;
            }
        }
    

    /* 
    |-------------------------------------------------------------
    |   delete
    |-------------------------------------------------------------
    */
    

    /* 
    |-------------------------------------------------------------
    |   check
    |-------------------------------------------------------------
    */
        isCoustemStyleNeeded(payloadForIsCoustemStyleNeeded){
            //payloadForIsCoustemStyleNeeded = {'s':s} 
            let {s} = payloadForIsCoustemStyleNeeded ;
            let isCoustemStyleNeededBOL = s === null ? false :true ;
            return isCoustemStyleNeededBOL ;
        }
        isCoustemBootstrapNeeded(payloadForIsCoustemBootstrapNeededOBJ){
            // payloadForIsCoustemBootstrapNeeded = {'p':p} ;
            let {p} = payloadForIsCoustemBootstrapNeededOBJ ;
            let isCoustemBootstrapNeededBOL = p === null ? false :true ;
            return isCoustemBootstrapNeededBOL ;
        }
}