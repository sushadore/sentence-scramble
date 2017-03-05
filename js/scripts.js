var space = " ";

$(function () {
  $("form").submit(function(event) {
    event.preventDefault();

    var words = $("#sentence").val().split(space);
    var longWords = words.map(function(word) {
      if (word.length >= 3) {
        return word;
      }
    });
    $("p").text(longWords.reverse().join(" "));
  });
});
