import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";





const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        location = "../pages/sell.html"
    } else {

        const auth = getAuth();
        
        let signup = document.querySelector("#signup-button")
        signup.addEventListener("click",createUserFunction)
        let email = document.querySelector("#email")        
        let password = document.querySelector("#password")        
        
        function createUserFunction (){

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                  console.log("user created")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                  console.log("Oops usern not created")
                    
                });

        }    





    }
});










