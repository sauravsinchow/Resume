// Intro /////////////////////////////////
export default function INTRO (FormState){
    let name = document.getElementById("name")
    let btn = document.getElementById("intro-btn")
    let role = document.getElementById("role")
    let overviewDesc = document.getElementById("overview-desc");

    name.addEventListener('change',e => {
        FormState.value.name = e.target.value;
    })

    role.addEventListener('change',e => {
        FormState.value.role = e.target.value;
    })

    overviewDesc.addEventListener('change',e => {
        FormState.value.desc = e.target.value;
    })

    btn.addEventListener("click",()=> {
        document.querySelector(".name h1").innerHTML = FormState.value.name;
        document.querySelector(".name p").innerHTML = FormState.value.role;
        document.querySelector(".visible.overview p").innerHTML = FormState.value.desc;

        localStorage.setItem('name',FormState.value.name);
        localStorage.setItem('role',FormState.value.role);
        localStorage.setItem('desc',FormState.value.desc);

        name.value="";
        role.value="";
        overviewDesc.value="";
    })
}

