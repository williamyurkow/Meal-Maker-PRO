console.log("Favorites JS working!");

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



let myFav = sessionStorage.getItem('favs');

//let's check this storage
console.log(myFav);



$(window).on("load", function () {

    //let's check if we have our array stored in a session storage when window loads
    if (typeof (myFav) != "" ) {
        

        //if it does, let's grab our data from Firebase
        firebase.database().ref().on("child_added", function (childSnapshot) {

            myFav.forEach(entry)
            {
                //Let's check what we get back
                console.log(entry);

                favoriteImage = $("<img>");
                favoriteImage.attr("src", childSnapshot().val().imageURL);


                let favoriteLink = "<a href=https://www.youtube.com/watch?v="
                    + childSnapshot().val().id + '" ' + 'target="_blank">' + childSnapshot.val().title + "</a>";

                //again, just checking to see what comes back
                console.log(favoriteLink);

                if (childSnapshot.val().id === entry.id) {
                    $("#favorites").append(favoriteImage + "<br>"
                        + "<br>" + favoriteLink + "<br>"
                        + "<br>" + childSnapshot.val().published + "<br>"
                        + "<br>" + childSnapshot.val().description)
                } else console.log("No video match");
            };


            // Handle the errors
        }, function (errorObject) {
            console.log("Errors handled: " + errorObject.code);

        });
    };

});
