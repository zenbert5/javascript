// xmlhttprequest is not installed by node - require separate install with npm
//

// import './XMLHttpRequest.js';
var xmlr = require('./XMLHttpRequest.js');

const xhr = new xmlr.XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === xmlr.XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
}

xhr.open('GET', url);
xhr.send();
