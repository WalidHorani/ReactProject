import Row from '../../../Components/General/Row';
import Col from '../../../Components/General/Col';
import Bg from '../../../Components/General/Bg';
import Elm from '../../../Components/General/Elm';
import style from '@/app/pages/user/ToDoList/toDoList.module.css'
import { useState } from 'react';
import {useContext} from 'react';
import {TranslationContext} from '@/app/Context/TranslationContext';
export default function AddTaskRow({setTaskTextSTR,tasksStateARR,setTasksStatARR,taskTextSTR,validationServiceOBJ}) {
    /*
    |-----------------------------------------------------------------------
    |   defining state
    |-----------------------------------------------------------------------
    */
        let [ isValidStateBOL, setIsValidState ] = useState(true);
    
    /*
    |-----------------------------------------------------------------------
    |   Context
    |-----------------------------------------------------------------------
    */
        let translateContextARR = useContext(TranslationContext) ;
        let translateFunction = translateContextARR[0] ;

    /*
    |-----------------------------------------------------------------------
    |   Event Handleer
    |-----------------------------------------------------------------------
    */
        //updateTaskText
        function handleChangeInputAddTask(e){
            let newTextSTR= e.target.value ;
            setTaskTextSTR(newTextSTR);
        }
        //updatTask
        function handleClickButtonAddTask() {
            //validtaion
            let isValidAddTaskBOL = validationServiceOBJ.handleValidationStrNum(taskTextSTR,3,50);
            if(isValidAddTaskBOL){
                let lastIdINT = null
                if( tasksStateARR.length === 0 ){
                    lastIdINT = -1 ;
                }else{
                    lastIdINT =  tasksStateARR[ tasksStateARR.length-1 ].idINT ;
                }
                let newIdINT = lastIdINT + 1 ;
                let newTaskOBJ = { idINT:newIdINT, taskSTR:taskTextSTR ,isDoneBOL:false, isAddBOL:true}
                let newTasksStateARR = [...tasksStateARR, newTaskOBJ ] ;
                setTasksStatARR(newTasksStateARR);
                setIsValidState(true);
            }else{
                setIsValidState(false);
            }
        }

    /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
        return (
            <>
                <Row styleOBJ ={{height:'auto'}}>
                    <Col>
                        <Bg p={{jc:'s',ai:'c'}}>
                            <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                                <h1 style={{color:'#ff7900'}}>{translateFunction('Today')}</h1>
                            </Elm>
                        </Bg>
                    </Col>
                </Row>
                <Row styleOBJ ={{height:'auto'}}>
                    <Col>
                        <Bg p={{jc:'s',ai:'c'}}>
                            <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                                <span>{translateFunction('Add Task :')}</span>
                            </Elm>  
                            <Elm p={{c:'3',jc:'s',ai:'c'}}>
                                <input type='text' onChange={handleChangeInputAddTask} placeholder={translateFunction('Add Task')}/>
                            </Elm>  
                            <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                                <button 
                                    className={style.addBtn} 
                                    onClick={handleClickButtonAddTask}>
                                        <i className="bi bi-plus"></i>{translateFunction('Add Task')}
                                </button>
                            </Elm>
                                <Elm p={{c:'auto',jc:'s',ai:'c'}}>
                                    <p className={style.validationMsgErrorAddTask+' '+ (!isValidStateBOL?style.vis:'')  } >{translateFunction('Not Valid Task Try Again')}</p>
                                </Elm> 
                        </Bg>
                    </Col>
                </Row>
            </>
        );
}