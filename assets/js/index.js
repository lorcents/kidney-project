var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
    firebase.auth()

    .signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log(token)
        console.log(user)
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error.code)
        console.log(error.message)
    });
}



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