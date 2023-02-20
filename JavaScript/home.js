
import { clickResponse } from "./functions.js"
import { clickResponse2 } from "./functions.js"
import { clickResponse3 } from "./functions.js"
import { clickResponse4 } from "./functions.js"
import { clickResponse5 } from "./functions.js"                    // Importamos funciones para hacerlo mas organizado.
import { clickResponse6 } from "./functions.js"
import { clickResponse7 } from "./functions.js"
import { clickResponse8 } from "./functions.js"
import { clickResponse9 } from "./functions.js"

let buyButton = document.getElementById("cart_btn")
let buyButton_2 = document.getElementById("cart_btn_2")
let buyButton_3 = document.getElementById("cart_btn_3")
let buyButton_4 = document.getElementById("cart_btn_4")
let buyButton_5 = document.getElementById("cart_btn_5")         
let buyButton_6 = document.getElementById("cart_btn_6") 
let buyButton_7 = document.getElementById("cart_btn_7")
let buyButton_8 = document.getElementById("cart_btn_8")
let buyButton_9 = document.getElementById("cart_btn_9")

buyButton.addEventListener("click", clickResponse)                 // Tomamos los botones del HTML y al escucharlos les asignamos un evento.
buyButton_2.addEventListener("click", clickResponse2)
buyButton_3.addEventListener("click", clickResponse3)
buyButton_4.addEventListener("click", clickResponse4)
buyButton_5.addEventListener("click", clickResponse5)
buyButton_6.addEventListener("click", clickResponse6)
buyButton_7.addEventListener("click", clickResponse7)
buyButton_8.addEventListener("click", clickResponse8)
buyButton_9.addEventListener("click", clickResponse9)

buyButton.onclick = () => {
    alert("T-Shirt added to your cart succesfully!")
    cart.innerHTML = `
    <center>
        <div class="container">
            <h2 class="fs-1 fst-italic fw-bold text-warning border rounded border-warning bg-black">
                Cart
            </h2>
            <br>
            <div class="row bg-light rounded">
                <div class="col">
                    <h2 class="text-black border-bottom">PRODUCT</h2>
                    <img src="${products[0].image}" class="w-25">
                </div>                                                                   
                <div class="col">
                    <h2 class="text-black border-bottom">PRICE</h2>
                    <br>
                    <center><h2 class="text-dark">${products[0].price}</h2></center>
                </div>
            </div>
        </div>
    </center>`
    const sessionSave = (key, value) => {sessionStorage.setItem(key, value)}
    for(const product1 of products){                                                     //Con este session storage guardamos el key, value del producto que eligio
        sessionSave(products[0].product, products[0].price)
    }
}

buyButton_2.onclick = () => {
    alert("Pants added to your cart succesfully!")
    cart.innerHTML = `
    <center>
        <div class="container">
            <h2 class="fs-1 fst-italic fw-bold text-warning border rounded border-warning bg-black">
                Cart
            </h2>
            <br>
            <div class="row bg-light rounded">
                <div class="col">
                    <h2 class="text-black border-bottom">PRODUCT</h2>
                    <img src="${products[1].image}" class="w-25">
                </div>
                <div class="col">
                    <h2 class="text-black border-bottom">PRICE</h2>
                    <br>
                    <center><h2 class="text-dark">${products[1].price}</h2></center>
                </div>
            </div>
        </div>
    </center>`
    const sessionSave2 = (key, value) => {sessionStorage.setItem(key, value)}
    for(const product2 of products){                                                       
        sessionSave2(products[1].product, products[1].price)
    }
}

buyButton_3.onclick = () => {
    alert("Socks added to your cart succesfully!")
    cart.innerHTML = `
    <center>
        <div class="container">
            <h2 class="fs-1 fst-italic fw-bold text-warning border rounded border-warning bg-black">
                Cart
            </h2>
            <br>
            <div class="row bg-light rounded">
                <div class="col">
                    <h2 class="text-black border-bottom">PRODUCT</h2>
                    <img src="${products[2].image}" class="w-25">
                </div>
                <div class="col">
                    <h2 class="text-black border-bottom">PRICE</h2>
                    <br>
                    <center><h2 class="text-dark">${products[2].price}</h2></center>
                </div>
            </div>
        </div>
    </center>`
    const sessionSave3 = (key, value) => {sessionStorage.setItem(key, value)}
    for(const product3 of products){
        sessionSave3(products[2].product, products[2].price)
    }
}

buyButton_4.onclick = () => {
    alert("Boxers added to your cart succesfully!")
    cart.innerHTML = `
    <center>
        <div class="container">
            <h2 class="fs-1 fst-italic fw-bold text-warning border rounded border-warning bg-black">
                Cart
            </h2>
            <br>
            <div class="row bg-light rounded">
                <div class="col">
                    <h2 class="text-black border-bottom">PRODUCT</h2>
                    <img src="${products[3].image}" class="w-25">
                </div>
                <div class="col">
                    <h2 class="text-black border-bottom">PRICE</h2>
                    <br>
                    <center><h2 class="text-dark">${products[3].price}</h2></center>
                </div>
            </div>
        </div>
    </center>`
    const sessionSave4 = (key, value) => {sessionStorage.setItem(key, value)}
    for(const product4 of products){
        sessionSave4(products[3].product, products[3].price)
    }
}

buyButton_5.onclick = () => {
    alert("Belt added to your cart succesfully!")
    cart.innerHTML = `
    <center>
        <div class="container">
            <h2 class="fs-1 fst-italic fw-bold text-warning border rounded border-warning bg-black">
                Cart
            </h2>
            <br>
            <div class="row bg-light rounded">
                <div class="col">
                    <h2 class="text-black border-bottom">PRODUCT</h2>
                    <img src="${products[4].image}" class="w-25">
                </div>
                <div class="col">
                    <h2 class="text-black border-bottom">PRICE</h2>
                    <br>
                    <center><h2 class="text-dark">${products[4].price}</h2></center>
                </div>
            </div>
        </div>
    </center>`
    const sessionSave5 = (key, value) => {sessionStorage.setItem(key, value)}
    for(const product5 of products){
        sessionSave5(products[4].product, products[4].price)
    }
}  

buyButton_6.onclick = () => {
    alert("Hat added to your cart succesfully!")
    cart.innerHTML = `
    <center>
        <div class="container">
            <h2 class="fs-1 fst-italic fw-bold text-warning border rounded border-warning bg-black">
                Cart
            </h2>
            <br>
            <div class="row bg-light rounded">
                <div class="col">
                    <h2 class="text-black border-bottom">PRODUCT</h2>
                    <img src="${products[5].image}" class="w-25">
                </div>
                <div class="col">
                    <h2 class="text-black border-bottom">PRICE</h2>
                    <br>
                    <center><h2 class="text-dark">${products[5].price}</h2></center>
                </div>
            </div>
        </div>
    </center>`
    const sessionSave6 = (key, value) => {sessionStorage.setItem(key, value)}
    for(const product6 of products){
        sessionSave6(products[5].product, products[5].price)
    }
}

buyButton_7.onclick = () => {
    alert("Shoes added to your cart succesfully!")
    cart.innerHTML = `
    <center>
        <div class="container">
            <h2 class="fs-1 fst-italic fw-bold text-warning border rounded border-warning bg-black">
                Cart
            </h2>
            <br>
            <div class="row bg-light rounded">
                <div class="col">
                    <h2 class="text-black border-bottom">PRODUCT</h2>
                    <img src="${products[6].image}" class="w-25">
                </div>
                <div class="col">
                    <h2 class="text-black border-bottom">PRICE</h2>
                    <br>
                    <center><h2 class="text-dark">${products[6].price}</h2></center>
                </div>
            </div>
        </div>
    </center>`
    const sessionSave7 = (key, value) => {sessionStorage.setItem(key, value)}
    for(const product7 of products){
        sessionSave7(products[6].product, products[6].price)
    }
}

buyButton_8.onclick = () => {
    alert("Hoody added to your cart succesfully!")
    cart.innerHTML = `
    <center>
        <div class="container">
            <h2 class="fs-1 fst-italic fw-bold text-warning border rounded border-warning bg-black">
                Cart
            </h2>
            <br>
            <div class="row bg-light rounded">
                <div class="col">
                    <h2 class="text-black border-bottom">PRODUCT</h2>
                    <img src="${products[7].image}" class="w-25">
                </div>
                <div class="col">
                    <h2 class="text-black border-bottom">PRICE</h2>
                    <br>
                    <center><h2 class="text-dark">${products[7].price}</h2></center>
                </div>
            </div>
        </div>
    </center>`
    const sessionSave8 = (key, value) => {sessionStorage.setItem(key, value)}
    for(const product8 of products){
        sessionSave8(products[7].product, products[7].price)
    }
}

buyButton_9.onclick = () => {
    alert("Gloves added to your cart succesfully!")
    cart.innerHTML = `
    <center>
        <div class="container">
            <h2 class="fs-1 fst-italic fw-bold text-warning border rounded border-warning bg-black">
                Cart
            </h2>
            <br>
            <div class="row bg-light rounded">
                <div class="col">
                    <h2 class="text-black border-bottom">PRODUCT</h2>
                    <img src="${products[8].image}" class="w-25">
                </div>
                <div class="col">
                    <h2 class="text-black border-bottom">PRICE</h2>
                    <br>
                    <center><h2 class="text-dark">${products[8].price}</h2></center>
                </div>
            </div>
        </div>
    </center>`
    const sessionSave9 = (key, value) => {sessionStorage.setItem(key, value)}
    for(const product9 of products){
        sessionSave9(products[8].product, products[8].price)
    }
}

import { products } from "./stock.js"                            

const localSave = (key, value) => {localStorage.setItem(key, value)}

for(const product of products){                                                    // Importamos el array de 'products' para guardarlo mediante Storage
    localSave(product.product, product.price, JSON.stringify(product))
}

















