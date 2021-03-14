function login() {
    var userEmail = document.getElementById("email-auth").value;
    var userPass = document.getElementById("pass-auth").value;


    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
        .then((userCredential) => {
            window.location.href = "././admin/index.html";
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Error :" + error.message);
        });
}