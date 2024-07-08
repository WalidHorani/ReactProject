import { useContext } from "react";
import { TranslationContext } from "@/app/Context/TranslationContext";
import { StyleServiceContext } from "@/app/Context/StyleServiceContext";

/*
|-----------------------------------------------------------------------
|   container
|-----------------------------------------------------------------------
*/
export function Container({ children }) {
  /*
        |-----------------------------------------------------------------------
        |   Return JSX
        |-----------------------------------------------------------------------
        */
  return (
    <div
      className="container-fluid"
      style={{ overflow: "hidden", padding: "0px" }}
    >
      {children}
    </div>
  );
}

/*
|-----------------------------------------------------------------------
|   Row
|-----------------------------------------------------------------------
*/
export function Row({ children, s = null }) {
  let styleServiceOBJ = useContext(StyleServiceContext);

  //class
  let classNameGroupSTR = "row ";

  //lang and cookie
  let translateContextARR = useContext(TranslationContext);
  let cookieStateSTR = translateContextARR[1];

  //style
  let defaultStyleOBJ = {
    overflow: "hidden",
    height: "auto",
    marginBottom: "2vh",
  };
  let payloadForUpdateStyleObjectOBJ = {
    s: s,
    defaultStyleOBJ: defaultStyleOBJ,
  };
  defaultStyleOBJ = styleServiceOBJ.updateStyleObject(
    payloadForUpdateStyleObjectOBJ
  );

  /*
        |-----------------------------------------------------------------------
        |   Return JSX
        |-----------------------------------------------------------------------
        */
  return (
    <div
      className={classNameGroupSTR}
      style={defaultStyleOBJ}
      dir={cookieStateSTR === "en" ? "ltr" : "rtl"}
    >
      {children}
    </div>
  );
}

/*
|-----------------------------------------------------------------------
|   Bg
|-----------------------------------------------------------------------
*/
export function Bg({ children, p = null, s = null }) {
  let styleServiceOBJ = useContext(StyleServiceContext);

  //class
  let defaultClassSTR =
    "col d-flex flex-row justify-content-center align-items-center";
  let payloadForUpdateBootStrapClassOBJ = {
    p: p,
    defaultClassSTR: defaultClassSTR,
  };
  defaultClassSTR = styleServiceOBJ.updateBootStrapClass(
    payloadForUpdateBootStrapClassOBJ
  );

  //style
  let defaultStyleOBJ = {
    backgroundColor: "",
    padding: "0vh 0%",
    borderRadius: "0px 0px",
    color: "black",
    overflow: "hidden",
    boxShadow: "0px 0px 0px 0px rgba(0 0 0 / 30%)",
  };
  let payloadForUpdateStyleObjectOBJ = {
    s: s,
    defaultStyleOBJ: defaultStyleOBJ,
  };
  defaultStyleOBJ = styleServiceOBJ.updateStyleObject(
    payloadForUpdateStyleObjectOBJ
  );

  /*
        |-----------------------------------------------------------------------
        |   Return JSX
        |-----------------------------------------------------------------------
        */
  return (
    <div className={defaultClassSTR} style={defaultStyleOBJ}>
      {children}
    </div>
  );
}

/*
|-----------------------------------------------------------------------
|   Col
|-----------------------------------------------------------------------
*/
export function Col({ children, p = null, s = null }) {
  let styleServiceOBJ = useContext(StyleServiceContext);

  //class
  let defaultClassSTR =
    "col d-flex flex-row justify-content-center align-items-center";
  let payloadForUpdateBootStrapClassOBJ = {
    p: p,
    defaultClassSTR: defaultClassSTR,
  };
  defaultClassSTR = styleServiceOBJ.updateBootStrapClass(
    payloadForUpdateBootStrapClassOBJ
  );

  //style
  let defaultStyleOBJ = { overflow: "hidden" };
  let payloadForUpdateStyleObjectOBJ = {
    s: s,
    defaultStyleOBJ: defaultStyleOBJ,
  };
  defaultStyleOBJ = styleServiceOBJ.updateStyleObject(
    payloadForUpdateStyleObjectOBJ
  );

  /*
        |-----------------------------------------------------------------------
        |   Return JSX
        |-----------------------------------------------------------------------
        */
  return (
    <div className={defaultClassSTR} style={defaultStyleOBJ}>
      {children}
    </div>
  );
}

/*
|-----------------------------------------------------------------------
|   Elm
|-----------------------------------------------------------------------
*/
export function Elm({ children, p = null, s = null }) {
  let styleServiceOBJ = useContext(StyleServiceContext);

  //class
  let defaultClassSTR =
    "col d-flex flex-row justify-content-center align-items-center";
  let payloadForUpdateBootStrapClassOBJ = {
    p: p,
    defaultClassSTR: defaultClassSTR,
  };
  defaultClassSTR = styleServiceOBJ.updateBootStrapClass(
    payloadForUpdateBootStrapClassOBJ
  );

  //style
  let defaultStyleOBJ = { padding: "0.25vh 1vw", overflow: "hidden" };
  let payloadForUpdateStyleObjectOBJ = {
    s: s,
    defaultStyleOBJ: defaultStyleOBJ,
  };
  defaultStyleOBJ = styleServiceOBJ.updateStyleObject(
    payloadForUpdateStyleObjectOBJ
  );
  /*
    |-----------------------------------------------------------------------
    |   Return JSX
    |-----------------------------------------------------------------------
    */
  return (
    <div className={defaultClassSTR} style={defaultStyleOBJ}>
      {children}
    </div>
  );
}
