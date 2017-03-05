$(function () {
  $("form").submit(function(event) {
    event.preventDefault();

    var originalSentence = $("#sentence").val();
    var space = " ";
    var words = originalSentence.split(space);
    var longWords = words.map(function(word) {
      if (word.length >= 3) {
        return word;
      }
    });
    var result = longWords.reverse();
    $("p").text(result.join(" "));
  });
});
