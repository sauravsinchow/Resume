import * as Fun from './BasicFun.js';

let skillArray = JSON.parse(localStorage.getItem('list')) || [];

export default function SKILL (FormState) {
    let skillName = document.getElementById("skill-name");
    let skillBtn = document.getElementById("skill-btn");

    skillName.addEventListener('input',e => {
        FormState.value.skill = e.target.value;
    })

    const addSkill = (id,name) => {
        let skillList = document.querySelector(".experties ul");
        let formSkillList = document.querySelector(".skill-form ul");

        let li = Fun.createElementE('li',name,{'id':id+'R'});
        let li_Form = Fun.createElementE('li',name,{'id':id+'L'});

        let delBtn = Fun.createElementE('input','',{
            'id':id,
            'value':'X',
            'type':'button'
        });
        
        delBtn.addEventListener("click",(e)=>{
            Fun.del(e.target.id,'skill');
        });

        skillList.appendChild(li);
        li_Form.appendChild(delBtn);
        formSkillList.appendChild(li_Form);
    }

    skillArray = JSON.parse(localStorage.getItem('list')) || [];
    skillArray.forEach(skill => {
        let formSkillList = document.querySelector(".skill-form ul");
        let li_Form = Fun.createElementE('li',skill.name,{'id':skill.id+'L'});

        let delBtn = Fun.createElementE('input','',{
            'id':skill.id,
            'value':'X',
            'type':'button'
        });
        
        delBtn.addEventListener("click",(e)=>{
            Fun.del(e.target.id,'skill');
        });

        li_Form.appendChild(delBtn);
        formSkillList.appendChild(li_Form);
    })


    skillBtn.addEventListener("click",()=>{

        let unique_id = Date.now();
        skillArray = JSON.parse(localStorage.getItem('list')) || [];
        skillArray.push({
            'id': unique_id,
            'name': FormState.value.skill,
        });

        localStorage.setItem('list',JSON.stringify(skillArray));

        addSkill(unique_id, skillName.value);
        skillName.value="";
    })
}