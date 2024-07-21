//Templet
import {Row,Col,Bg,Elm} from '@/app/Components/General/Grid' ;
import style from './details.module.css';

//hooks
import { useContext,useState,useRef,useEffect } from 'react';

//other file needed for hooks
import { TranslationContext } from '@/app/Context/TranslationContext';

//pakeges

//next.js

/*
|-----------------------------------------------------------------------
|   instantiate External Service
|-----------------------------------------------------------------------
*/


export default function Content( {elementId, arrayKeyInLocalStorgeSTR, recipeInformationState} ) {
  // console.log('Rerender Content');

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
let [informationStateSTR , setInformationState] = useState('ingredients');
let isIngredientsActiveBOL = informationStateSTR === 'ingredients' ; 
let isInstructionsActiveBOL = informationStateSTR === 'instructions' ; 


/*
|-----------------------------------------------------------------------
|   define effect
|-----------------------------------------------------------------------
*/

/*
|-----------------------------------------------------------------------
|   effect function
|-----------------------------------------------------------------------
*/
  //

/*
|-----------------------------------------------------------------------
|   use Context
|-----------------------------------------------------------------------
*/
  //use context
  let translateContextARR = useContext(TranslationContext) ;

  //define variable dependin in context
  let translateFunction = translateContextARR[0] ;

/*
|-----------------------------------------------------------------------
|   context Function
|-----------------------------------------------------------------------
*/
  //

/*
|-----------------------------------------------------------------------
|   Event Handler
|-----------------------------------------------------------------------
*/

/*
|-----------------------------------------------------------------------
|   Convert State To Jsx Elements
|-----------------------------------------------------------------------
*/

let recipeARR = JSON.parse(localStorage.getItem(arrayKeyInLocalStorgeSTR));
function getRecipeObject(elementOBJ, indexINT) {
  if( String(elementOBJ.id) === String(elementId) ){
    return elementOBJ ;
  }
}
let recipeOBJ = recipeARR.filter(getRecipeObject);
let titleSTR = recipeOBJ[0].title ;
let imgSrcSTR = recipeOBJ[0].image ;
let summaryHTML = recipeInformationState.summary ;
let InstructionsHTML = String(recipeInformationState.instructions) + String(summaryHTML);
function getIngredients(elementOBJ, indexINT) {
  return(
    <li key={indexINT} className={style.IngredientsLI} >{elementOBJ.original}</li>
  );
} 
let jsxIngredientsElements = recipeInformationState.extendedIngredients.map(getIngredients);
function handleClickInstructions(){
  setInformationState('instructions');
}
function handleClickIngredients(){
  setInformationState('ingredients');
}



/*
|-----------------------------------------------------------------------
|   Return JSX
|-----------------------------------------------------------------------
*/
  return (
    <>
        <Row p={{jc:'c',ai:'c'}}>
            <Col p={{c:'12 col-md-8'}} >
              <Row p={{jc:'c',ai:'s'}} s={{w:'100%',m:'0px'}}>
                <Col p={{c:'12 col-md-6',fr:'n'}}>
                  <Elm p={{fr:'n',jc:'s',ta:'c'}}>
                    <h1 className={style.recipeTitle}>{titleSTR}</h1>
                    <img
                        className={'img-fluid '+ style.recipiImg }
                        src={imgSrcSTR} 
                        alt="Description of the image"
                    />
                  </Elm>
                </Col>
                <Col p={{c:'12 col-md-6',fr:'n'}}>
                  <Elm p={{jc:'s',ai:'s'}} s={{mb:'1vh'}}> 
                    <button 
                      className={(isIngredientsActiveBOL?style.ActiveButton:'')+' '+style.ingredientsButton} 
                      onClick={handleClickIngredients}
                    >
                      Ingredients
                    </button>
                    <button 
                      className={(isInstructionsActiveBOL?style.ActiveButton:'')+' '+style.instructionsButton} 
                      onClick={handleClickInstructions} 
                    >
                      Instructions
                    </button>
                  </Elm>
                  <Elm p={{fr:'n',jc:'s',ai:'s'}}>
                    {isInstructionsActiveBOL && 
                      <p className={style.InstructionsP } dangerouslySetInnerHTML={{__html:InstructionsHTML}} style={{color:'black'}} />
                    }
                    { isIngredientsActiveBOL && 
                      <ul className={style.IngredientsUL } style={{color:'black'}}>{jsxIngredientsElements}</ul>
                    }
                  </Elm>
                </Col>
              </Row>
            </Col>            
        </Row>
    </>
  );
}
