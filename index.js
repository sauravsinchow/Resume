// Form Inner Htmls
let introForm = `Intro
<br>
<label for="name">Name</label>
<input id="name" type="text">
<br>
<label for="role">Role</label>
<input type="text" id="role">
<br>
<label for="overview-desc">Overview</label>
<input type="text" id="overview-desc">
<br>
<input type="button" value="Submit" id="intro-btn">`

let skillForm = `Skills
<br>
<label for="skill">Skill</label>
<input type="text" id="skill-name">
<input type="button" value="Submit" id="skill-btn">

<ul>
    
</ul>`

let eduForm = `Education
<br>
<label for="institute">Institute Name</label>
<input type="text" id="institute">
<br>
<label for="year">Year</label>
<input type="text" id="year">
<br>
<label for="desc">Description</label>
<input type="text" id="desc">
<br>
<input type="button" value="Submit" id="edu-btn">

<div class="edit invisible">
    <input type="button" value="Cancel" class="cancelBtn"">
    <input type="button" value="Save Changes" class="SaveBtn">
</div>

<ul>
    
</ul>`

let awardForm = `award
<br>
<label for="title">Title</label>
<input type="text" id="title">
<br>
<label for="desc">Description</label>
<input type="text" id="Awarddesc">
<br>
<input type="button" value="Submit" id="award-btn">

<ul>
    
</ul>`

let expForm = `Experience
<br>
<label for="company">Company Name</label>
<input type="text" id="company">
<br>
<label for="expYear">Year</label>
<input type="text" id="expYear">
<br>
<label for="expDesc">Description</label>
<input type="text" id="expDesc">
<br>
<input type="button" value="Submit" id="exp-btn">

<ul>
    
</ul>`

let refForm = `Refrence
<br>
<label for="refName">Name</label>
<input type="text" id="refName">
<br>
<label for="post">Post</label>
<input type="text" id="post">
<br>
<label for="refCompany">Company</label>
<input type="text" id="refCompany">
<br>
<input type="button" value="Submit" id="ref-btn">

<ul>
    
</ul>`

let imgForm = `Image
<br>
<label for="image">Image</label>
<input type="file" id="image">
<br>
<input type="button" value="Submit" id="img-btn">`

//// Initialization from Local Storage
let eduList = JSON.parse(localStorage.getItem('edu')) || [];
let skillArray = JSON.parse(localStorage.getItem('list')) || [];
let awardList = JSON.parse(localStorage.getItem('award')) || [];
let expList = JSON.parse(localStorage.getItem('exp')) || [];
let refList = JSON.parse(localStorage.getItem('ref')) || [];
let imgUrl = localStorage.getItem('img') || 'images/Naruto.jpeg';

//// Create Elements Function ////
function createElementE (type,text,props){
    let res = document.createElement(type);
    res.innerHTML = text;
    for(let key in props){
        res.setAttribute(key,props[key]);
    }

    return res;
}

//// Delete Function
function del (id,sec){
    document.getElementById(id+'L').remove();
    document.getElementById(id+'R').remove();

    if(sec == 'award'){
        awardList = awardList.filter(award => award.id != id);
        localStorage.setItem('award',JSON.stringify(awardList));
    }else if(sec == 'skill'){
        skillArray = skillArray.filter(sk => sk.id != id);
        localStorage.setItem('list',JSON.stringify(skillArray));
    }else if(sec == 'edu'){
        eduList = eduList.filter(edu => edu.id != id);
        localStorage.setItem('edu',JSON.stringify(eduList));
    }else if(sec == 'exp'){
        expList = expList.filter(exp => exp.id != id);
        localStorage.setItem('exp',JSON.stringify(expList));
    }else if(sec == 'ref'){
        refList = refList.filter(ref => ref.id != id);
        localStorage.setItem('ref',JSON.stringify(refList));
    }
}

///// Topic Selector /////////////////////////
let topic = document.getElementById("topic");
let Topic;
let Form = document.getElementsByClassName('Sub-Form')[0];
topic.addEventListener("change",()=>{
    Topic = topic.value;

    if(Topic == 'intro'){
        Form.innerHTML = introForm;
        Form.classList.add('intro-form');
        INTRO();
    }else if(Topic == 'skill'){
        Form.innerHTML = skillForm;
        Form.classList.add('skill-form');
        SKILL();
    }else if(Topic == 'edu'){
        Form.innerHTML = eduForm;
        Form.classList.add('edu-form');
        EDU();
    }else if(Topic == 'award'){
        Form.innerHTML = awardForm;
        Form.classList.add('award-form');
        AWARD();
    }else if(Topic == 'exp'){
        Form.innerHTML = expForm;
        Form.classList.add('exp-form');
        EXP();
    }else if(Topic == 'ref'){
        Form.innerHTML = refForm;
        Form.classList.add('ref-form');
        REF();
    }else if(Topic == 'img'){
        Form.innerHTML = imgForm;
        Form.classList.add('img-form');
        IMG();
    }
})

// Intro /////////////////////////////////
function INTRO (){
    let name = document.getElementById("name")
    let btn = document.getElementById("intro-btn")
    let role = document.getElementById("role")
    let overviewDesc = document.getElementById("overview-desc");

    btn.addEventListener("click",()=> {
        document.querySelector(".name h1").innerHTML = name.value;
        document.querySelector(".name p").innerHTML = role.value;
        document.querySelector(".visible.overview p").innerHTML = overviewDesc.value;
        name.value="";
        role.value="";
        overviewDesc.value="";
    })
}

////SKILL///////////////////////////////////
function SKILL () {
    let skillName = document.getElementById("skill-name");
    let skillBtn = document.getElementById("skill-btn");

    const addSkill = (id,name) => {
        let skillList = document.querySelector(".experties ul");
        let formSkillList = document.querySelector(".skill-form ul");

        let li = createElementE('li',name,{'id':id+'R'});
        let li_Form = createElementE('li',name,{'id':id+'L'});

        let delBtn = createElementE('input','',{
            'id':id,
            'value':'X',
            'type':'button'
        });
        
        delBtn.addEventListener("click",(e)=>{
            del(e.target.id,'skill');
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
}

///// Education //////////////////////////////////////////
function EDU () {
    let eduContainer = document.querySelector(".education .content");
    let eduContainerF = document.querySelector(".edu-form ul");

    let eduCancel = document.querySelector(".edu-form .CancelBtn");
    let eduSave = document.querySelector(".edu-form .SaveBtn")



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

    
        let yearElement = createElementE('strong',year,{});
        let yearElementF = createElementE('strong',year,{});

        let instituteElement = createElementE('h3',institute,{});
        let instituteElementF = createElementE('h3',institute,{});

        let descElement = createElementE('p',desc,{});
        let descElementF = createElementE('p',desc,{});

        let SubElement = createElementE('div','',{
            'class':'Sub',
            'id':id+'R'
        });
        let SubElementF = createElementE('div','',{
            'id':id+'L'
        });

        let delBtn = createElementE('input','',{
            'type':'button',
            'value':'X',
            'id':id
        });

        delBtn.addEventListener("click",e => {
            del(e.target.id,'edu');
        })

        let editBtn = createElementE('input','',{
            'type':'button',
            'id':id+'-E',
            'value':'Edit'
        });

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
}

///// award //////////////////////////////////////////
function AWARD (){
    let awardContainer = document.querySelector(".award .content");
    let awardContainerF = document.querySelector(".award-form ul");



    const addaward = (id,title, desc) => {

        let titleElement = createElementE('h3',title,{});
        let titleElementF = createElementE('h3',title,{});

        let descElement = createElementE('p',desc,{});
        let descElementF = createElementE('p',desc,{});

        let SubElement = createElementE('div','',{
            'class':'Sub',
            'id':id+'R'
        });
        let SubElementF = createElementE('div','',{
            'id':id+'L'
        });

        let delBtn = createElementE('input','',{
            'id':id,
            'type':'button',
            'value':'X'
        });

        delBtn.addEventListener("click",e => {
            del(e.target.id,'award');
        })

        SubElement.appendChild(titleElement);
        SubElement.appendChild(descElement);
        SubElementF.appendChild(titleElementF);
        SubElementF.appendChild(descElementF);

        SubElementF.appendChild(delBtn);

        awardContainer.appendChild(SubElement);
        awardContainerF.appendChild(SubElementF);
    }

    awardList.forEach(award => {
        addaward(award.id, award.title, award.desc);
    })

    document.getElementById("award-btn").addEventListener("click",e => {

        unique_id = Date.now();

        let title = document.getElementById("title").value;
        document.getElementById("title").value = "";
        let desc = document.getElementById("Awarddesc").value;
        document.getElementById("Awarddesc").value = "";

        awardList.push({
            'id': unique_id,
            'title': title,
            'desc': desc
        })
        localStorage.setItem('award',JSON.stringify(awardList));

        addaward(unique_id,title,desc);
    })
}

//// Experience //////////////
function EXP () {
    let expContainer = document.querySelector(".experience .content");
    let expContainerF = document.querySelector(".exp-form ul");

    const addExp = (id,company, year, desc) => {

        let yearElement = createElementE('p',year,{});
        let yearElementF = createElementE('p',year,{});

        let companyElement = createElementE('h3',company,{});
        let companyElementF = createElementE('h3',company,{});

        let descElement = createElementE('p',desc,{});
        let descElementF = createElementE('p',desc,{});

        let SubElement = createElementE('div','',{
            'class':'Sub',
            'id':id+'R'
        });
        let SubElementF = createElementE('div','',{
            'id':id+'L'
        });

        let delBtn = createElementE('input','',{
            'type':'button',
            'id':id,
            'value':'X'
        });

        delBtn.addEventListener("click",e => {
            del(e.target.id,'exp');
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
}

//// Refrence ////////////
function REF () {
    let refContainer = document.querySelector(".reference .content");
    let refContainerF = document.querySelector(".ref-form ul");



    const addRef = (id,name, post, company) => {

        let nameElement = createElementE('h3',name,{});
        let nameElementF = createElementE('h3',name,{});

        let postElement = createElementE('p',post,{});
        let postElementF = createElementE('p',post,{});

        let companyElement = createElementE('p',company,{});
        let companyElementF = createElementE('p',company,{});

        let SubElement = createElementE('div','',{
            'class':'Sub',
            'id':id+'R'
        });
        let SubElementF = createElementE('div','',{
            'id':id+'L'
        });

        let delBtn = createElementE('input','',{
            'type':'button',
            'id':id,
            'value':'X'
        });

        delBtn.addEventListener("click",e => {
            del(e.target.id,'ref');
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
}

// Image //////////////////////
function IMG () {
    let Img = document.querySelector("img");
    let imgInput = document.getElementById("image");
    Img.setAttribute('src',imgUrl);
    document.getElementById("img-btn").addEventListener("click",e => {
        let reader = new FileReader();
        reader.onload = function(e) {
            Img.setAttribute('src', e.target.result);
            console.log(e.target.result);
            localStorage.setItem('img',e.target.result);
        }
        reader.readAsDataURL(imgInput.files[0]);
    })
}