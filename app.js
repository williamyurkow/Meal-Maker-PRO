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

    $.each(x, function(i, entry){
     
      console.log(entry);

      console.log(entry.title);

  
    
      $(table).append(
          "<tr>" +
            "<td>" + entry.title + "</td>" +
            "<td>" + entry.source_url + "</td>" +
            //"<td>"+  +"</td>" +
          "</tr>"
      );
   
    // if ($("#displayArea tbody").length == 0) {
    //   $("#displayArea").append("<tbody></tbody>");
    // }
  
  });
  $("#displayArea").append(table)
  });
/////////////////////////////////////////////////////////////////////////////////////////////////

  //   var header = $("<th>");
  //   var table = $("<table/>").addClass('tableGenerator');
  
  //   $.each(x, function (rowIndex, r) {
    
  //     var row = $("<tr/>");

  //     $.each(r, function (colIndex, c) {
  //       row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
  //     });

  //     table.append(row);
  //     $("#displayArea").append(header);
  //     $("#displayArea").append(table);
  //   });
  // });
/////////////////////////////////////////////////////////////////////
  
/////////////////////////////////////////////////////////////////////////////////////////////////

//document.getElementById("demo").innerHTML = obj.name + ", " + obj.age; 
//$("#displayArea").html(count.recipes.publisher);

//console.log(results[0]);

//   for (var i = 0; i < x.length; i++) {


//     console.log(x.);

//    }
// });

//   var reciPe = $("<img>");



//   reciPe.attr("src", results);
//   reciPe.attr("alt", "recipes");


//   $("#displayArea").append(reciPe)