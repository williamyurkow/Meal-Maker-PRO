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



// let myFav = sessionStorage.getItem('favs');

// // o Iw-Ryfmx4UM - testing to see how array if statement held up (works)
let myFav = ["Iw-Ryfmx4UM"];


//let's check this storage
console.log(myFav);


//we need to loop through our array
function checkFavorites(entry) {

    //let's check if we have our array stored in a session storage when window loads
    if (myFav.isArray || myFav.length) {
        console.log("This variable has a value" + myFav);


        //if it does, let's grab our data from Firebase
        firebase.database().ref().on("child_added", function (childSnapshot) {

            //Let's check what we get back
            console.log(childSnapshot);


            //for each item in our array
            myFav.forEach(entry)
            {

                //if our childsnapshot's id is equal to our item in our array
                if (childSnapshot.val().id === entry) {

                    favoriteImage = $("<img>");
                    favoriteImage.attr("src", this.imageURL);

                    let favoriteLink = "<a href=https://www.youtube.com/watch?v="
                        + this.id + '" ' + 'target="_blank">' + this.title + "</a>";

                    //again, just checking to see what comes back
                    console.log(favoriteLink);

                    //add all our video data to the page ID
                    $("#favorites").append(favoriteImage + "<br>"
                        + "<br>" + favoriteLink + "<br>"
                        + "<br>" + this.published + "<br>"
                        + "<br>" + this.description)

                    //if we don't have a match let us know what the value is
                } else console.log("No video match" + this.val());
            };


            // Handle the errors
        }, function (errorObject) {
            console.log("Errors handled: " + errorObject.code);

        });
    };

};

checkFavorites();
