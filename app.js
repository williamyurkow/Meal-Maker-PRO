console.log("connected!!");

var queryUrl = "https://www.food2fork.com/api/search?key=d147266311e0da945fc52fdec229ef68&q=chicken%20breast";

$.ajax({
  url: "http://104.200.17.235:8081/cors/",
  method: "POST",
  contentType: "application/json",
  data: JSON.stringify({
    url: queryUrl

  })
})

  .done(function (response) {

    console.log(response);

    var results = JSON.parse(response);

    console.log(results);

    var x = results.recipes;
    // var x = $("<h1>").text(response.publisher);
    console.log(x);
    var table = $("<table>");

    $.each(x, function (i, entry) {

      console.log(entry);

      console.log(entry.title);



      $(table).append(
        "<tr>" +
        `<td><img class="tableImage" src="${entry.image_url}"><img></td>` +
        "<td>" + entry.title + "</td>" +
        "<td>" + entry.source_url + "</td>" +
        "</tr>"
      );

    });
    $("#displayArea").append(table)
  });

  // $("#submitBtn").on("click", function(){

  // }
