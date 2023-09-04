// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC4KWtpRDOwitNhz19NBfyaUhgvMRTOAt4",
      authDomain: "letschatwebapp-6d83f.firebaseapp.com",
      databaseURL: "https://letschatwebapp-6d83f-default-rtdb.firebaseio.com",
      projectId: "letschatwebapp-6d83f",
      storageBucket: "letschatwebapp-6d83f.appspot.com",
      messagingSenderId: "295882726195",
      appId: "1:295882726195:web:18d6efadc1ebacf1cc7c46",
      measurementId: "G-QHLYX4VKV8"
    };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.seItem("room_name", room_name)

window.location = "kwitter_page.html"; 
}

user_name= localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     
     console.log("Room Name - "+ Room_names);
     row = "<div class = 'room_name' id="+Room_names+"onclick='redirecttoRoomName(this.id)'>#" + Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
     });});};

     function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

localStorage.getItem("user_name").innerHTML;