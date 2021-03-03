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

 // const auth= firebase.auth();


  function fun(){
 
    var Email=document.getElementById("Email").value;
    var password=document.getElementById("password").value;

    /*const promise =auth.createUserWithEmailandPassword(Email.value,password.value);
    promise.catch(e => alert(e.message));
    alert("Signed in");*/
    firebase.auth().signInWithEmailAndPassword(Email,password).catch(function(error){
         var errorcode =error.code;
    var errormessage =error.message;

    window.alert("error" + errormessage)


    });

 





  }
