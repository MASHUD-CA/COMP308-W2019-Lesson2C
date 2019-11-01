"use strict";
//Self-executing anonymous function OR IIFE = Immediately Invoke Function Expression
(function() {
  let myFunctionalVariable = 101;

  // function is anonymous. Start is variable identifier, taking ref to function and assigning to identifier, like making a named function
  //let Start = function() {
  function Start() {
    let myLocalVariable = 1;
    console.log(`App Started ...${myFunctionalVariable}`);
  }

  window.addEventListener("load", Start);
})();
