let imgUrl = localStorage.getItem('img') || 'images/Naruto.jpeg';

let Img = document.querySelector("img");
Img.setAttribute('src',imgUrl);

export default function IMG (FormState) {
    let Img = document.querySelector("img");
    let imgInput = document.getElementById("image");
    document.getElementById("img-btn").addEventListener("click",e => {
        let reader = new FileReader();
        reader.onload = function(e) {
            Img.setAttribute('src', e.target.result);
            FormState.value.img = e.target.result;
            localStorage.setItem('img',e.target.result);
        }
        reader.readAsDataURL(imgInput.files[0]);
    })
}