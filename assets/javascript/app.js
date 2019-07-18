console.log("Working...");

// $(document).ready(function() {
//     console.log("Checking jQuery is loading currently" + $.ajax);
//   });

AOS.init();

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

            //Check this
            console.log(videoImage);

            let newDiv = $("<div>");

            newDiv.attr("data-aos", "flip-left");

            newDiv.append(videoImage, "<h3>" + videoTitle + "</h3>",
                "<h5>" + videoPublished + "</h5>",
                "<p>" + videoDescription + "</p>"
                + "<br>");

            $("#video-choose").prepend(newDiv);


        });

    });

};



$("#video-button").on("click", function () {
    let searchTerm = $("#video-input").val();
    

    console.log(searchTerm);
    displayVideoSearch(searchTerm);


});
