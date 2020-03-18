

const track = true;
// Constructor function
function App() {
  if (track) {
    window.addEventListener('error', e => {
      //to get the deatils of system
      const getDetails = this.details();
      this.sendPayloadToServer({
        //this is the payload
          errorCode:'',
          errorMessage: e.error.message,
          errorLine : e.lineno,
          browserVersion :getDetails.browserVersion,
          osDetails: getDetails.osversion,
          ipAddress: '',
          userAgent:'',
          timeOfError:''
         
      })
    })
  }
}

// fn to connect to backend
App.prototype.sendPayloadToServer = function (e) {
  const URL = "yet to define";
  let xhr = new XMLHttpRequest();
  xhr.open('POST', URL);
  xhr.send(e);
  xhr.onerror = function () {
    alert(`Network Error`);
  };
}

// this is the function to untrack
App.prototype.unmount = function () {
  track = false;
}
// this funtion is still to defined with error properties
App.prototype.senderror = function () {
  throw new Error()
}

// fn to get the details
App.prototype.details = function () {
  var browser,
    version,
    mobile,
    os,
    osversion,
    bit,
    ua = navigator.userAgent,
    
    platform = navigator.platform;
  //Internet Explorer
  console.log("user aagenttt");
  console.log(ua);
  if (/MSIE/.test(ua)) {

    browser = 'Internet Explorer';

    if (/IEMobile/.test(ua)) {
      mobile = 1;
    }

    version = /MSIE \d+[.]\d+/.exec(ua)[0].split(' ')[1];

    //Google Chrome
  } else if (/Chrome/.test(ua)) {

    //Chromebooks
    if (/CrOS/.test(ua)) {
      platform = 'CrOS';
    }
    browser = 'Chrome';
    version = /Chrome\/[\d\.]+/.exec(ua)[0].split('/')[1];

    // Opera Browser
  } else if (/Opera/.test(ua)) {

    browser = 'Opera';

    if (/mini/.test(ua) || /Mobile/.test(ua)) {
      mobile = 1;
    }

    //Android Browser
  } else if (/Android/.test(ua)) {

    browser = 'Android Webkit Browser';
    mobile = 1;
    os = /Android\s[\.\d]+/.exec(ua)[0];

    //Mozilla firefox
  } else if (/Firefox/.test(ua)) {

    browser = 'Firefox';

    if (/Fennec/.test(ua)) {
      mobile = 1;
    }
    version = /Firefox\/[\.\d]+/.exec(ua)[0].split('/')[1];

    //Safari
  } else if (/Safari/.test(ua)) {

    browser = 'Safari';

    if ((/iPhone/.test(ua)) || (/iPad/.test(ua)) || (/iPod/.test(ua))) {
      os = 'iOS';
      mobile = 1;
    }

  }
  if (!version) {

    version = /Version\/[\.\d]+/.exec(ua);

    if (version) {
      version = version[0].split('/')[1];
    } else {
      version = /Opera\/[\.\d]+/.exec(ua)[0].split('/')[1];
    }

  }

  if (platform === 'MacIntel' || platform === 'MacPPC') {
    os = 'Mac OS X';
    osversion = /10[\.\_\d]+/.exec(ua)[0];
    if (/[\_]/.test(osversion)) {
      osversion = osversion.split('_').join('.');
    }
  } else if (platform === 'CrOS') {
    os = 'ChromeOS';
  } else if (platform === 'Win32' || platform == 'Win64') {
    os = 'Windows';
    bit = platform.replace(/[^0-9]+/, '');
  } else if (!os && /Android/.test(ua)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  } else if (!os && /Windows/.test(ua)) {
    os = 'Windows';
  }
    const details = {
    version: version,
    browser: browser,
    os: os,
    osversion: osversion
  }
  return (details)
};





var app1 = new App();
// for now this is the just the error created for testing
print(asdh);
