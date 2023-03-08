import * as Fun from './BasicFun.js';

let expList = JSON.parse(localStorage.getItem('exp')) || [];

export default function EXP (FormState) {
    let expContainer = document.querySelector(".experience .content");
    let expContainerF = document.querySelector(".exp-form ul");

    document.getElementById("company").addEventListener('input',e =>{
        FormState.value.company = e.target.value;
    })
    document.getElementById("expYear").addEventListener('input',e =>{
        FormState.value.year = e.target.value;
    })
    document.getElementById("expDesc").addEventListener('input',e =>{
        FormState.value.desc = e.target.value;
    })

    const addExp = (id,company, year, desc) => {
        let yearElement = Fun.createElementE('p',year);
        let yearElementF = Fun.createElementE('p',year);

        let companyElement = Fun.createElementE('h3',company);
        let companyElementF = Fun.createElementE('h3',company);

        let descElement = Fun.createElementE('p',desc);
        let descElementF = Fun.createElementE('p',desc);

        let SubElement = Fun.createElementE('div','',{
            'class':'Sub',
            'id':id+'R'
        });
        let SubElementF = Fun.createElementE('div','',{
            'id':id+'L'
        });

        let delBtn = Fun.createElementE('input','',{
            'type':'button',
            'id':id,
            'value':'X'
        });

        delBtn.addEventListener("click",e => {
            Fun.del(e.target.id,'exp');
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
        let yearElementF = Fun.createElementE('p',exp.year);
        let companyElementF = Fun.createElementE('h3',exp.company);
        let descElementF = Fun.createElementE('p',exp.desc);

        let SubElementF = Fun.createElementE('div','',{
            'id':exp.id+'L'
        });

        let delBtn = Fun.createElementE('input','',{
            'type':'button',
            'id':exp.id,
            'value':'X'
        });

        delBtn.addEventListener("click",e => {
            Fun.del(e.target.id,'exp');
        })

        SubElementF.appendChild(yearElementF);
        SubElementF.appendChild(companyElementF);
        SubElementF.appendChild(descElementF);

        SubElementF.appendChild(delBtn);

        expContainerF.appendChild(SubElementF);
    })

    document.getElementById("exp-btn").addEventListener("click",e => {

        let unique_id = Date.now();

        document.getElementById("company").value = "";
        document.getElementById("expYear").value = "";
        document.getElementById("expDesc").value = "";

        expList.push({
            'id': unique_id,
            'company': FormState.value.company,
            'year': FormState.value.year,
            'desc': FormState.value.desc
        })
        localStorage.setItem('exp',JSON.stringify(expList));

        addExp(unique_id,FormState.value.company,FormState.value.year,FormState.value.desc);
    })
}