import * as formHTML from './formHTML.js';
import INTRO from './Intro.js';
import SKILL from './Skill.js';
import EDU from './Edu.js';
import AWARD from './Award.js';
import EXP from './Exp.js';
import REF from './Ref.js';
import IMG from './Img.js';
import * as Fun from './BasicFun.js';

let DataModel = {
    name: localStorage.getItem('name') || 'Name',
    role: localStorage.getItem('role') || 'Role',
    desc: localStorage.getItem('desc') || 'Desc',
    eduList: JSON.parse(localStorage.getItem('edu')) || [],
    skillArray: JSON.parse(localStorage.getItem('list')) || [],
    awardList: JSON.parse(localStorage.getItem('award')) || [],
    expList: JSON.parse(localStorage.getItem('exp')) || [],
    refList: JSON.parse(localStorage.getItem('ref')) || [],
    imgUrl: localStorage.getItem('img') || 'images/Naruto.jpeg',
}

let FormState = {
    section:'select',
    value: {}
}

///// Topic Selector /////////////////////////

let topic = document.getElementById("topic");
let Topic;
let Form = document.getElementsByClassName('formContent')[0];
topic.addEventListener("change",()=>{
    Topic = topic.value;
    Form.innerHTML = formHTML[Topic];
    Form.classList.add(`${Topic}-form`);

    FormState.section = Topic;
    FormState.value = {};
    switch(Topic){
        case 'intro': 
            INTRO(FormState);
            break;
        case 'skill': 
            SKILL(FormState);
            break;
        case 'edu':
            EDU(FormState);
            break;
        case 'award':
            AWARD(FormState);
            break;
        case 'exp':
            EXP(FormState);
            break;
        case 'ref':
            REF(FormState);
            break;
        case 'img':
            IMG(FormState);
            break;
    }
})

//// OnLoad /////////
document.querySelector(".name h1").innerHTML = DataModel.name;
document.querySelector(".name p").innerHTML = DataModel.role;
document.querySelector(".visible.overview p").innerHTML = DataModel.desc;

DataModel.skillArray.forEach(skill => {
    let li = Fun.createElementE('li',skill.name,{'id':skill.id+'R'});
    document.querySelector(".experties ul").appendChild(li);
})

DataModel.eduList.forEach(edu => {
    let yearElement = Fun.createElementE('strong',edu.year);
    let instituteElement = Fun.createElementE('h3',edu.institute);
    let descElement = Fun.createElementE('p',edu.desc);
    let SubElement = Fun.createElementE('div','',{
        'class':'Sub',
        'id':edu.id+'R'
    });

    SubElement.appendChild(yearElement);
    SubElement.appendChild(instituteElement);
    SubElement.appendChild(descElement);
    
    document.querySelector(".education .content").appendChild(SubElement);
})

DataModel.awardList.forEach(award => {
    let titleElement = Fun.createElementE('h3',award.title);
    let descElement = Fun.createElementE('p',award.desc);
    let SubElement = Fun.createElementE('div','',{
        'class':'Sub',
        'id':award.id+'R'
    });

    SubElement.appendChild(titleElement);
    SubElement.appendChild(descElement);

    document.querySelector(".award .content").appendChild(SubElement);
})

DataModel.expList.forEach(exp => {
    let yearElement = Fun.createElementE('p',exp.year);
    let companyElement = Fun.createElementE('h3',exp.company);
    let descElement = Fun.createElementE('p',exp.desc);
    let SubElement = Fun.createElementE('div','',{
        'class':'Sub',
        'id':exp.id+'R'
    });
    
    SubElement.appendChild(yearElement);
    SubElement.appendChild(companyElement);
    SubElement.appendChild(descElement);

    document.querySelector(".experience .content").appendChild(SubElement);
})

DataModel.refList.forEach(ref => {
    let nameElement = Fun.createElementE('h3',ref.name);
    let postElement = Fun.createElementE('p',ref.post);
    let companyElement = Fun.createElementE('p',ref.company);

    let SubElement = Fun.createElementE('div','',{
        'class':'Sub',
        'id':ref.id+'R'
    });

    SubElement.appendChild(nameElement);
    SubElement.appendChild(postElement);
    SubElement.appendChild(companyElement);

    document.querySelector(".reference .content").appendChild(SubElement);
})

const preview = document.getElementById("preview");
let modal = document.getElementsByClassName("modal")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let page = document.getElementsByClassName("page")[0];
let closePreview = document.getElementById("closePreview");
preview.addEventListener("click",() => {
    let modalContent = Fun.createElementE('div','',{
        class:"page"
    });
    modalContent.innerHTML = page.innerHTML;
    modal.appendChild(modalContent);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

closePreview.addEventListener("click",()=>{
    modal.removeChild(modal.children[1]);
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})