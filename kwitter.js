  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC8PwFtwIWmb0VMhmoh_f-sfO1Yd4vOBlg",
    authDomain: "quitter-92440.firebaseapp.com",
    databaseURL: "https://quitter-92440-default-rtdb.firebaseio.com",
    projectId: "quitter-92440",
    storageBucket: "quitter-92440.appspot.com",
    messagingSenderId: "911858989218",
    appId: "1:911858989218:web:32748690c5d3cc90e43ffb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name=document.getElementById("user_name").value;

    localStorage.setItem("user_name",user_name);

    window.location="kwitter_room.html"
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
        });
}