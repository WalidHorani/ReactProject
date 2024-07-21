export default class DateService{
    /* 
    |-------------------------------------------------------------
    |   constructor
    |-------------------------------------------------------------
    */
        constructor(){
            this.currentDateOBJ = new Date() ;
            this.monthARR = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            this.dayARR = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        }

    /* 
    |-------------------------------------------------------------
    |   set Method
    |-------------------------------------------------------------
    */

    /* 
    |-------------------------------------------------------------
    |   get Method
    |-------------------------------------------------------------
    */
        geYearINT(){
            let yearINT = this.currentDateOBJ.getFullYear() ;
            return yearINT ;
        }
        getMonthINT(){
            let monthINT = this.currentDateOBJ.getMonth() ;
            return monthINT;
        }
        getMonthSTR(){
            let monthARR = this.monthARR ;
            let monthINT = this.getMonthINT();
            let monthSTR = monthARR[ monthINT ] ;
            return monthSTR ;
        }
        getDayOfMonthINT(){
            let dayOfMonthINT = this.currentDateOBJ.getDate() ;
            return dayOfMonthINT ;
        }
        getDayOfWeekINT(){
            let dayOfWeekINT = this.currentDateOBJ.getDay();
            return dayOfWeekINT ;
        }
        getDayOfWeekSTR(){
            let dayARR = this.dayARR ;
            let dayOfWeekINT = this.getDayOfWeekINT();
            let dayOfWeekSTR = dayARR[ dayOfWeekINT ] ;
            return dayOfWeekSTR ;
        }
        getDayStrAndDayOfMonth(){
            let dayARR = this.dayARR ;
            let dayOfWeekSTR = this.getDayOfWeekSTR() ;
            let dayOfMonthINT = this.getDayOfMonthINT() ;
            let dayOfWeekINT = this.getDayOfWeekINT() ;
            let resultARR = [] ;
            let DateINT;
            for(let dayIndexINT in dayARR){
                if( dayARR[dayIndexINT] === dayOfWeekSTR ){
                    resultARR[ dayIndexINT ] = {'id':dayIndexINT, 'daySTR':dayARR[dayIndexINT], 'dayOfMonthINT': dayOfMonthINT, 'isCurrentDayBOL':true} ;
                }else if( dayIndexINT < dayOfWeekINT ){
                    DateINT = (dayOfMonthINT - (dayOfWeekINT - dayIndexINT) ) ;
                    resultARR[ dayIndexINT ] = {'id':dayIndexINT, 'daySTR':dayARR[dayIndexINT], 'dayOfMonthINT': DateINT, 'isCurrentDayBOL':false} ;
                }else if(dayIndexINT > dayOfWeekINT){
                    DateINT = ( dayOfMonthINT + (dayIndexINT - dayOfWeekINT) ) ;
                    resultARR[ dayIndexINT ] = {'id':dayIndexINT, 'daySTR':dayARR[dayIndexINT], 'dayOfMonthINT': DateINT, 'isCurrentDayBOL':false} ;
                }
            }
            return resultARR
        }
        getExpireDateForCookie( numberOfMonthsINT, numberOfDayINT,numberOfHoursINT,numberOfMinutesINT,numberOfSecondsINT){
            let monthsInMileeSecondsINT = 0 ;
            let daysInMileeSecondsINT = 0 ;
            let hoursInMileeSecondsINT = 0 ;
            let minutesInMileeSecondsINT = 0 ;
            let secondsInMileeSecondINT = 0 ;
            if( monthsInMileeSecondsINT !== 0 ){
                monthsInMileeSecondsINT = numberOfMonthsINT * 30 * 24 * 60 * 60 * 1000 ;
            }else if( numberOfDayINT !== 0 ){
                daysInMileeSecondsINT = numberOfDayINT * 24 * 60 * 60 * 1000 ;
            }else if( numberOfHoursINT !== 0 ){
                hoursInMileeSecondsINT = numberOfHoursINT * 60 * 60 * 1000 ;
            }else if( numberOfMinutesINT !== 0){
                minutesInMileeSecondsINT = numberOfMinutesINT * 60 * 1000 ;
            }else if( numberOfSecondsINT !== 0){
                secondsInMileeSecondINT = numberOfSecondsINT * 1000 ;
            }
            let timeInMileeSeconds = monthsInMileeSecondsINT + daysInMileeSecondsINT + hoursInMileeSecondsINT + minutesInMileeSecondsINT + secondsInMileeSecondINT ;
            let dateOBJ = new Date() ;
            let currentTimeTS = dateOBJ.getTime() ;
            let expireDateTS = currentTimeTS + timeInMileeSeconds ;
            dateOBJ.setTime(expireDateTS) ;
            let expireDateSTR = dateOBJ.toUTCString() ;
            return expireDateSTR ;
        }
}