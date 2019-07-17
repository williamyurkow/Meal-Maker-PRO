console.log("Working...");  

// $(document).ready(function() {
//     console.log("Checking jQuery is loading currently" + $.ajax);
//   });

let userVideos = [];

function displayVideoSearch(video) {
    // let searchTerm = $("#video-input").val();
    let queryURL = " https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + video + "&topicId=%2Fm%2F04rlf&type=video&key=AIzaSyBipW9YvsKlnNv2sz0P6Mhe8HOS_p7o4RA";
    console.log("This is our query link" + queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log("This is the API response" + response);
        console.log(response);

        videoIds = JSON.stringify(response.items[0].id.videoId);
        videoLink = "https://www.youtube.com/watch?v=" + videoIds;
        
        console.log(videoIds);
        console.log (videoLink);

        // $("#youtube-link").click(function () {
        //     document.location.href = (videoLink.replace(/['"]+/g, ''))
        // });

        console.log(videoLink.replace(/['"]+/g, ''));
        // console.log(videoIds);
        console.log(response.items[0].snippet.title);
        console.log(videoIds.replace(/['"]+/g, ''));
    });
};
displayVideoSearch("utah");