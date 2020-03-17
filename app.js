

console.log("in");
//const app1= new App();


(function() {
  // Constructor function
  function App (){
    console.log("constructor");
    // Grab all events
    window.addEventListener('error', e => {
      // when an error occurs,
      // send the error information
      // to our yet to be created server
      this.sendPayloadToServer({
        lineno: e.lineno,
        colno: e.colno,
        filename: e.filename,
        message: e.error.message,
        stack: e.error.stack
      })
    })
  }

}())

App.prototype.sendPayloadToServer = function(e) {
  const URL= "yet to define"
  let xhr = new XMLHttpRequest();
  xhr.open('POST', URL );
  xhr.send(e);
  xhr.onerror = function() { 
            alert(`Network Error`);
              };



  // send error to server endpoint

}