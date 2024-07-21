"use client";

//Layout
import MainLayout from '@/app/pages/layout';

//page component
import Content from './Content';

//service

//hooks
import { useState, useEffect } from "react";

//other file needed for hooks

//pakeges 
import { useParams } from 'react-router-dom';

/*
|-----------------------------------------------------------------------
|   instantiate External Service
|-----------------------------------------------------------------------
*/

export default function Details() {
// console.log('Rerender Details');

/*
|-----------------------------------------------------------------------
|   Route Parameter
|-----------------------------------------------------------------------
*/
  let { elementId } = useParams();
  let { elementType } = useParams();
  let arrayKeyInLocalStorgeSTR = '' ;
  if( elementType === 'trinding'){
    arrayKeyInLocalStorgeSTR  = 'randomRecipeARR';
  }else if( elementType === 'Italian' ){
    arrayKeyInLocalStorgeSTR  = 'ItalianRecipeARR';
  }else if( elementType === 'American' ){
    arrayKeyInLocalStorgeSTR  = 'AmericanRecipeARR';
  }else if( elementType === 'Japanese' ){
    arrayKeyInLocalStorgeSTR  = 'JapaneseRecipeARR';
  }else{
    arrayKeyInLocalStorgeSTR = `${elementType}RecipeARR` ;
  }
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
let [ recipeInformationState, setRecipeInformationState ] = useState();
let [ isComponentReadyForLoading, setisComponentReadyForLoading ] = useState(false) ;
/*
|-----------------------------------------------------------------------
|   define effect
|-----------------------------------------------------------------------
*/
useEffect(getRecipeInformationEffectFun,[elementId]); 

/*
|-----------------------------------------------------------------------
|   effect function
|-----------------------------------------------------------------------
*/
function getRecipeInformationEffectFun(){
  async function getRecipeInformation(){
    let apiKeySTR = 'dfdee9b2c1104d6094f668d58d886bbc' ;
    let urlSTR = `https://api.spoonacular.com/recipes/${elementId}/information?apiKey=${apiKeySTR}`;
    let optionARR = {method: 'GET'} ;
    let responseOBJ = await fetch( urlSTR, optionARR ) ;
    let resultOBJ = await responseOBJ.json();
    // console.log('yes');
    // console.log(resultOBJ);
    setRecipeInformationState(resultOBJ);
    setisComponentReadyForLoading(true);
  }
  getRecipeInformation();
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
      <MainLayout>
        {isComponentReadyForLoading && 
          <Content
            elementId = {elementId}
            arrayKeyInLocalStorgeSTR = {arrayKeyInLocalStorgeSTR} 
            recipeInformationState={recipeInformationState}
          />
        }
      </MainLayout>
  );
}
