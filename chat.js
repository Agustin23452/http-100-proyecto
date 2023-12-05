const firebaseConfig = {
    apiKey: "AIzaSyAopxuFXSaNh68Rk29mRUoNgqhoc-Dvcjc",
    authDomain: "proyect-dd326.firebaseapp.com",
    projectId: "proyect-dd326",
    storageBucket: "proyect-dd326.appspot.com",
    messagingSenderId: "903639807390",
    appId: "1:903639807390:web:9085714fc112ee63e6128f",
    measurementId: "G-CEW7SGNPEV"
  };
  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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



