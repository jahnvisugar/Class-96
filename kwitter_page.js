//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCRAMmxDn5xZUN1fpBXwnhWq_sHQs4MLG0",
      authDomain: "kwitter-66573.firebaseapp.com",
      databaseURL: "https://kwitter-66573-default-rtdb.firebaseio.com",
      projectId: "kwitter-66573",
      storageBucket: "kwitter-66573.appspot.com",
      messagingSenderId: "91959221894",
      appId: "1:91959221894:web:2b8460eb938caaf9c4bb07"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var username = localStorage.getItem("user_name");
    var roomname = localStorage.getItem("room_name");

    function send()
    {
          var msg = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
      name: username, 
      message: msg, 
      likes:0
      });
      document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
