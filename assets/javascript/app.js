AOS.init();
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

    let queryURL = " https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + video
        + "&topicId=%2Fm%2F04rlf&type=video&key=AIzaSyBipW9YvsKlnNv2sz0P6Mhe8HOS_p7o4RA";
    console.log("This is our query link" + queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // console.log(response);

        //Get further into object so we see our responses object
        let videoObject = response.items;

        console.log(videoObject);


        // Ok, now we need to grab what we want from each item:)
        videoObject.forEach(function (entry) {
            // console.log(entry);

            // let videoTitle = entry.snippet.title;
            let videoLink = "<a href=https://www.youtube.com/watch?v="
                + entry.id.videoId + '" ' + 'target="_blank">' + entry.snippet.title + "</a>";
            let videoTitle = entry.snippet.title;
            let videoDescription = entry.snippet.description;
            let videoPublished = entry.snippet.publishedAt;
            let imageURL = entry.snippet.thumbnails.medium.url;
            let videoId = entry.id.videoId;

            // //Let's check all these 
            // console.log("video title is " + videoTitle);
            // console.log("Video description is " + videoDescription);
            // console.log("Video published date is " + videoPublished);
            // console.log("Video ID is " + videoLink);

            //Let's store this into our Firebase! 
            firebase.database().ref().push({
             id: videoId,
             title: videoTitle,
             description: videoDescription,
             published: videoPublished,
             imageURL: imageURL,
             link: videoLink,
             });

            //Ok, now let's make an image element and use one of the urls
            let videoImage = $("<img>");
            videoImage.attr("src", imageURL);
            videoImage.attr("height", "180");
            videoImage.attr("width", "320");

            //make a div to add all this data to the page
            let newDiv = $('<div id="video-results">');


            //Use a new technology, animation on scroll for some cool affects
            newDiv.attr("data-aos", "flip-left");
            newDiv.attr("class", "video-results");
           

            let newButton = $("<a>Add to Favorites!</a>");
            newButton.attr("class", "btn btn-primary btn-xl");
            newButton.attr("class", "btn");
            newButton.attr("id", entry.id.videoId);


            newDiv.append(videoImage,"<br>", "<br>", "<h3>" + videoLink + "</h3>",
                "<br>","<h5>" + videoPublished + "</h5>",
                "<p>" + videoDescription + "</p>"
                + "<br>", newButton, "<br>", "<br>");

            $("#video-choose").prepend(newDiv);

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



$(document).on("click", ".btn", function () {

    //check to see event is working and links blah just trying to make changes
    console.log("Favorites button working!");

    favoriteVideo = $(this).attr('id');

    console.log("This is the video " + favoriteVideo);

    



});


