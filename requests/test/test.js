console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {

    let structureOne = function() {
      function expandUrl() {
        const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val()
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
          }
        };
        xhr.open('GET', urlToExpand);
        xhr.send();
      };
    };
    let isMatchOne = Structured.match(code, structureOne);
    assert.isOk(isMatchOne, 'Did you replace the \'console.log()\' statement with the code provided?');
  });
});