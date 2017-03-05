$(function () {
  $("form").submit(function(event) {
    event.preventDefault();

    var originalSentence = $("#sentence").val();
    var space = " ";
    var words = originalSentence.split(space);
    var longWords = [];
    words.forEach(function(word) {
      if (word.length >= 3) {
        longWords.push(word);
      }
    });
    var result = longWords.reverse();
    $("p").text(result.join(" "));
  });
});
