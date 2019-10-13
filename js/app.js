'use strict';

var SeatArry = [];
var GlobalTotal = 0;
var ToyArry = [];
var DubaiArry = [];
var ParisArry = [];
var LimaArry = [];

var Seattle = {

    MinCust: 23,
    MaxCust: 65,
    AvgCookieSale: 6.3,
    randomInRange: function (min, max) {

        var range = max - min;
        var rand = (Math.random() * range) + min;  // smth between 0-20 
        return Math.ceil(rand);
    }

}; // End of Seattle object 

console.log(' Seattle Object ', Seattle);

var Tokyo = {

    MinCust: 3,
    MaxCust: 24,
    AvgCookieSale: 1.2,
    randomInRange: function (min, max) {

        var range = max - min;
        var rand = (Math.random() * range) + min;  // smth between 0-20 
        return Math.ceil(rand);
    }
};// End of Tokyo object 

console.log(' Tokyo Object ', Tokyo);

var Dubai = {

    MinCust: 11,
    MaxCust: 38,
    AvgCookieSale: 3.7,
    randomInRange: function (min, max) {

        var range = max - min;
        var rand = (Math.random() * range) + min;  // smth between 0-20 
        return Math.ceil(rand);
    }
};// End of Dubai object 

console.log(' Dubai Object ', Dubai);

var Paris = {

    MinCust: 20,
    MaxCust: 38,
    AvgCookieSale: 2.3,
    randomInRange: function (min, max) {

        var range = max - min;
        var rand = (Math.random() * range) + min;  // smth between 0-20 
        return Math.ceil(rand);
    }
};// End of Paris object

console.log(' Paris Object ', Paris);

var Lima = {

    MinCust: 2,
    MaxCust: 16,
    AvgCookieSale: 4.6,
    randomInRange: function (min, max) {

        var range = max - min;
        var rand = (Math.random() * range) + min;  // smth between 0-20 
        return Math.ceil(rand);
    }
};// End of Lima object

console.log(' Lima Object ', Lima);



//******************************************************************************/

var SeattleRNC = Seattle.randomInRange(23, 65);
console.log(' Seattle RNC = ', SeattleRNC);
//The average amount of cookies for Seattle 
var AmountOfCookieS = Math.ceil(SeattleRNC * Seattle.AvgCookieSale);
console.log(' Amount Of Cookies for Seattle : ', AmountOfCookieS); /// to calculate the avg amount of cookie per hour 
//Seattle.SeatArry.push( SeattleRNC,AmountOfCookieS);   /// The array are for Random number customers & cookies amount 


for (var i = 6; i <= 12; i++) {
    if (i > 6 && i < 12) {
        //Random Number per customer for seattle 
        var SeattleRNC = Seattle.randomInRange(23, 65);
        var AmountOfCookieS = Math.ceil(SeattleRNC * Seattle.AvgCookieSale);
        var Output = i + 'am :' + AmountOfCookieS + ' cookies .';
        GlobalTotal = GlobalTotal + AmountOfCookieS;
        SeatArry.push(Output);
    } else if (i == 12) {        
        var SeattleRNC = Seattle.randomInRange(23, 65);
        var AmountOfCookieS = Math.ceil(SeattleRNC * Seattle.AvgCookieSale);
        var Output = i + 'pm :' + AmountOfCookieS + ' cookies .';
        GlobalTotal = GlobalTotal + AmountOfCookieS;
        SeatArry.push(Output);
    }
}

for (var i = 1; i <= 7; i++) {
    var SeattleRNC = Seattle.randomInRange(23, 65);
    var AmountOfCookieS = Math.ceil(SeattleRNC * Seattle.AvgCookieSale);
    var Output = i + 'am :' + AmountOfCookieS + ' cookies .';
    GlobalTotal = GlobalTotal + AmountOfCookieS;
    SeatArry.push(Output);
}
SeatArry.push(GlobalTotal);
console.log(' Total cookies per day in Seattle' ,GlobalTotal);
console.log('Seattle Array = ', SeatArry);

//******************************************************************************//

var TokyoRNC = Tokyo.randomInRange(23, 65);
console.log(' Tokyo RNC = ', TokyoRNC);
//The average amount of cookies for Tokyo 
var AmountOfCookieT = Math.ceil(TokyoRNC * Tokyo.AvgCookieSale);
console.log(' Amount Of Cookies for Tokyo : ', AmountOfCookieT); /// to calculate the avg amount of cookie per hour 
//Tokyo.ToyArry.push( TokyoRNC,AmountOfCookieT);   /// The array are for Random number customers & cookies amount 

var GlobalTotal = 0;
for (var i = 6; i < 12; i++) {
    if (i > 6 && i < 12) {
        //Random Number per customer for Tokyo 
        var TokyoRNC = Tokyo.randomInRange(3, 24);
        var AmountOfCookieT = Math.ceil(TokyoRNC * Tokyo.AvgCookieSale);
        var Output = i + 'am :' + AmountOfCookieT + ' cookies .';
        GlobalTotal = GlobalTotal + AmountOfCookieT;
        ToyArry.push(Output);
    } else if (i == 12) {
        var TokyoRNC = Tokyo.randomInRange(3, 24);
        var AmountOfCookieT = Math.ceil(TokyoRNC * Tokyo.AvgCookieSale);
        var Output = i + 'pm :' + AmountOfCookieT + ' cookies .';
        GlobalTotal = GlobalTotal + AmountOfCookieT;
        ToyArry.push(Output);
    }
}

for (var i = 1; i <= 7; i++) {
    var TokyoRNC = Tokyo.randomInRange(3, 24);
    var AmountOfCookieT = Math.ceil(TokyoRNC * Tokyo.AvgCookieSale);
    var Output = i + 'am :' + AmountOfCookieT + ' cookies .';
    GlobalTotal = GlobalTotal + AmountOfCookieT;
    ToyArry.push(Output);
}
ToyArry.push(GlobalTotal);
console.log('Tokyo Array = ', ToyArry);
console.log(' Total cookies per day in Tokyo' ,GlobalTotal);

//******************************************************************************//

var DubaiRNC = Dubai.randomInRange(23, 65);
console.log(' Dubai RNC = ', DubaiRNC);
//The average amount of cookies for Dubai 
//var AmountOfCookieD = Math.ceil(DubaiRNC * Dubai.AvgCookieSale);
console.log(' Amount Of Cookies for Dubai : ', AmountOfCookieD); /// to calculate the avg amount of cookie per hour 

//Dubai.DubaiArry.push(DubaiRNC, AmountOfCookieD);   /// The array are for Random number customers & cookies amount 
var GlobalTotal = 0;
for (var i = 6; i < 12; i++) {
    if (i > 6 && i < 12) {
        //Random Number per customer for Dubai 
        var DubaiRNC = Dubai.randomInRange(11, 38);
        var AmountOfCookieD = Math.ceil(DubaiRNC * Dubai.AvgCookieSale);
        var Output = i + 'am :' + AmountOfCookieD + ' cookies .';
        GlobalTotal = GlobalTotal + AmountOfCookieD;
        DubaiArry.push(Output);
    } else if (i == 12) {
        var DubaiRNC = Dubai.randomInRange(11, 38);
        var AmountOfCookieD = Math.ceil(DubaiRNC * Dubai.AvgCookieSale);
        var Output = i + 'pm :' + AmountOfCookieD + ' cookies .';
        GlobalTotal = GlobalTotal + AmountOfCookieD;
        DubaiArry.push(Output);
    }
}

for (var i = 1; i <= 7; i++) {
    var DubaiRNC = Dubai.randomInRange(11, 38);
    var AmountOfCookieD = Math.ceil(DubaiRNC * Dubai.AvgCookieSale);
    var Output = i + 'am :' + AmountOfCookieD + ' cookies .';
    GlobalTotal = GlobalTotal + AmountOfCookieD;
    DubaiArry.push(Output);
}
DubaiArry.push(GlobalTotal);
console.log('Dubai Array = ', DubaiArry);
console.log(' Total cookies per day in Dubai' ,GlobalTotal);

//******************************************************************************//

var ParisRNC = Paris.randomInRange(20, 38);
console.log(' Paris RNC =  ', ParisRNC);

//The average amount of cookies for Paris 
var AmountOfCookieP = Math.ceil(ParisRNC * Paris.AvgCookieSale);
console.log(' Amount Of Cookies for Paris : ', AmountOfCookieP); /// to calculate the avg amount of cookie per hour 

//Paris.ParisArry.push(ParisRNC, AmountOfCookieP);   /// The array are for Random number customers & cookies amount 
var GlobalTotal = 0;
for (var i = 6; i < 12; i++) {
    if (i > 6 && i < 12) {
        //Random Number per customer for Paris 
        var ParisRNC = Paris.randomInRange(20, 38);
        var AmountOfCookieP = Math.ceil(ParisRNC * Paris.AvgCookieSale);
        var Output = i + 'am :' + AmountOfCookieP + ' cookies .';
        GlobalTotal = GlobalTotal + AmountOfCookieP;
        ParisArry.push(Output);
    } else if (i == 12) {
        var ParisRNC = Paris.randomInRange(20, 38);
        var AmountOfCookieP = Math.ceil(ParisRNC * Paris.AvgCookieSale);
        var Output = i + 'pm :' + AmountOfCookieP + ' cookies .';
        GlobalTotal = GlobalTotal + AmountOfCookieP;
        ParisArry.push(Output);
    }

}

for (var i = 1; i <= 7; i++) {
    var ParisRNC = Paris.randomInRange(20, 38);
    var AmountOfCookieP = Math.ceil(ParisRNC * Paris.AvgCookieSale);
    var Output = i + 'am :' + AmountOfCookieP + ' cookies .';
    GlobalTotal = GlobalTotal + AmountOfCookieP;
    ParisArry.push(Output);
}
ParisArry.push(GlobalTotal);
console.log('Paris Array = ', ParisArry);
console.log(' Total cookies per day in Paris' ,GlobalTotal);

//******************************************************************************//

var LimaRNC = Lima.randomInRange(23, 65);
console.log(' Lima RNC = ', LimaRNC);

//The average amount of cookies for Lima 
var AmountOfCookieL = Math.ceil(LimaRNC * Lima.AvgCookieSale);
console.log(' Amount Of Cookies for Lima : ', AmountOfCookieL); /// to calculate the avg amount of cookie per hour 

//Lima.LimaArry.push(LimaRNC, AmountOfCookieL);   /// The array are for Random number customers & cookies amount 

var GlobalTotal = 0;
for (var i = 6; i < 12; i++) {
    if (i > 6 && i < 12) {
        //Random Number per customer for Lima 
        var LimaRNC = Lima.randomInRange(2, 16);
        var AmountOfCookieL = Math.ceil(LimaRNC * Lima.AvgCookieSale);
        var Output = i + 'am :' + AmountOfCookieL + ' cookies .';
        GlobalTotal = GlobalTotal + AmountOfCookieL;
        LimaArry.push(Output);
    } else if (i == 12) {
        var LimaRNC = Lima.randomInRange(2, 16);
        var AmountOfCookieL = Math.ceil(LimaRNC * Lima.AvgCookieSale);
        var Output = i + 'pm :' + AmountOfCookieL + ' cookies .';
        GlobalTotal = GlobalTotal + AmountOfCookieL;
        LimaArry.push(Output);
    }
}

for (var i = 1; i <= 7; i++) {
    var LimaRNC = Lima.randomInRange(2, 16);
    var AmountOfCookieL = Math.ceil(LimaRNC * Lima.AvgCookieSale);
    var Output = i + 'am :' + AmountOfCookieL + ' cookies .';
    GlobalTotal = GlobalTotal + AmountOfCookieL;
    LimaArry.push(Output);
}
LimaArry.push(GlobalTotal);
console.log('Lima Array = ', LimaArry);
console.log(' Total cookies per day in Lima' ,GlobalTotal);

//******************************************************************************//

///************************** To Print for Seattle **************************** */
var SeattlePargh = document.createElement('p');
SeattlePargh.textContent = 'Seattle'; /// bring the object by Name
var contentArea = document.getElementById('content-area');
contentArea.appendChild(SeattlePargh);

var ulElements = document.createElement('ul');
contentArea.appendChild(ulElements);

for (var i = 0; i <=14; i++) {
   var liElements = document.createElement('li');
   var li = document.createElement('li');
   liElements.textContent = SeatArry[i];
   ulElements.appendChild(liElements);
};

///************************** To Print for Tokyo **************************** */
var TokyoPargh = document.createElement('p');
TokyoPargh.textContent = 'Tokyo'; /// bring the object by Name
var contentArea = document.getElementById('content-area');
contentArea.appendChild(TokyoPargh);

var ulElements = document.createElement('ul');
contentArea.appendChild(ulElements);

for (var i = 0; i <=14; i++) {
   var liElements = document.createElement('li');
   var li = document.createElement('li');
   liElements.textContent = ToyArry[i];
   ulElements.appendChild(liElements);
};

///************************** To Print for Dubai **************************** */
var DubaiPargh = document.createElement('p');
DubaiPargh.textContent = 'Dubai'; /// bring the object by Name
var contentArea = document.getElementById('content-area');
contentArea.appendChild(DubaiPargh);

var ulElements = document.createElement('ul');
contentArea.appendChild(ulElements);

for (var i = 0; i <=14; i++) {
   var liElements = document.createElement('li');
   var li = document.createElement('li');
   liElements.textContent = DubaiArry[i];
   ulElements.appendChild(liElements);
};

///************************** To Print for Paris **************************** */
var ParisPargh = document.createElement('p');
ParisPargh.textContent = 'Paris'; /// bring the object by Name
var contentArea = document.getElementById('content-area');
contentArea.appendChild(ParisPargh);

var ulElements = document.createElement('ul');
contentArea.appendChild(ulElements);

for (var i = 0; i <=14; i++) {
   var liElements = document.createElement('li');
   var li = document.createElement('li');
   liElements.textContent = ParisArry[i];
   ulElements.appendChild(liElements);
};

///************************** To Print for Lima **************************** */
var LimaPargh = document.createElement('p');
LimaPargh.textContent = 'Lima'; /// bring the object by Name
var contentArea = document.getElementById('content-area');
contentArea.appendChild(LimaPargh);

var ulElements = document.createElement('ul');
contentArea.appendChild(ulElements);

for (var i = 0; i <=14; i++) {
   var liElements = document.createElement('li');
   var li = document.createElement('li');
   liElements.textContent = LimaArry[i];
   ulElements.appendChild(liElements);
};










//******************************************************************************//
//   var header1 = document.createElement(' h1');
//   header1.textContent = ' hi there ' ;
//   var contentArea = document.getElementById('content-area');
//   contentArea.appendChild(header1);