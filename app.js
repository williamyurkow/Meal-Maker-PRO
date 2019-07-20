console.log("connected!!");


var queryURL = "https://www.food2fork.com/api/search?key=d147266311e0da945fc52fdec229ef68&q=chicken%20breast";

  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  })
  
  // .then(function (res) {
  //   console.log(res);
  // })

  .done(function (response) {

    console.log(response);

    var results = JSON.parse(response);

    console.log(results);

    var x = results.recipes;

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
      $("#displayArea").append(table)

      // This function handles events where one button is clicked
      $(".btn").on("click", function (event) {
        console.log("working!!");
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // This line grabs the input from the textbox
        var meals = $("#exampleFormControlInput1").val().trim();
  
        // Adding the movie from the textbox to our array
        entry.push(meals);
        console.log(meals);
  
      });
    });
    
  });













      ///////Click function 1////////////////////////////
      //On click for submitting a search query
      //   $(".btn").on("click", function () {
      //     console.log("working!!!!!");
      //     let searchTerm = $("#exampleFormControlInput1").val();

      //     //make sure we're seeing event
      //     console.log(searchTerm);

      //     //send to our API call function
      //     //(searchTerm);
      //   });
      //   Collapse
      // });



      ////////////////////////////click function 2: gipy hw

      // $("#submitBtn").on("click", function(){
      //   var action = $("#submit").val();
      // //call function
      //   addNewButton();
      // ////////////////////////////click function 3: log movie name solved

      // // This function handles events where one button is clicked
      // $(".btn").on("click", function(event) {
      //   // Preventing the buttons default behavior when clicked (which is submitting a form)
      //   event.preventDefault();
      //   // This line grabs the input from the textbox
      //   var meals = $("#exampleFormControlInput1").val().trim();

      //   // Adding the movie from the textbox to our array
      //   movies.push(meals);

      //   // Calling renderButtons which handles the processing of our movie array
      //   renderButtons();
      // // Function for displaying the movie info
      //       // We're adding a click event listener to all elements with the class "movie"
      //       // We're adding the event listener to the document because it will work for dynamically generated elements
      //       // $(".movies").on("click") will only add listeners to elements that are on the page at that time
      //       $(document).on("click", ".movie", alertMovieName);

      // });

      ////////////////////////////click function 4: click json solved


      // // This function handles events where one button is clicked
      // $("#add-movie").on("click", function(event) {
      //   event.preventDefault();

      //   // This line grabs the input from the textbox
      //   var movie = $("#movie-input").val().trim();

      //   // Adding the movie from the textbox to our array
      //   movies.push(movie);
      //   console.log(movies);

      //   // Calling renderButtons which handles the processing of our movie array
      //   renderButtons();
      // });

      // // Function for displaying the movie info
      // // Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
      // $(document).on("click", ".movie", displayMovieInfo);

      // // Calling the renderButtons function to display the initial buttons
      // renderButtons();

      ////////////////////////////click function 5: bands in town solved

      // Event handler for user clicking the select-artist button
      // $("#select-artist").on("click", function (event) {
      //   // Preventing the button from trying to submit the form
      //   event.preventDefault();
      //   // Storing the artist name
      //   var inputArtist = $("#artist-input").val().trim();

      //   // Running the searchBandsInTown function(passing in the artist as an argument)
      //   searchBandsInTown(inputArtist);
      // });

      // ////////////////////////////click function 6: movie json dump solution

      // $("#find-movie").on("click", function (event) {

      //   // event.preventDefault() can be used to prevent an event's default behavior.
      //   // Here, it prevents the submit button from trying to submit a form when clicked
      //   event.preventDefault();

      //   // Here we grab the text from the input box
      //   var movie = $("#movie-input").val();

      //   // Here we construct our URL
      //   var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

      //   // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
      //   // and display it in the div with an id of movie-view

      //   // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

      //   $.ajax({
      //     url: queryURL,
      //     method: "GET"
      //   }).then(function (response) {
      //     $("#movie-view").text(JSON.stringify(response));
      //   });
      // });