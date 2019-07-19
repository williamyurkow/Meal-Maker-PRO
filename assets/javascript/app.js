console.log("Working...");

// $(document).ready(function() {
//     console.log("Checking jQuery is loading currently" + $.ajax);
//   });

//Start up our AOS library
AOS.init();

let firebaseConfig = {
    apiKey: "AIzaSyDpd7FElDFfaFFEoOnS4lI3TYCiFyJYnU8",
    authDomain: "mealmaker-247017.firebaseapp.com",
    databaseURL: "https://mealmaker-247017.firebaseio.com",
    projectId: "mealmaker-247017",
    storageBucket: "",
    messagingSenderId: "432422444738",
    appId: "1:432422444738:web:f51b85e4c599cec0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function displayVideoSearch(video) {

    let queryURL = " https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + video + "&topicId=%2Fm%2F04rlf&type=video&key=AIzaSyBipW9YvsKlnNv2sz0P6Mhe8HOS_p7o4RA";
    console.log("This is our query link" + queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // console.log(response);

        //Get further into object so we see our responses object
        let videoObject = response.items;

        console.log(videoObject);

        //Ok, now we need to grab what we want from each item :)
        videoObject.forEach(function (entry) {
            console.log(entry);

            let videoTitle = entry.snippet.title;
            let videoLink = "https://www.youtube.com/watch?v=" + entry.id.videoId;

            let videoDescription = entry.snippet.description;
            let videoPublished = entry.snippet.publishedAt;
            let imageURL = entry.snippet.thumbnails.medium.url;

            //Let's check all these 
            console.log("video title is " + videoTitle);
            console.log("Video description is " + videoDescription);
            console.log("Video published date is " + videoPublished);
            console.log("Video ID is " + videoLink);

            //Ok, now let's make an image element and use one of the urls
            let videoImage = $("<img>");
            videoImage.attr("src", imageURL);
            videoImage.attr("height", "180");
            videoImage.attr("width", "320");

            // <input id="check1" type="checkbox" checked="checked">
            //     <label for="check1">Check me</label>

            let checkBox = $('<input id="check" type="checkbox" checked="checked">' + '<label for="check1">Add to Favorites</label>');

            console.log(checkBox);

            //Check this
            console.log(videoImage);

            //Let's create a list element instead
            let newBullet = $("<li>");
            let span = $("<span>");

            newBullet.append(span);

            // //make a div to add all this data to the page
            // let newDiv = $("<div>");

            //Use a new technology, animation on scroll for some cool affects
            newBullet.attr("data-aos", "flip-left");

            newBullet.append(videoImage, "<h3>" + videoTitle + "</h3>",
                "<h5>" + videoPublished + "</h5>",
                "<p>" + videoDescription + "</p>"
                + "<br>");

            $("#video-choose").prepend(newBullet);

        });
    });
};


//On click for submitting a search query
$("#video-button").on("click", function () {
    let searchTerm = $("#video-input").val();

    //make sure we're seeing event
    console.log(searchTerm);

    //send to our API call function
    displayVideoSearch(searchTerm);
});


//On click to clear page of all results
$("#clear-button").on("click", function () {

    //make sure it's seeing event
    console.log("Button working!");

    //empty div of all search results!
    $("#video-choose").empty();

});


