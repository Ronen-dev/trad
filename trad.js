/**
 * trad 1.0.0
 *
 * Released under the MIT license
 * https://github.com/Ronen-dev/trad/blob/master/LICENSE
 */

$(function () {

  var trd = $(".trd");
  var lng = $(".trd-lng").data("lng");

  $(".trd-lng").click(function () {
    $.getJSON("dico.json", function (data) {
      var defaut_lng = data.default;

      trd.each(function () {
        var word     = $(this).html();
        var trd_word = '';

        $.each(data["words"], function (i, v) {
          if (v[defaut_lng] == word) {
            trd_word = v[lng];
          }
        });

        $(this).html(trd_word);
      })
    })
  })

});
