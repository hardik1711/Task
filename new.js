  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyADUNLPOxnW1rGlO0KFVqeMt31kRAeyQCM",
    authDomain: "form-71a11.firebaseapp.com",
    projectId: "form-71a11",
    storageBucket: "form-71a11.appspot.com",
    messagingSenderId: "719084160889",
    appId: "1:719084160889:web:bfffb802e83eacda6891a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth= firebase.auth();


  function signin(){
 
    var Email=document.getElementById("Email");
    var password=document.getElementById("password");

    const promise =auth.createUserWithEmailandPassword(Email.value,password.value);
    promise.catch(=> alert(e.message));
    alert("Signed in");





  }
