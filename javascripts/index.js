import { db } from "./firebaseconfig.js";
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

// Variables 
let productBox = document.querySelector("#product-box")
// let productName = document.querySelector("#prod-box-name")
// let productDescription = document.querySelector("#prod-box-des")
// let productPrice = document.querySelector("#prod-box-price")


RunIndexFunction()
function RunIndexFunction() {
    getItems()

}








function getItems() {

    const q = query(collection(db, "products"), where("uid", "!=", "0000000"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {

            let data = doc.data()
            // let productName = data.name
            // let productDescription = data.description
            // let productPrice = data.price
            productBox.innerHTML += `
<div class="box" onclick="clickedItem()">
<div id='img-wrap'>
<img src="${data.img}" id="product-img">
</div>
<h2 id="prod-box-name"> ${data.name}</h2>
<p id="prod-box-des">${data.description}</p>
    <h3 id="prod-box-price">${"Rs-/" + data.price}</h3>
    <button id="buy-now">Buy Now</button>
</div>
`




        });
    });

}


function clickedItem  () {
    alert(`${doc.id()}`)


}


window.clickedItem = clickedItem