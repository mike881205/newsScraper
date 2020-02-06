$(".main").hide();


$(document).on("click", "#scrape", function () {
  $(".main").show();

  $.ajax({
    method: "GET",
    url: "/scrape"
  })
    .then(
      $.getJSON("/articles", function (data) {
        for (let i = 0; i < data.length; i++) {
          $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
        }
      })
    )
  console.log("Scraped")
})

$(document).on("click", "p", function () {
  $("#comments").empty();
  let thisId = $(this).attr("data-id");
  $("#h3").hide();

  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    .then(function (data) {
      $("#comments").append("<h3>" + data.title + "</h3>");
      $("#comments").append("<input id='titleinput' name='title' placeholder='Comment Title'>");
      $("#comments").append("<textarea id='bodyinput' name='body placeholder='Comment Body'></textarea> ");
      $("#comments").append("<button data-id='" + data._id + "' id='savecomment'>Save comment</button>");
      $("#comments").append("<button id='nevermind'>Nevermind</button>");

      if (data.comment) {
        $("#titleinput").val(data.comment.title);
        $("#bodyinput").val(data.comment.body);
      }
    });
});

$(document).on("click", "#savecomment", function () {
  let thisId = $(this).attr("data-id");
  $("#h3").show();

  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      title: $("#titleinput").val(),
      body: $("#bodyinput").val()
    }
  })
    .then(function (data) {
      $("#comments").empty();
    });

  $("#titleinput").val("");
  $("#bodyinput").val("");
});

$(document).on("click", "#nevermind", function () {
  $("#h3").show();
  $("#titleinput").val("");
  $("#bodyinput").val("");
  $("#comments").empty();
})