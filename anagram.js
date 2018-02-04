var textract = require("textract");//use textract dependency via npm/node.js
var text = textract.fromFileWithPath("./ordliste.docx", function (error, text) {//run textract on given file
    var words = text.split(" ");//create an array of words from the read text

    for (var i = words.length - 1; i >= 0; i--) {//use descending order in order to avoid length problems as per stack overflow recommendations
        if(words[i]){//required to prevent errors caused by words being removed from the array
            var anagrams = words.filter(function (w) {//creates an array of anagrams
                return words[i].split("").sort().join("") === w.split("").sort().join("");//identifies anagrams by sorting letters in words alphabetically
            });
            if (anagrams.length > 1) {//prints the created anagrams
                console.log(anagrams);
            }
            anagrams.forEach(function(a){//removes the anagrams from the library
                words.splice(words.indexOf(a), 1);
            });
        }
    }
});