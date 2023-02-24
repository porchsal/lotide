'use strict';

const reverse = function (str){
   // var str;
    var result = "";
    for (var i = str.length -1; i >= 0; i-- ){
        result += str[i]; 
    }
    return result
}
for (let j = 2; j < process.argv.length; j++) {
    console.log(reverse(process.argv[j]));
}