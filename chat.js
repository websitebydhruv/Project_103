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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



