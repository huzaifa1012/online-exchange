
import { app, db, storage, auth } from "./firebaseconfig.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";









onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;


        // variables
        let productName = document.querySelector("#prod-name")
        let productDesc = document.querySelector("#prod-desc")
        let productPrice = document.querySelector("#prod-price")
        let productImage = document.querySelector("#prod-image")
        let addProductButton = document.querySelector("#add-product")
        addProductButton.addEventListener("click", addImage)
        async function addImage() {

            let file = productImage.files[0]
            const storageRef = ref(storage, `images/${file.name}`);

            try {
                await uploadBytes(storageRef, file).then((snapshot) => {
                    console.log('picture Uploaded');
                });
                let Url = await getDownloadURL(storageRef);
                await console.log(Url)

                const docRef = await addDoc(collection(db, "products"), {
                    name: productName.value,
                    description: productDesc.value,
                    price: productPrice.value,
                    uid: 123,
                    img: Url,
                });
            }
            catch (error) {
                alert("Sorry Somethings Wrong")
            }
        }







    } else {
     
        location = "../pages/login.html"
    
    }


})

