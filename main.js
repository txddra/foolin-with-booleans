/********************
 * YOUR CODE BELOW! *
 ********************/
let iGetTheJoke = false;
let havingFun = true;
let learning = true;
let killingIt = learning && havingFun;
killingIt; 


function returnFalse(random){
 return false;

}

function isOpposite(boolean){
 return !boolean;
};

function both(bool, bool1){
  return bool && bool1;

}

function either(bool, bool1){
  return bool || bool1;

}
function firstOnly(bool, bool1){
  return bool && !bool1;

}

function secondOnly(bool,bool1){
  return !bool && bool1;
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof iGetTheJoke === 'undefined') {
  iGetTheJoke = undefined;
}

if (typeof havingFun === 'undefined') {
  havingFun = undefined;
}

if (typeof learning === 'undefined') {
  learning = undefined;
}

if (typeof killingIt === 'undefined') {
  killingIt = undefined;
}

if (typeof isOpposite === 'undefined') {
  isOpposite = undefined;
}

if (typeof returnFalse === 'undefined') {
  returnFalse = undefined;
}

if (typeof both === 'undefined') {
  both = undefined;
}

if (typeof either === 'undefined') {
  either = undefined;
}

if (typeof firstOnly === 'undefined') {
  firstOnly = undefined;
}

if (typeof secondOnly === 'undefined') {
  secondOnly = undefined;
}

if (typeof neither === 'undefined') {
  neither = undefined;
}

if (typeof itsComplicated === 'undefined') {
  itsComplicated = undefined;
}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  firstOnly,
  secondOnly,
  neither,
  itsComplicated,
}