import * as Fun from './BasicFun.js';

let eduList = JSON.parse(localStorage.getItem('edu')) || [];

export default function EDU (FormState) {
    let eduContainer = document.querySelector(".education .content");
    let eduContainerF = document.querySelector(".edu-form ul");

    let eduCancel = document.querySelector(".edu-form .CancelBtn");
    let eduSave = document.querySelector(".edu-form .SaveBtn")

    document.getElementById("institute").addEventListener('input',e =>{
        FormState.value.institute = e.target.value;
    })
    document.getElementById("year").addEventListener('input',e =>{
        FormState.value.year = e.target.value;
    })
    document.getElementById("desc").addEventListener('input',e =>{
        FormState.value.desc = e.target.value;
    })

    eduCancel.addEventListener("click",e => {
        document.querySelector(".edu-form .edit").classList.add("invisible");
        eduContainerF.classList.remove("invisible");
        document.getElementById("edu-btn").classList.remove("invisible");

        document.getElementById("institute").value = "";
        document.getElementById("year").value = "";
        document.getElementById("desc").value = "";
    })

    eduSave.addEventListener("click",e => {
        document.getElementById("institute").value = "";
        document.getElementById("year").value = "";
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
        let yearElement = Fun.createElementE('strong',FormState.value.year);
        let yearElementF = Fun.createElementE('strong',FormState.value.year);

        let instituteElement = Fun.createElementE('h3',FormState.value.institute);
        let instituteElementF = Fun.createElementE('h3',FormState.value.institute);

        let descElement = Fun.createElementE('p',FormState.value.desc);
        let descElementF = Fun.createElementE('p',FormState.value.desc);

        let SubElement = Fun.createElementE('div','',{
            'class':'Sub',
            'id':id+'R'
        });
        let SubElementF = Fun.createElementE('div','',{
            'id':id+'L'
        });

        let delBtn = Fun.createElementE('input','',{
            'type':'button',
            'value':'X',
            'id':id
        });

        delBtn.addEventListener("click",e => {
            Fun.del(e.target.id,'edu');
        })

        let editBtn = Fun.createElementE('input','',{
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
        let yearElementF = Fun.createElementE('strong',edu.year);
        let instituteElementF = Fun.createElementE('h3',edu.institute);
        let descElementF = Fun.createElementE('p',edu.desc);

        let SubElementF = Fun.createElementE('div','',{
            'id':edu.id+'L'
        });

        let delBtn = Fun.createElementE('input','',{
            'type':'button',
            'value':'X',
            'id':edu.id
        });

        delBtn.addEventListener("click",e => {
            Fun.del(e.target.id,'edu');
        })

        let editBtn = Fun.createElementE('input','',{
            'type':'button',
            'id':edu.id+'-E',
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

        SubElementF.appendChild(yearElementF);
        SubElementF.appendChild(instituteElementF);
        SubElementF.appendChild(descElementF);

        SubElementF.appendChild(delBtn);
        SubElementF.appendChild(editBtn);

        eduContainerF.appendChild(SubElementF);
    })
    

    document.getElementById("edu-btn").addEventListener("click",e => {
        let unique_id = Date.now();

        document.getElementById("institute").value = "";
        document.getElementById("year").value = "";
        document.getElementById("desc").value = "";

        eduList.push({
            'id': unique_id,
            ...FormState.value,
            // 'institute': FormState.value.institute,
            // 'year': FormState.value.year,
            // 'desc': FormState.value.desc
        })
        localStorage.setItem('edu',JSON.stringify(eduList));

        addEdu(unique_id,FormState.value.institute,FormState.value.year,FormState.value.desc);
    })
}