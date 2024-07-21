//Templet
import {Row,Col,Bg,Elm} from '@/app/Components/General/Grid' ;
import style from './country.module.css';

//hooks
import { useContext,useState } from 'react';

//other file needed for hooks
import { TranslationContext } from '@/app/Context/TranslationContext';

//pakeges
import { Link } from 'react-router-dom';

//next.js

/*
|-----------------------------------------------------------------------
|   instantiate External Service
|-----------------------------------------------------------------------
*/


export default function RecipeByCountry( { countryRecipeSataeARR,country } ) {
  // console.log('Rerender RecipeByCountry');

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

/*
|-----------------------------------------------------------------------
|   Convert State To Jsx Elements
|-----------------------------------------------------------------------
*/
    function convertToElement(elementOBJ,indexINT){
        return (
            <Col key={elementOBJ.id} p={{c:'12 col-md-4'}} s={{p:'0px 0.5vw'}}>
                <Elm p={{fr:'n',jc:'c',ai:'c'}}>
                    <Link to={`/details/${country}/${elementOBJ.id}`}>
                      <img
                          className={'img-fluid '+ style.countryRecipeImgeIMG }
                          src={elementOBJ.image} 
                          alt="Description of the image"
                      />
                      <div className={style.countryRecipeTitleContainer}>
                          <p className={style.countryRecipeTitle}>{elementOBJ.title}</p>
                      </div>
                    </Link>
                </Elm>
            </Col>
        );
    }
    let jsxElements = countryRecipeSataeARR.map(convertToElement);
/*
|-----------------------------------------------------------------------
|   Return JSX
|-----------------------------------------------------------------------
*/
  return (
    <>
        <Row p={{jc:'c',ai:'c'}}>
            <Elm s={{w:`${(8/12)*100}%`,fw:'w'}} >
                {jsxElements}
            </Elm>
        </Row>
    </>
  );
}
