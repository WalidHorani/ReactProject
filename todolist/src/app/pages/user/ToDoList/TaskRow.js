import Row from "@/app/Components/General/Row";
import Col from "@/app/Components/General/Col";
import Bg from '@/app/Components/General/Bg' ;
import Elm from '@/app/Components/General/Elm' ;
import style from '@/app/pages/user/ToDoList/toDoList.module.css'
import { useState } from "react";
import {useContext} from 'react';
import {TranslationContext} from '@/app/Context/TranslationContext';


export default function TaskRow({tasksStateARR,setTasksStatARR,taskTextUpdateSTR,setTaskTextUpdateSTR,validationServiceOBJ}){
    /*
    |-----------------------------------------------------------------------
    |   State
    |-----------------------------------------------------------------------
    */
        let [ isValidStateBOL , setIsValidState ] = useState(true) ;
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
        function convertArrayToElements(element) {
            return (
                <Col key={element.idINT} p={{c:'12',jc:'s',ai:'c'}}>
                    <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                        <input type="checkbox" checked={element.isDoneBOL} 
                            onChange={(e)=>{handleChangeCheckBox(e,element.idINT)}}
                        />
                    </Elm>
                    {element.isAddBOL && 
                        <Elm p={{c:'3',jc:'s',ai:'c'}}>
                            <p>{element.taskSTR}</p>
                        </Elm>
                    }
                    {element.isAddBOL && 
                        <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                            <button 
                                className={style.editeBtn} 
                                onClick={()=>{handleClickButtonEdite(element.idINT)}}
                            >
                                <i className="bi bi-pencil"></i>{translateFunction('Edite')}
                            </button>
                        </Elm> 
                    }
                    {!element.isAddBOL && 
                        <>
                            <Elm p={{c:'3',jc:'s',ai:'c'}}>
                                <input  type="text" value= {taskTextUpdateSTR}
                                        onChange={(e)=>{handleChangeInputUpdateTask(e)}}
                                />
                            </Elm>
                            <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                                <button 
                                    className={style.updateBtn}
                                    onClick={()=>{handleClickButtonUpdate(element.idINT)}}
                                >
                                    <i className="bi bi-floppy"></i>{translateFunction('Update')}
                                </button>
                            </Elm>
                        </> 
                    }
                    <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                        <button 
                            className={style.deleteBtn}
                            onClick={()=>{handleClickButtonDelete(element.idINT)}}
                        >
                            <i className="bi bi-trash"></i>{translateFunction('Delete')}
                        </button>
                    </Elm>
                    {element.isDoneBOL && 
                        <Elm p={{c:'1',jc:'s',ai:'c'}}>
                            <span className={style.done}>{translateFunction('Done')}</span>
                        </Elm>
                    }
                    { !isValidStateBOL&&
                        <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                            <p >{translateFunction('Not Valid Task Try Again')}</p>
                        </Elm>
                    }
                </Col>
            );
        }
        let elementsJsxARR =  tasksStateARR.map(convertArrayToElements);


    /*
    |-----------------------------------------------------------------------
    |   Event Handleer
    |-----------------------------------------------------------------------
    */
        //checkBox
        function handleChangeCheckBox(e,idINT) {
            let isCheckedBOL = e.target.checked ;
            function updateTaskStateARR(element) {
                if(element.idINT === idINT){
                    let newObjectTask = {...element} ;
                    newObjectTask.isDoneBOL = isCheckedBOL ;
                    return newObjectTask ;
                }else{
                    return element ;
                }
            }
            let newTaskStateARR = tasksStateARR.map(updateTaskStateARR);
            setTasksStatARR(newTaskStateARR) ;
        }
        //editTask
        function handleClickButtonEdite(idINT) {
            let newTextSTR = '' ;
            function updateTaskStateARR(element) {
                if(element.idINT === idINT){
                    let newObjectTask = {...element} ;
                    newObjectTask.isAddBOL = false ;
                    newTextSTR = element.taskSTR ;
                    return newObjectTask ;
                }else{
                    return element ;
                }
            }
            let newTaskStateARR = tasksStateARR.map(updateTaskStateARR);
            setTaskTextUpdateSTR(newTextSTR);
            setTasksStatARR(newTaskStateARR) ;
        }
        //updateTaskTest
        function handleChangeInputUpdateTask(e) {
            let newTextSTR = e.target.value ;
            setTaskTextUpdateSTR(newTextSTR);
        }
        //updateTask
        function handleClickButtonUpdate(idINT) {
            let isValidTaskBOL = validationServiceOBJ.handleValidationStrNum(taskTextUpdateSTR,3,50)
            if(isValidTaskBOL){
                function updateTaskStateARR(element) {
                    if(element.idINT === idINT){
                        let newObjectTask = {...element} ;
                        newObjectTask.taskSTR = taskTextUpdateSTR ;
                        newObjectTask.isAddBOL = true ;
                        return newObjectTask ;
                    }else{
                        return element ;
                    }
                }
                let newTaskStateARR = tasksStateARR.map(updateTaskStateARR);
                setTaskTextUpdateSTR('');
                setTasksStatARR(newTaskStateARR) ;
                setIsValidState(true);
            }else{
                setIsValidState(false);
            }
        }
        //delete
        function handleClickButtonDelete(idINT) {
            function updateTaskStateARR(element) {
                return element.idINT !== idINT ;
            }
            let newTaskStateARR = tasksStateARR.filter(updateTaskStateARR);
            setTasksStatARR(newTaskStateARR) ;
        }


    /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return(
            <Row styleOBJ={{height:'auto'}}>
                <Col>
                    <Bg p={{fr:'n',jc:'c',ai:'s'}}>
                        {elementsJsxARR}
                    </Bg>
                </Col>
            </Row>
        );
}