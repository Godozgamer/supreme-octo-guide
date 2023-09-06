var firebaseConfig = {
      apiKey: "AIzaSyAASMTCpgxpwUGeZX7u1noCyRYmGKKfzQc",
      authDomain: "kwitter-a3f6d.firebaseapp.com",
      projectId: "kwitter-a3f6d",
      storageBucket: "kwitter-a3f6d.appspot.com",
      messagingSenderId: "833886311113",
      appId: "1:833886311113:web:5ad9edeae5aff1374e3318"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
