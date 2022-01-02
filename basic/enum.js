"use strict";
//enum
var color;
(function (color) {
    color["apple"] = "red";
    color["banana"] = "yellow";
    color["melon"] = "green";
})(color || (color = {}));
let appleColor = color.apple;
console.log(appleColor);
