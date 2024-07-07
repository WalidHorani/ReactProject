"use client";
import Footter from '@/app/Components/Templet/footter/Footter';
import Header from '@/app/Components/Templet/header/Header';
import Container from '../../../Components/General/Container';
import AddTaskRow from './AddTaskRow';
import DateRow from './DateRow';
import DayRow from './DayRow';
import TaskRow from './TaskRow';

import DateService from '@/app/Class/DateService';
import ValidationService from '@/app/Class/ValidationService';
import CookiesService from '@/app/Class/CookiesService';
import StyleService from '@/app/Class/StyleService';

import { useState } from 'react';
import { useEffect } from 'react';

import { StyleServiceContext } from '@/app/Context/StyleServiceContext';
import {TranslationContext} from '@/app/Context/TranslationContext';
import translation from '@/app/Lang/ToDoList';

/*
|-----------------------------------------------------------------------
|   instantiate External Service
|-----------------------------------------------------------------------
*/ 
    let dateServiceOBJ = new DateService();
    let validationServiceOBJ = new ValidationService();
    let cookiesServiceOBJ = new CookiesService() ;
    let StyleServiceOBJ = new StyleService() ;


export default function ToDoList() {
    /*
    |-----------------------------------------------------------------------
    |   init value for state
    |-----------------------------------------------------------------------
    */
        let tasksArr = [
          { idINT:0, taskSTR:'weakUp at 7 AM', isDoneBOL: true, isAddBOL:true},
          { idINT:2, taskSTR:'paly football', isDoneBOL: false, isAddBOL:true},
          { idINT:3, taskSTR:'sleep at 11 PM', isDoneBOL: false, isAddBOL:true},
        ];


    /*
    |-----------------------------------------------------------------------
    |   defining state
    |-----------------------------------------------------------------------
    */
        let [ tasksStateARR, setTasksStatARR] = useState(tasksArr);
        let [ taskTextSTR, setTaskTextSTR] = useState('');
        let [ taskTextUpdateSTR, setTaskTextUpdateSTR] = useState('');
        let [ cookieStateSTR, setCookieState ] = useState('en') ;
        
        
    /*
    |-----------------------------------------------------------------------
    |   define effect
    |-----------------------------------------------------------------------
    */
        useEffect(createCookies,[]);
        useEffect(setCookieLangAndSetCookieState,[]);
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
                    
                    <AddTaskRow taskTextSTR = {taskTextSTR}
                      setTaskTextSTR = {setTaskTextSTR}
                      tasksStateARR = {tasksStateARR}
                      setTasksStatARR = {setTasksStatARR}
                      validationServiceOBJ = {validationServiceOBJ}
                    />

                    <DateRow dateServiceOBJ={dateServiceOBJ}/>

                    <DayRow dateServiceOBJ={dateServiceOBJ}/>

                    <TaskRow tasksStateARR={tasksStateARR} 
                      setTasksStatARR = {setTasksStatARR}
                      taskTextUpdateSTR={taskTextUpdateSTR}
                      setTaskTextUpdateSTR={setTaskTextUpdateSTR}
                      validationServiceOBJ={validationServiceOBJ}
                    />

                    <Footter validationServiceOBJ = {validationServiceOBJ}/>
                </StyleServiceContext.Provider >
              </TranslationContext.Provider>

            </Container>
        );
}
  