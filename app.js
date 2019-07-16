console.log("connected!!");

//var queryURL =  "https://api.edamam.com/search?q=chicken&app_id=$8c2351e7&app_key=$087d2a17e75845fff9e46f193204a611";


var queryUrl = "https://www.food2fork.com/api/search?key=d147266311e0da945fc52fdec229ef68&q=chicken%20breast&limit=10"
$.ajax({
  url: "http://104.200.17.235:8081/cors/",
  method: "POST",
  contentType: "application/json",
  data: JSON.stringify({
    url: queryUrl

  })
})

  .done(function(response) {

    console.log(response); 
    
    var results = response.data; 
    var recipes = $("<img>");
    recipes.attr("src", results);
    recipes.attr("alt", "recipes");
 

    $("#displayArea").append(recipes);

  });

  //recipe: List of Recipe Parameters ->
	// image_url: URL of the image
	// source_url: Original Url of the recipe on the publisher's site
	// f2f_url: Url of the recipe on Food2Fork.com
	// title: Title of the recipe
	// publisher: Name of the Publisher
	// publisher_url: Base url of the publisher
	// social_rank: The Social Ranking of the Recipe (As determined by our Ranking Algorithm)
	// ingredients: The ingredients of this recipe