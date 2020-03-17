const track =true;
// Constructor function
function App (){
    console.log("constructor");
    // Grab all events
  if(track===true)
  {
    window.addEventListener('error', e => {
    

  


      
      console.log("hey its error");
      console.log(e);
     
      this.sendPayloadToServer({
        lineno: e.lineno,
        colno: e.colno,
        filename: e.filename,
        message: e.error.message,
        stack: e.error.stack
        
                          })
                          })
  }
}
App.prototype.sendPayloadToServer = function(e) {
  const URL= "yet to define";
  let xhr = new XMLHttpRequest();
  xhr.open('POST', URL );
  xhr.send(e);
  xhr.onerror = function() { 
            alert(`Network Error`);
              };
}


App.prototype.unmount = function()
{
  track=false;
}

App.prototype.senderror=function()
{
  throw new Error()
}



var app1 =new App();

// for now this is the just the error created for testing
print(asdh);