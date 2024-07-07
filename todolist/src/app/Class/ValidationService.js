export default class ValidationService{
    /*
    |-------------------------------------------------------------------------------------
    |   constructor
    |-------------------------------------------------------------------------------------
    */
        constructor() {
        }

    /*
    |-------------------------------------------------------------------------------------
    |   handleValidation
    |-------------------------------------------------------------------------------------
    */
        handleValidationStr( value, minINT, maxINT ) {
            let stringREG = new RegExp(`^[\\u0621-\\u064Aa-zA-Z]{${minINT},${maxINT}}$`);
            let isValidBOL = stringREG.test(value) ;
            return isValidBOL ;
        }
        handleValidationNum( value, minINT, maxINT) {
            let numberREG = new RegExp(`^[\\u0660-\\u06690-9]{${minINT},${maxINT}}$`);
            let isValidBOL = numberREG.test(value) ;
            return isValidBOL;
        }
        handleValidationStrNum( value, minINT, maxINT) {
            let stringNumberREG = new RegExp(`^[\\u0621-\\u064A\\u0660-\\u0669a-zA-Z0-9\\s]{${minINT},${maxINT}}$`);
            let isValidBOL = stringNumberREG.test(value) ;
            return isValidBOL;
        }
        handleValidationEmail( value, minINT, maxINT) {
            let emailREG = new RegExp(`^[a-zA-Z][a-zA-Z0-9_.]{${minINT},${maxINT}}@(yahoo|gmail).com$`);
            let isValidBOL = emailREG.test(value) ;
            return isValidBOL;
        }
        handleValidation( value, regExp ) {
            let isValidBOL = regExp.test(value) ;
            return isValidBOL;
        }
}