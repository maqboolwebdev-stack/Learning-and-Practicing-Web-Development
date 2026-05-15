// const Formatter = (function() {
//   let timesRun = 0;

//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
//   const setTimesRun = () => { 
//     log("Setting times run");
//     ++timesRun;
//   }

//   const makeUppercase = (text) => {
//     log("Making uppercase");
//     setTimesRun();
//     return text.toUpperCase();
//   };

//   return {
//     makeUppercase,
//     timesRun,
//   }
// })();

// console.log(Formatter.makeUppercase('waqas'));
// console.log(Formatter.timesRun);

// Formatter.timesRun = 10;
// console.log(Formatter.timesRun);

// const Formatter = (function() {
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
//   const timesRun = [];

//   const makeUppercase = (text) => {
//     log("Making uppercase");
//     timesRun.push(null);
//     return text.toUpperCase();
//   };

//   return {
//     makeUppercase,
//     timesRun,
//   }
// })();

// console.log(Formatter.makeUppercase("tomek"));
// console.log(Formatter.makeUppercase("tomek"));
// console.log(Formatter.makeUppercase("tomek"));
// console.log(Formatter.timesRun.length);


const Formatter = (function() {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  };

  const writeToDOM = (selector, message) => {
  if (!!document && "querySelector" in document) {
    document.querySelector(selector).innerHTML = message;
  }
}

  return {
    makeUppercase,
    writeToDOM,
  }
})();

Formatter.writeToDOM('#target', 'Hi there');
Formatter.writeToDOM('#target2', 'Hi there! I am softwear engineer');