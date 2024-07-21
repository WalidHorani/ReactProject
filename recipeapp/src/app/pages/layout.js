"use client";

//Templet
import { Container } from "@/app/Components/General/Grid";

//page component
import SearchBar from '@/app/pages/recipe/SearchBar';
import NavBar from '@/app/pages/recipe/NavBar' ;

//service
import CookiesService from "@/app/Class/CookiesService";
import ValidationService from "@/app/Class/ValidationService";
import DateService from "@/app/Class/DateService";
import StyleService from "@/app/Class/StyleService";

//hooks
import { useState, useEffect } from "react";

//other file needed for hooks
import { StyleServiceContext } from "@/app/Context/StyleServiceContext";
import { TranslationContext } from "@/app/Context/TranslationContext";
import translation from "@/app/Lang/recipe";

/*
|-----------------------------------------------------------------------
|   instantiate External Service
|-----------------------------------------------------------------------
*/
let dateServiceOBJ = new DateService();
let cookiesServiceOBJ = new CookiesService();
let validationServiceOBJ = new ValidationService();
let StyleServiceOBJ = new StyleService();

export default function MainLayout({ children }) {
  /*
|-----------------------------------------------------------------------
|   defining state
|-----------------------------------------------------------------------
*/
let [cookieStateSTR, setCookieState] = useState("en");

  /*
|-----------------------------------------------------------------------
|   define effect
|-----------------------------------------------------------------------
*/
useEffect(createCookies, []);
useEffect(setCookieLangAndSetCookieState, []);

  /*
|-----------------------------------------------------------------------
|   effect function
|-----------------------------------------------------------------------
*/
function createCookies() {
  let isCookieExisitBOL = cookiesServiceOBJ.isCookieExists();
  if (!isCookieExisitBOL) {
    let expireDateForCookieSTR = dateServiceOBJ.getExpireDateForCookie(
      0,
      3,
      0,
      0,
      0
    );
    cookiesServiceOBJ.setCookie(expireDateForCookieSTR);
  } else {
    cookiesServiceOBJ.createCookieSTR();
  }
}
function setCookieLangAndSetCookieState() {
  let isCookieLangExistsBOL = cookiesServiceOBJ.isCookieValueExists("lang");
  if (isCookieLangExistsBOL) {
    let cookieValueSTR = cookiesServiceOBJ.getCookieValue("lang");
    setCookieState(cookieValueSTR);
  } else {
    cookiesServiceOBJ.updateCookieValue("lang", "en");
    setCookieState("en");
  }
}
  /*
|-----------------------------------------------------------------------
|   context Function
|-----------------------------------------------------------------------
*/
function translate(key) {
  return translation[cookieStateSTR][key];
}

  /*
|-----------------------------------------------------------------------
|   Return JSX
|-----------------------------------------------------------------------
*/
  return (
    <>
      <Container>
        <TranslationContext.Provider value={[translate, cookieStateSTR]}>
          <StyleServiceContext.Provider value={StyleServiceOBJ}>
            <SearchBar />
            <NavBar />
            {children}
          </StyleServiceContext.Provider>
        </TranslationContext.Provider>
      </Container>
    </>
  );
}
