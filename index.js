"use strict";
exports.__esModule = true;
function searchPrice() {
    var symbol = document.getElementById("symbol").value;
    var encodedParams = new URLSearchParams();
    encodedParams.append("symbol", "".concat(symbol));
    encodedParams.append("period", "1d");
    var options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'a8f76c54e4mshe8e1ce45440e780p1c666djsn50a9f2fb428f',
            'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
        },
        body: encodedParams
    };
    fetch('https://yahoo-finance97.p.rapidapi.com/price', options)
        .then(function (response) { return response.json(); })
        .then(function (response) { return console.log(response); })["catch"](function (err) { return console.error(err); });
}
