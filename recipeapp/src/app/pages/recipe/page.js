"use client";

//Layout
import MainLayout from '@/app/pages/layout';

//page component
import TrindingCarusel from '@/app/pages/recipe/TrindingCarusel';

//service

//hooks
import { useState, useEffect } from "react";

//other file needed for hooks

/*
|-----------------------------------------------------------------------
|   instantiate External Service
|-----------------------------------------------------------------------
*/

export default function Recipe() {
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
  let [ randoumRecipeSataeARR, setRandoumRecipeSatae ] = useState([]) ;
  let isRandoumRecipeSataeEmptyBOL = randoumRecipeSataeARR.length === 0 ;

/*
|-----------------------------------------------------------------------
|   define effect
|-----------------------------------------------------------------------
*/
  useEffect( getRandoumRecipeEffectFun, [] ) ; 

/*
|-----------------------------------------------------------------------
|   effect function
|-----------------------------------------------------------------------
*/
  function getRandoumRecipeEffectFun(){
    let isRandoumRecipeExistsInLocalStorgeBOL = localStorage.getItem('randomRecipeARR') !== null ;
    if( isRandoumRecipeExistsInLocalStorgeBOL ){
      let randomRecipeARR = JSON.parse(localStorage.getItem('randomRecipeARR'));
      setRandoumRecipeSatae( randomRecipeARR );
      // console.log(randomRecipeARR);
    }else{
      let apiKeySTR = 'dfdee9b2c1104d6094f668d58d886bbc' ;
      let urlSTR = `https://api.spoonacular.com/recipes/random?apiKey=${apiKeySTR}&number=9` ;
      let optionARR = {
        method: 'GET',
      } ;
      async function getRandoumRecipe(){
        let responseOBJ = await fetch( urlSTR, optionARR ) ;
        let resultOBJ = await responseOBJ.json();
        localStorage.setItem('randomRecipeARR', JSON.stringify(resultOBJ.recipes ));
        setRandoumRecipeSatae( resultOBJ.recipes );
      }
      getRandoumRecipe();
    }
  }
/*
|-----------------------------------------------------------------------
|   context Function
|-----------------------------------------------------------------------
*/

/*
|-----------------------------------------------------------------------
|   Return JSX
|-----------------------------------------------------------------------
*/
  return (
    <>
      <MainLayout>
        { !isRandoumRecipeSataeEmptyBOL &&
          <TrindingCarusel 
            randoumRecipeSataeARR = { randoumRecipeSataeARR }
          />
        }
      </MainLayout>
  </>
  );
}
