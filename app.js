console.log("connected!!");

//var queryURL =  "https://api.edamam.com/search?q=chicken&app_id=$8c2351e7&app_key=$087d2a17e75845fff9e46f193204a611";


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
    //console.log(count.recipes.publisher);
    console.log(results);

    var x = results.recipes;
   
 
   // var x = $("<h1>").text(response.publisher);
    console.log(x);

x.forEach(function(entry){

  $("#displayArea").html(entry.title);
  console.log(entry.title);
});

  });












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


    https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=apple&api_key=d8aa2d87b4msh4ca44392d137fb0p1cdc1ejsnb193ac8316df;