"use client";

export default class CookiesService{
    /* 
    |-------------------------------------------------------------
    |   constructor
    |-------------------------------------------------------------
    */
        constructor(){
            // if (typeof document !== 'undefined') {
            //     this.cookiesSTR = document.cookie;
            // } else {
            //     this.cookiesSTR = ''; 
            // }
        }


    /* 
    |-------------------------------------------------------------
    |   set Method
    |-------------------------------------------------------------
    */
        setCookie(expireDateForCookieSTR){
            let cookieDataOBJ = {'lang':'en','name':'walid'} ;
            let cookieDataJSONSTR = JSON.stringify(cookieDataOBJ);
            let cookieSTR = cookieDataJSONSTR+';SameSite=Lax;expires='+expireDateForCookieSTR ;
            document.cookie = cookieSTR ;
            this.cookiesSTR = cookieSTR ;
            this.updateCookieValue( 'SS', 'Lax' );
            this.updateCookieValue( 'exp', expireDateForCookieSTR );
        }


    /* 
    |-------------------------------------------------------------
    |   get Method
    |-------------------------------------------------------------
    */
        getCookie(){
            let cookiesSTR = document.cookie ;
            return cookiesSTR ;
        }
        getCookieValue(keySTR){
            let cookiesDataJSONSTR =  this.getCookie() ;
            let cookiesDataOBJ = JSON.parse(cookiesDataJSONSTR);
            let isCookieValueExistsBOL = this.isCookieValueExists(keySTR);
           if(isCookieValueExistsBOL){
                let cookieValueSTR = cookiesDataOBJ[keySTR];
                return cookieValueSTR ;
           }else{
                return null ;
           }

        }
        isCookieExists(){
            let cookiesDataJSONSTR = this.getCookie();
            let isCookiesExistsBOL = false ;
            if( cookiesDataJSONSTR ){
                isCookiesExistsBOL = true ;
            }
            return isCookiesExistsBOL ;
        }
        isCookieValueExists(keySTR){
            let cookiesDataJSONSTR =  this.getCookie() ;
            //console.log(cookiesDataJSONSTR);
            let cookiesDataOBJ = JSON.parse(cookiesDataJSONSTR);
            let isFoiundedBOL = Object.hasOwn(cookiesDataOBJ,keySTR);
            return isFoiundedBOL ;
        }
        createCookieSTR(){
            let cookieValueJSONSTR = document.cookie ;
            let cookieValueOBJ = JSON.parse(cookieValueJSONSTR);
            let cookieSTR = cookieValueJSONSTR+';SameSite='+cookieValueOBJ['SS']+';expires='+cookieValueOBJ['exp'];
            this.cookiesSTR = cookieSTR ;
        }


    /* 
    |-------------------------------------------------------------
    |   update Method
    |-------------------------------------------------------------
    */
        updateCookieValue( keySTR, valueSTR ){
            let isCookieExistsBOL = this.isCookieExists(keySTR) ;
            if(isCookieExistsBOL){
                let cookiesDataJSONSTR = this.getCookie() ; 
                let cookiesDataOBJ = JSON.parse(cookiesDataJSONSTR);
                cookiesDataOBJ[keySTR] = valueSTR ;
                cookiesDataJSONSTR = JSON.stringify(cookiesDataOBJ); 
                let cookieSTR = this.cookiesSTR ;
                let cookieARR = cookieSTR.split(';') ;
                for(let index in cookieARR ){
                    let isElementStartWithBOL = cookieARR[index].startsWith('{');
                    if( isElementStartWithBOL ){
                        cookieARR[index] = cookiesDataJSONSTR ;
                    }
                }
                cookieSTR = cookieARR.join(';');
                document.cookie = cookieSTR ;
                this.cookiesSTR = cookieSTR ;
            }
        }
}