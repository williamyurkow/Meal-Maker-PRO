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


    var table = $("<table/>").addClass('tableGenerator');
    $.each(x, function (rowIndex, r) {
      var row = $("<tr/>");
      $.each(r, function (colIndex, c) {
        row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
      });
      table.append(row);
      $("#displayArea").append(table);
    });
  });





      // $.getJSON(url , function(data) {
      //   var tbl_body = "";
      //   var odd_even = false;
      //   $.each(data, function() {
      //       var tbl_row = "";
      //       $.each(this, function(k , v) {
      //           tbl_row += "<td>"+v+"</td>";
      //       })
      //       tbl_body += "<tr class=\""+( odd_even ? "odd" : "even")+"\">"+tbl_row+"</tr>";
      //       odd_even = !odd_even;               
      //   })
      //   $("#target_table_id tbody").html(tbl_body);






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// x = { table: "recipes", limit: 20 };
// dbParam = JSON.stringify(x);
// xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     myObj = JSON.parse(this.responseText);
//     txt += "<table border='1'>"
//     for (x in myObj) {
//       txt += "<tr><td>" + myObj[x].name + "</td></tr>";
//     }
//     txt += "</table>"
//     $("#displayArea").innerHTML = txt;
//   }
// }
// xmlhttp.open("POST", "json_demo_db_post.php", true);
// xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xmlhttp.send("x=" + dbParam);




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