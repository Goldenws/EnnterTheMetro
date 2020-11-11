const currentImage = document.querySelector('#image');
const images = ['img/pic1.jpeg','img/pic2.jpeg','img/pic3.jpeg','img/pic4.jpeg'];
function changeImage(){

    console.log("Hello from script file!");
    let rnd = Math.floor(Math.random() * images.length);
    currentImage.src = images[rnd];
    console.log(rnd);
}