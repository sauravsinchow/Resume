///// Topic Selector /////////////////////////

let topic = document.getElementById("topic");
let oldTopicValue;

topic.addEventListener("change",()=>{
    // console.log(topic.value);
    if(oldTopicValue)
    document.getElementsByClassName(oldTopicValue+"-form")[0].classList.add("sub-form");
    document.getElementsByClassName(topic.value+"-form")[0].classList.remove("sub-form");

    oldTopicValue = topic.value;
})

// Intro /////////////////////////////////

let name = document.getElementById("name")
let btn = document.getElementById("intro-btn")
let role = document.getElementById("role")
let overviewDesc = document.getElementById("overview-desc");

btn.addEventListener("click",()=> {
    console.log(role);
    document.querySelector(".name h1").innerHTML = name.value;
    document.querySelector(".name p").innerHTML = role.value;
    document.querySelector(".visible.overview p").innerHTML = overviewDesc.value;
    name.value="";
    role.value="";
    overviewDesc.value="";
})

////SKILL///////////////////////////////////

let skillName = document.getElementById("skill-name");
let skillBtn = document.getElementById("skill-btn");

let skillArray = JSON.parse(localStorage.getItem('list')) || [];

const addSkill = (id,name) => {
    let skillList = document.querySelector(".experties ul");
    let formSkillList = document.querySelector(".skills-form ul");

    let li = document.createElement("li");
    li.innerHTML = name;
    li.setAttribute('id',id+'R');

    let li_Form = document.createElement("li");
    li_Form.innerHTML = name;
    li_Form.setAttribute('id',id+'L');

    let delBtn = document.createElement("input");
    delBtn.setAttribute('type','button')
    delBtn.setAttribute('value','X')
    delBtn.setAttribute('id',id);

    delBtn.addEventListener("click",(e)=>{
        
        document.getElementById(e.target.id+'L').remove();
        document.getElementById(e.target.id+'R').remove();
        
        skillArray = skillArray.filter(sk => sk.id != id);
        
        localStorage.setItem('list',JSON.stringify(skillArray));
    });

    skillList.appendChild(li);
    li_Form.appendChild(delBtn);
    formSkillList.appendChild(li_Form);
}

skillArray.forEach(skill => {
    addSkill(skill.id, skill.name);
})


skillBtn.addEventListener("click",()=>{

    let unique_id = Date.now();
    skillArray.push({
        'id': unique_id,
        'name': skillName.value
    });

    localStorage.setItem('list',JSON.stringify(skillArray));

    addSkill(unique_id, skillName.value);
    skillName.value="";
})

///// Education //////////////////////////////////////////

let eduContainer = document.querySelector(".education .content");
let eduContainerF = document.querySelector(".edu-form ul");

let eduCancel = document.querySelector(".edu-form .CancelBtn");
let eduSave = document.querySelector(".edu-form .SaveBtn")

let eduList = JSON.parse(localStorage.getItem('edu')) || [];

eduCancel.addEventListener("click",e => {
    document.querySelector(".edu-form .edit").classList.add("invisible");
    eduContainerF.classList.remove("invisible");
    document.getElementById("edu-btn").classList.remove("invisible");

    document.getElementById("institute").value = "";
    document.getElementById("year").value = "";
    document.getElementById("desc").value = "";
})

eduSave.addEventListener("click",e => {
    let institute = document.getElementById("institute").value;
    document.getElementById("institute").value = "";
    let year = document.getElementById("year").value;
    document.getElementById("year").value = "";
    let desc = document.getElementById("desc").value;
    document.getElementById("desc").value = "";

    let ID = e.target.id.split('-')[0];
    document.getElementById(ID+'R').children[0].innerHTML = year;
    document.getElementById(ID+'R').children[1].innerHTML = institute;
    document.getElementById(ID+'R').children[2].innerHTML = desc;

    document.getElementById(ID+'L').children[0].innerHTML = year;
    document.getElementById(ID+'L').children[1].innerHTML = institute;
    document.getElementById(ID+'L').children[2].innerHTML = desc;

    for(let i=0;i<eduList.length;i++){
        if(eduList[i].id == ID){
            eduList[i].institute = institute;
            eduList[i].year = year;
            eduList[i].desc = desc;
        }
    }

    localStorage.setItem('edu',JSON.stringify(eduList));

    document.querySelector(".edu-form .edit").classList.add("invisible");
    eduContainerF.classList.remove("invisible");
    document.getElementById("edu-btn").classList.remove("invisible");

})

const addEdu = (id,institute, year, desc) => {

    let yearElement = document.createElement("strong");
    yearElement.innerHTML = year;
    let yearElementF = document.createElement("strong");
    yearElementF.innerHTML = year;

    let instituteElement = document.createElement("h3");
    instituteElement.innerHTML = institute;
    let instituteElementF = document.createElement("h3");
    instituteElementF.innerHTML = institute;

    let descElement = document.createElement("p");
    descElement.innerHTML = desc;
    let descElementF = document.createElement("p");
    descElementF.innerHTML = desc;

    let SubElement = document.createElement("div");
    SubElement.setAttribute('class','Sub');
    SubElement.setAttribute('id',id+'R');
    let SubElementF = document.createElement("div");
    SubElementF.setAttribute('id',id+'L');

    let delBtn = document.createElement("input");
    delBtn.setAttribute('type','button');
    delBtn.setAttribute('value','X');
    delBtn.setAttribute('id',id);

    delBtn.addEventListener("click",e => {
        document.getElementById(e.target.id+'L').remove();
        document.getElementById(e.target.id+'R').remove();

        eduList = eduList.filter(edu => edu.id != e.target.id);

        localStorage.setItem('edu',JSON.stringify(eduList));
    })

    let editBtn = document.createElement("input");
    editBtn.setAttribute('type','button');
    // editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
    editBtn.setAttribute('value','Edit');
    editBtn.setAttribute('id',id+"-E");

    editBtn.addEventListener("click",e => {
        let ID = e.target.id.split('-')[0];
        document.querySelector(".edu-form .edit").classList.remove("invisible");
        eduContainerF.classList.add("invisible");
        document.getElementById("edu-btn").classList.add("invisible");

        eduCancel.setAttribute('id',ID+'-Cancel');
        eduSave.setAttribute('id',ID+'-Save');

        let [data] = eduList.filter(edu => edu.id == ID);

        console.log(data);
        yearElementF.value = data.year;

        document.getElementById("institute").value = data.institute;
        document.getElementById("year").value = data.year;
        document.getElementById("desc").value = data.desc;

    })

    SubElement.appendChild(yearElement);
    SubElement.appendChild(instituteElement);
    SubElement.appendChild(descElement);
    SubElementF.appendChild(yearElementF);
    SubElementF.appendChild(instituteElementF);
    SubElementF.appendChild(descElementF);

    SubElementF.appendChild(delBtn);
    SubElementF.appendChild(editBtn);

    eduContainer.appendChild(SubElement);
    eduContainerF.appendChild(SubElementF);
}

eduList.forEach(edu => {
    addEdu(edu.id, edu.institute, edu.year, edu.desc);
})

document.getElementById("edu-btn").addEventListener("click",e => {

    unique_id = Date.now();

    let institute = document.getElementById("institute").value;
    document.getElementById("institute").value = "";
    let year = document.getElementById("year").value;
    document.getElementById("year").value = "";
    let desc = document.getElementById("desc").value;
    document.getElementById("desc").value = "";

    eduList.push({
        'id': unique_id,
        'institute': institute,
        'year': year,
        'desc': desc
    })
    localStorage.setItem('edu',JSON.stringify(eduList));

    addEdu(unique_id,institute,year,desc);
})


///// Awards //////////////////////////////////////////

{/* 
<div class="Sub">
    <h3>Best Ninja in the Town</h3>
    <p>Saved the hidden leaf village lots of time</p>
</div>
*/}

let AwardsContainer = document.querySelector(".awards .content");
let AwardsContainerF = document.querySelector(".awards-form ul");

let awardsList = JSON.parse(localStorage.getItem('awards')) || [];

const addAwards = (id,title, desc) => {

    let titleElement = document.createElement("h3");
    titleElement.innerHTML = title;
    let titleElementF = document.createElement("h3");
    titleElementF.innerHTML = title;

    let descElement = document.createElement("p");
    descElement.innerHTML = desc;
    let descElementF = document.createElement("p");
    descElementF.innerHTML = desc;

    let SubElement = document.createElement("div");
    SubElement.setAttribute('class','Sub');
    SubElement.setAttribute('id',id+'R');
    let SubElementF = document.createElement("div");
    SubElementF.setAttribute('id',id+'L');

    let delBtn = document.createElement("input");
    delBtn.setAttribute('type','button');
    delBtn.setAttribute('value','X');
    delBtn.setAttribute('id',id);

    delBtn.addEventListener("click",e => {
        document.getElementById(e.target.id+'L').remove();
        document.getElementById(e.target.id+'R').remove();

        awardsList = awardsList.filter(awards => awards.id != e.target.id);

        localStorage.setItem('awards',JSON.stringify(awardsList));
    })

    SubElement.appendChild(titleElement);
    SubElement.appendChild(descElement);
    SubElementF.appendChild(titleElementF);
    SubElementF.appendChild(descElementF);

    SubElementF.appendChild(delBtn);

    AwardsContainer.appendChild(SubElement);
    AwardsContainerF.appendChild(SubElementF);
}

awardsList.forEach(award => {
    addAwards(award.id, award.title, award.desc);
})

document.getElementById("awards-btn").addEventListener("click",e => {

    unique_id = Date.now();

    let title = document.getElementById("title").value;
    document.getElementById("title").value = "";
    let desc = document.getElementById("Awarddesc").value;
    document.getElementById("Awarddesc").value = "";

    awardsList.push({
        'id': unique_id,
        'title': title,
        'desc': desc
    })
    localStorage.setItem('awards',JSON.stringify(awardsList));

    addAwards(unique_id,title,desc);
})

//// Experience //////////////

{/* 
<div class="Sub">
    <p class="date">2019-Present</p>
    <h3>Hokage of Hidden Leaf Village</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
</div> 
*/}


let expContainer = document.querySelector(".experience .content");
let expContainerF = document.querySelector(".exp-form ul");

let expList = JSON.parse(localStorage.getItem('exp')) || [];

const addExp = (id,company, year, desc) => {

    let yearElement = document.createElement("p");
    yearElement.innerHTML = year;
    let yearElementF = document.createElement("p");
    yearElementF.innerHTML = year;

    let companyElement = document.createElement("h3");
    companyElement.innerHTML = company;
    let companyElementF = document.createElement("h3");
    companyElementF.innerHTML = company;

    let descElement = document.createElement("p");
    descElement.innerHTML = desc;
    let descElementF = document.createElement("p");
    descElementF.innerHTML = desc;

    let SubElement = document.createElement("div");
    SubElement.setAttribute('class','Sub');
    SubElement.setAttribute('id',id+'R');
    let SubElementF = document.createElement("div");
    SubElementF.setAttribute('id',id+'L');

    let delBtn = document.createElement("input");
    delBtn.setAttribute('type','button');
    delBtn.setAttribute('value','X');
    delBtn.setAttribute('id',id);

    delBtn.addEventListener("click",e => {
        document.getElementById(e.target.id+'L').remove();
        document.getElementById(e.target.id+'R').remove();

        expList = expList.filter(exp => exp.id != e.target.id);

        localStorage.setItem('exp',JSON.stringify(expList));
    })

    SubElement.appendChild(yearElement);
    SubElement.appendChild(companyElement);
    SubElement.appendChild(descElement);
    SubElementF.appendChild(yearElementF);
    SubElementF.appendChild(companyElementF);
    SubElementF.appendChild(descElementF);

    SubElementF.appendChild(delBtn);

    expContainer.appendChild(SubElement);
    expContainerF.appendChild(SubElementF);
}

expList.forEach(exp => {
    addExp(exp.id, exp.company, exp.year, exp.desc);
})

document.getElementById("exp-btn").addEventListener("click",e => {

    unique_id = Date.now();

    let company = document.getElementById("company").value;
    document.getElementById("company").value = "";
    let year = document.getElementById("expYear").value;
    document.getElementById("expYear").value = "";
    let desc = document.getElementById("expDesc").value;
    document.getElementById("expDesc").value = "";

    expList.push({
        'id': unique_id,
        'company': company,
        'year': year,
        'desc': desc
    })
    localStorage.setItem('exp',JSON.stringify(expList));

    addExp(unique_id,company,year,desc);
})

//// Refrence ////////////

{/* 
<div class="Sub">
    <h3>Jiraya</h3>
    <p>Legendary Sanin</p>
    <p>Hidden Leaf Village</p>
</div> 
*/}

let refContainer = document.querySelector(".reference .content");
let refContainerF = document.querySelector(".ref-form ul");

let refList = JSON.parse(localStorage.getItem('ref')) || [];

const addRef = (id,name, post, company) => {

    let nameElement = document.createElement("h3");
    nameElement.innerHTML = name;
    let nameElementF = document.createElement("h3");
    nameElementF.innerHTML = name;

    let postElement = document.createElement("p");
    postElement.innerHTML = post;
    let postElementF = document.createElement("p");
    postElementF.innerHTML = post;

    let companyElement = document.createElement("p");
    companyElement.innerHTML = company;
    let companyElementF = document.createElement("p");
    companyElementF.innerHTML = company;

    

    let SubElement = document.createElement("div");
    SubElement.setAttribute('class','Sub');
    SubElement.setAttribute('id',id+'R');
    let SubElementF = document.createElement("div");
    SubElementF.setAttribute('id',id+'L');

    let delBtn = document.createElement("input");
    delBtn.setAttribute('type','button');
    delBtn.setAttribute('value','X');
    delBtn.setAttribute('id',id);

    delBtn.addEventListener("click",e => {
        document.getElementById(e.target.id+'L').remove();
        document.getElementById(e.target.id+'R').remove();

        refList = refList.filter(ref => ref.id != e.target.id);

        localStorage.setItem('ref',JSON.stringify(refList));
    })

    SubElement.appendChild(nameElement);
    SubElement.appendChild(postElement);
    SubElement.appendChild(companyElement);
    SubElementF.appendChild(nameElementF);
    SubElementF.appendChild(postElementF);
    SubElementF.appendChild(companyElementF);

    SubElementF.appendChild(delBtn);

    refContainer.appendChild(SubElement);
    refContainerF.appendChild(SubElementF);
}

refList.forEach(ref => {
    addRef(ref.id, ref.name, ref.post, ref.company);
})

document.getElementById("ref-btn").addEventListener("click",e => {

    unique_id = Date.now();

    let refName = document.getElementById("refName").value;
    document.getElementById("refName").value = "";
    let post = document.getElementById("post").value;
    document.getElementById("post").value = "";
    let refCompany = document.getElementById("refCompany").value;
    document.getElementById("refCompany").value = "";

    refList.push({
        'id': unique_id,
        'name': refName,
        'post': post,
        'company': refCompany
    })
    localStorage.setItem('ref',JSON.stringify(refList));

    addRef(unique_id,refName,post,refCompany);
})


// Image/ /////////////////////

let imgInput = document.getElementById("image");
let Img = document.querySelector("img");

Img.setAttribute('src',localStorage.getItem('img'));

document.getElementById("img-btn").addEventListener("click",e => {
    let reader = new FileReader();

    reader.onload = function(e) {
        Img.setAttribute('src', e.target.result);
        console.log(e.target.result);
        localStorage.setItem('img',e.target.result);
    }

    reader.readAsDataURL(imgInput.files[0]);
})