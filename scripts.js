function numberAleatorio(){

const min = math.ceil(document.querySelector(".input-min").value)
const max = math.floor(document.querySelector(".input-max").value)

const result= Math.floor(Math.random() * (max - min + 1)) + min;

alert(result)
}