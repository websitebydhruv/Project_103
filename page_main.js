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

//send function -------->

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
  });

  document.getElementById("msg").value = "";
}