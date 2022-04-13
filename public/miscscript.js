// const user = require("./users.json");
// console.log("user");
// document.querySelector('.avatar').src = `${user[0].userpicture}

const modal = document.getElementById("profForm")
const book = document.getElementById("bookCards")

function closemodal(){
    document.getElementById("profForm").classList.remove("open")
    document.getElementById("profForm").classList.add("close")
}

function displayModal(){
    modal.classList.add("open")
}