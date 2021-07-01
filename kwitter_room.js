
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC0frykYf5Kyy1TjKpNhzg-6_WMrohou48",
      authDomain: "kwitter-8d961.firebaseapp.com",
      databaseURL: "https://kwitter-8d961-default-rtdb.firebaseio.com",
      projectId: "kwitter-8d961",
      storageBucket: "kwitter-8d961.appspot.com",
      messagingSenderId: "302575514719",
      appId: "1:302575514719:web:c27d579b1da33e222817ea"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+" !" ;
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
      
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("room name - "+Room_names);   
        row = "<div class='room_name' id = "+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div<hr>";
        document.getElementById("output").innerHTML +=row ;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
      
}