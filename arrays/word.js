// creating arrays for strings
var sentence = "the quick brown fox jumped over the lazy fox";
var words = sentence.split(" ");
for (var i = 0; i < words.length; i++) {
  console.log("words " + i + ":" + words[i]);
}
