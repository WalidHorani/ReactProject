//Templet
import {Row,Col,Bg,Elm} from '@/app/Components/General/Grid' ;
import style from './recipe.module.css';

//hooks
import { useContext,useState } from 'react';

//other file needed for hooks
import { TranslationContext } from '@/app/Context/TranslationContext';

//pakeges
import { PiArrowFatRightBold, PiArrowFatLeftBold } from "react-icons/pi";
import { FaRegDotCircle } from "react-icons/fa";
import {Link} from 'react-router-dom' 

//next.js
import Image from 'next/image';

/*
|-----------------------------------------------------------------------
|   instantiate External Service
|-----------------------------------------------------------------------
*/


export default function TrindingCarusel( { randoumRecipeSataeARR } ) {
  // console.log('Rerender TrindingCarusel');

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
  let [ imgIndexStateINT, setImgIndexState ] = useState(0) ;

  //
  let numberOfElementsINT = randoumRecipeSataeARR.length ;

/*
|-----------------------------------------------------------------------
|   define effect
|-----------------------------------------------------------------------
*/
  //

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
  function handleClickLiftArrow() {
    let isImgAtStartBOL = imgIndexStateINT === 0 ; // no previous for index 0
    if( isImgAtStartBOL ){
      let lastImgIndexINT = numberOfElementsINT - 3 ;
      setImgIndexState( lastImgIndexINT ) ;
    }else{
      let previousImgIndexINT = imgIndexStateINT - 1 ;
      setImgIndexState( previousImgIndexINT ) ;
    }
  }
  function handleClickRightArrow() {
    let isImgAtEndtBOL = imgIndexStateINT === numberOfElementsINT - 3 ; // no next for last img
    if( isImgAtEndtBOL ){
      let firstImgIndexINT = 0 ;
      setImgIndexState( firstImgIndexINT ) ;
    }else{
      let nextImgIndexINT = imgIndexStateINT + 1 ;
      setImgIndexState( nextImgIndexINT ) ;
    }
  }

  function handleClickButtomButton( indexINT ){
    if( indexINT >= 6 ){
      setImgIndexState( 6 ) ;
    }else{
      setImgIndexState( indexINT ) ;
    }
  }
/*
|-----------------------------------------------------------------------
|   Convert State To Jsx Elements
|-----------------------------------------------------------------------
*/
  function convertToElements( elementsOBJ, indexINT ){
    return(
        <Col id={style.trindingSliderRecipeContainer} key={elementsOBJ.id} p={{ c:'4', fr:'n' }} s={{translate:`${-100 * imgIndexStateINT}%`}} >
          <Elm p={{c:'12', fr:'n'}}>
            <Link to={`/details/trinding/${elementsOBJ.id}`}>
              <img
                className={'img-fluid '+ style.trindingSliderRecipeImgeIMG }
                src={elementsOBJ.image} 
                alt="Description of the image"
              />
            </Link>
          </Elm>
          <Elm p={{c:'auto',ai:'s',new:style.recipeTrindingTextContainer}} s={{color:'black'}} >
            <p 
              className={style.trindingSliderRecipeTitleP}
            >
              {elementsOBJ.title}
            </p>
          </Elm>
        </Col>
    );
  }
  let jsxElementsRecipe = randoumRecipeSataeARR.map(convertToElements);

  let jsxButtounElementsForTrindingSlider = [] ;
  for( let indexINT=0; indexINT <= numberOfElementsINT-1 ; indexINT++ ){
    jsxButtounElementsForTrindingSlider[ indexINT ] = 
          <FaRegDotCircle key={indexINT}
            className={style.trindingSliderRecipeButtomButton+ (indexINT === imgIndexStateINT ? ' '+ style.trindingSliderRecipeButtomButtonSelected : '') } 
            onClick={() => {handleClickButtomButton(indexINT)}}
          />        
     ;     
  }

/*
|-----------------------------------------------------------------------
|   Return JSX
|-----------------------------------------------------------------------
*/
  return (
    <>
        <Row >
          <Col p={{c:'12'}}>
            <Bg p={{c:'8',jc:'s',ai:'c'}} s={{position:'relative'}}>
              <Col id={style.trindingSliderRecipeLiftArrowContainer} p={{c:'1'}} s={{position:'absolute',top:'0%',left:'0%',h:'100%',zIndex:'1'}}>
                <Elm p={{c:'auto'}} >
                  <PiArrowFatLeftBold className={style.trindingSliderRecipeLiftArrow} onClick={handleClickLiftArrow} />
                </Elm>
              </Col>
              {jsxElementsRecipe}
              <Col id={style.trindingSliderRecipeRightArrowContainer} p={{c:'1'}} s={{position:'absolute',top:'0%',right:'0%',h:'100%', zIndex:'1'} }>
                <Elm p={{c:'auto'}}>
                  <PiArrowFatRightBold className={style.trindingSliderRecipeRightArrow} onClick={handleClickRightArrow} />
                </Elm>
              </Col>
              <Col p={{c:'12'}} s={{position:'absolute',bottom:'2vh',o:'visible'}}>
                <Col s={{o:'visible'}}>
                  {jsxButtounElementsForTrindingSlider}
                </Col>
              </Col>
            </Bg>
          </Col>
        </Row>
    </>
  );
}
