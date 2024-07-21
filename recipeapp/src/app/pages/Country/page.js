"use client";

//Layout
import MainLayout from '@/app/pages/layout';

//page component
import RecipeByCountry from '@/app/pages/Country/RecipeByCountry'; 

//service

//hooks
import { useState, useEffect } from "react";

//other file needed for hooks

//pakeges 
import { useLoaderData } from "react-router-dom";
import { useParams } from 'react-router-dom';

/*
|-----------------------------------------------------------------------
|   instantiate External Service
|-----------------------------------------------------------------------
*/

export default function Country() {
// console.log('Rerender Country');

/*
|-----------------------------------------------------------------------
|   init value for state
|-----------------------------------------------------------------------
*/
  //

/*
|-----------------------------------------------------------------------
|   Route Parameter
|-----------------------------------------------------------------------
*/
  //
  let { country } = useParams();
  let apiKeySTR = 'dfdee9b2c1104d6094f668d58d886bbc' ;
  let urlPartial1STR = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKeySTR}&` ;
  let urlPartial2STR ='' ;
  if( country === 'Italian' || country === 'American' || country === 'Japanese' ){
    urlPartial2STR = `cuisine=${country}`;
  }else{
    urlPartial2STR = `query=${country}`;
  }
  let urlSTR = urlPartial1STR+urlPartial2STR;
  // let urlSTR = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKeySTR}&cuisine=${country}` ;

/*
|-----------------------------------------------------------------------
|   defining state
|-----------------------------------------------------------------------
*/
  let [ countryRecipeSataeARR, setCountryRecipeSataeARR ] = useState([]) ;

  let isCountryRecipeSataeEmptyBOL = countryRecipeSataeARR.length === 0 ;
  // console.log(countryRecipeSataeARR);
/*
|-----------------------------------------------------------------------
|   define effect
|-----------------------------------------------------------------------
*/
  useEffect( getCountryRecipeEffectFun,[country,urlSTR]) ; 

/*
|-----------------------------------------------------------------------
|   effect function
|-----------------------------------------------------------------------
*/
  function getCountryRecipeEffectFun(){
    let isCountryRecipeExistsInLocalStorgeBOL = localStorage.getItem(`${country}RecipeARR`) !== null ;
    // console.log('here',isCountryRecipeExistsInLocalStorgeBOL);
    if( isCountryRecipeExistsInLocalStorgeBOL ){
      let countryRecipeARR = JSON.parse(localStorage.getItem(`${country}RecipeARR`));
      setCountryRecipeSataeARR( countryRecipeARR );
    }else{
      // let apiKeySTR = 'dfdee9b2c1104d6094f668d58d886bbc' ;
      // let urlSTR = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKeySTR}&cuisine=${country}` ;
      let optionARR = {
        method: 'GET',
      } ;
      async function getCountryRecipe(){
        let responseOBJ = await fetch( urlSTR, optionARR ) ;
        let resultOBJ = await responseOBJ.json();
        // console.log(resultOBJ);
        localStorage.setItem(`${country}RecipeARR`, JSON.stringify(resultOBJ.results ));
        setCountryRecipeSataeARR( resultOBJ.results );
      }
      getCountryRecipe();
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
      <MainLayout>
        { !isCountryRecipeSataeEmptyBOL &&
          <RecipeByCountry 
            countryRecipeSataeARR = { countryRecipeSataeARR }
            country={country}
          />
        }
      </MainLayout>
  );
}
