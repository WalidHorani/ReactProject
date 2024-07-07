 "use client";
import Footter from '@/app/Components/Templet/footter/Footter';
import Header from '@/app/Components/Templet/header/Header';
import {Container} from '@/app/Components/General/Grid';

import SearchBar from './SearchBar';
import Summery from './Summery';
import DailyDetails from './DailyDetails'

import CookiesService from '@/app/Class/CookiesService';
import ValidationService from '@/app/Class/ValidationService';
import DateService from '@/app/Class/DateService';
import StyleService from '@/app/Class/StyleService';

import { useState,useEffect } from 'react';

import { StyleServiceContext } from '@/app/Context/StyleServiceContext';
import {TranslationContext} from '@/app/Context/TranslationContext';
import translation from '@/app/Lang/weather';

/*
|-----------------------------------------------------------------------
|   instantiate External Service
|-----------------------------------------------------------------------
*/ 
    let dateServiceOBJ = new DateService();
    let validationServiceOBJ = new ValidationService();
    let cookiesServiceOBJ = new CookiesService() ;
    let StyleServiceOBJ = new StyleService() ;

    export default function Weather(){
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
            let [ cookieStateSTR, setCookieState ] = useState('en') ;
            let [ cityStateSTR, setCityStateSTR ] = useState('Jordan, Irbid');
            let [ searchTextStateSTR, setSearchTextStateSTR ] =useState('Jordan, Irbid');
            let [ countryWikiDataIdStateSTR, setCountryWikiDataIdStateSTR ] = useState(null) ;
            let [ locationInforamtionStateOBJ, setLocationInforamtionStateOBJ ] = useState(null) ;
            let [ cuurentWetherDataStateOBJ, setCuurentWetherDataState ] = useState(null);
            let [ forcastWetherDataStateARR, setForcastWetherDataState ] = useState(null);

            
            let countrySTR = cityStateSTR.split(', ')[0] ;
            let citySTR = cityStateSTR.split(', ')[1];
            let latitudeINT = locationInforamtionStateOBJ === null ? null : locationInforamtionStateOBJ.data[0].latitude ;
            let longitudeINT = locationInforamtionStateOBJ === null ? null : locationInforamtionStateOBJ.data[0].longitude ;
            let isCurrentWetherDataExistsBOL = cuurentWetherDataStateOBJ !== null ? true : false ;
            let isForcasttWetherDataExistsBOL = forcastWetherDataStateARR !== null ? true : false ;

        /*
        |-----------------------------------------------------------------------
        |   define effect
        |-----------------------------------------------------------------------
        */
            useEffect(createCookies,[]);
            useEffect(setCookieLangAndSetCookieState,[]);
            useEffect(getCountryWikiDataId,[cityStateSTR]);
            useEffect(getLocation,[countryWikiDataIdStateSTR]);
            useEffect(getCurrentDataEffectFUN,[locationInforamtionStateOBJ]);
            useEffect(getForcastDataEffectFUN,[locationInforamtionStateOBJ]);

        
        /*
        |-----------------------------------------------------------------------
        |   effect function
        |-----------------------------------------------------------------------
        */
            function createCookies(){
                let isCookieExisitBOL = cookiesServiceOBJ.isCookieExists();
                if( !isCookieExisitBOL ){
                    let expireDateForCookieSTR = dateServiceOBJ.getExpireDateForCookie(0,3,0,0,0);
                    cookiesServiceOBJ.setCookie(expireDateForCookieSTR);
                }else{
                    cookiesServiceOBJ.createCookieSTR();
                }
            }
            function setCookieLangAndSetCookieState(){
                let isCookieLangExistsBOL = cookiesServiceOBJ.isCookieValueExists('lang');
                if(isCookieLangExistsBOL){
                    let cookieValueSTR = cookiesServiceOBJ.getCookieValue('lang') ;
                    setCookieState(cookieValueSTR);
                }else{
                    cookiesServiceOBJ.updateCookieValue('lang','en') ;
                    setCookieState('en');
                }
            }
            function getCountryWikiDataId() {
                let countryTimeOutIdINT;
                const urlCountry = `https://wft-geo-db.p.rapidapi.com/v1/geo/countries?namePrefix=${countrySTR}`;
                const optionsCountry = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '2db772dfd0mshe82fd2af0ba534ap19b5e3jsn7b7f9f650961',
                        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
                    }
                };
                try {
                    async function getCountryInformation(){
                        let response = await fetch(urlCountry, optionsCountry);
                        let result = await response.json();
                        let countryWikiDataIdSTR = result.data[0].wikiDataId;
                        setCountryWikiDataIdStateSTR(countryWikiDataIdSTR);
                        // console.log(result);
                        // console.log(countryWikiDataIdSTR);
                    }
                    countryTimeOutIdINT = setTimeout(getCountryInformation,1000);
                } catch (error) {
                    console.error(error);
                }
                return () => {clearTimeout(countryTimeOutIdINT); };
            }
            function getLocation(){
                let cityTimeOutIdINT;
                try {
                    async function getCityInformation(){
                        if( countryWikiDataIdStateSTR !== null ){
                            let urlCity = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=${countryWikiDataIdStateSTR}&namePrefix=${citySTR}`;
                            // console.log(urlCity);
                            let optionsCity = {
                                method: 'GET',
                                headers: {
                                    'x-rapidapi-key': '2db772dfd0mshe82fd2af0ba534ap19b5e3jsn7b7f9f650961',
                                    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
                                }
                            };
                            let response = await fetch(urlCity, optionsCity);
                            let result = await response.json();
                            setLocationInforamtionStateOBJ(result);
                            // console.log(locationInforamtionStateOBJ);
                        }
                   }
                    cityTimeOutIdINT = setTimeout(getCityInformation,1000);
                } catch (error) {
                    console.error(error);
                }
                return () => {clearTimeout(cityTimeOutIdINT);  };
            }
            function getCurrentDataEffectFUN(){
                let currentDataTimeout;
                try {
                    async function getCurrentData(){
                        if( locationInforamtionStateOBJ !== null ){
                            let apiKeySTR = '08427f14cb8c808a83143679e4a03421' ; 
                            let urlCurrentData = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeINT}&lon=${longitudeINT}&appid=${apiKeySTR}&units=metric`;
                            let optionsCurrentDataOBJ = {
                                method: 'GET',
                            };
                            let response = await fetch(urlCurrentData, optionsCurrentDataOBJ);
                            let result = await response.json();
                            setCuurentWetherDataState(result);
                            //console.log(result);
                        }
                   }
                    currentDataTimeout = setTimeout(getCurrentData,1000);
                } catch (error) {
                    console.error(error);
                }
                return () => {clearTimeout(currentDataTimeout);  };
            }
            function getForcastDataEffectFUN(){
                let forcastDataTimeoutINT;
                try {
                    async function getForcastData(){
                        if( locationInforamtionStateOBJ !== null ){
                            let apiKeySTR = '08427f14cb8c808a83143679e4a03421' ; 
                            let urlForcastDataSTR = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitudeINT}&lon=${longitudeINT}&appid=${apiKeySTR}&units=metric`;
                            let optionsForcastDataOBJ = {
                                method: 'GET',
                            };
                            let response = await fetch(urlForcastDataSTR, optionsForcastDataOBJ);
                            let result = await response.json();
                            function editeElement( elementOBJ, indexINT ){
                                elementOBJ.idINT = indexINT ;
                                elementOBJ.isActive = false ;
                                return elementOBJ;
                            }
                            let forcastDataARR = result.list.map(editeElement);
                            setForcastWetherDataState(forcastDataARR);
                        }
                   }
                    forcastDataTimeoutINT = setTimeout(getForcastData,1000);
                } catch (error) {
                    console.error(error);
                }
                return () => {clearTimeout(forcastDataTimeoutINT);  };
            }
        

        /*
        |-----------------------------------------------------------------------
        |   context Function
        |-----------------------------------------------------------------------
        */
            function translate(key){
                return translation[cookieStateSTR][key] ;
            }

            
        /*
        |-----------------------------------------------------------------------
        |   Return JSX
        |-----------------------------------------------------------------------
        */
            return (
                <Container >
                    <TranslationContext.Provider value={[translate,cookieStateSTR]}>
                        <StyleServiceContext.Provider value={StyleServiceOBJ}>

                            <Header cookieStateSTR={cookieStateSTR}
                                setCookieState={setCookieState}
                                cookiesServiceOBJ={cookiesServiceOBJ}
                            />
                            
                            <SearchBar 
                                cityStateSTR={cityStateSTR}
                                setCityStateSTR={setCityStateSTR}
                                searchTextStateSTR={searchTextStateSTR}
                                setSearchTextStateSTR = {setSearchTextStateSTR}
                                validationServiceOBJ={validationServiceOBJ}
                            />
                            {isCurrentWetherDataExistsBOL && 
                                <Summery 
                                    isCurrentWetherDataExistsBOL={isCurrentWetherDataExistsBOL}
                                    cuurentWetherDataStateOBJ = {cuurentWetherDataStateOBJ}
                                    locationInforamtionStateOBJ={locationInforamtionStateOBJ}
                                />
                            }
                            {isForcasttWetherDataExistsBOL && 
                                <DailyDetails 
                                    forcastWetherDataStateARR={forcastWetherDataStateARR}
                                    setForcastWetherDataState={setForcastWetherDataState}
                                />
                            }

                            <Footter validationServiceOBJ = {validationServiceOBJ}/>
                        
                        </StyleServiceContext.Provider>
                    
                    </TranslationContext.Provider>
                </Container>
            );
    }