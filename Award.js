import * as Fun from './BasicFun.js';

let awardList = JSON.parse(localStorage.getItem('award')) || [];

export default function AWARD (FormState){
    let awardContainer = document.querySelector(".award .content");
    let awardContainerF = document.querySelector(".award-form ul");

    document.getElementById("title").addEventListener('input',e =>{
        FormState.value.title = e.target.value;
    })
    document.getElementById("Awarddesc").addEventListener('input',e =>{
        FormState.value.desc = e.target.value;
    })

    const addaward = (id,title, desc) => {
        let titleElement = Fun.createElementE('h3',title);
        let titleElementF = Fun.createElementE('h3',title);

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
            'id':id,
            'type':'button',
            'value':'X'
        });

        delBtn.addEventListener("click",e => {
            Fun.del(e.target.id,'award');
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
        let titleElementF = Fun.createElementE('h3',award.title);
        let descElementF = Fun.createElementE('p',award.desc);

        let SubElementF = Fun.createElementE('div','',{
            'id':award.id+'L'
        });

        let delBtn = Fun.createElementE('input','',{
            'id':award.id,
            'type':'button',
            'value':'X'
        });

        delBtn.addEventListener("click",e => {
            Fun.del(e.target.id,'award');
        })

        SubElementF.appendChild(titleElementF);
        SubElementF.appendChild(descElementF);

        SubElementF.appendChild(delBtn);

        awardContainerF.appendChild(SubElementF);
    })

    document.getElementById("award-btn").addEventListener("click",e => {

        let unique_id = Date.now();

        document.getElementById("title").value = "";
        document.getElementById("Awarddesc").value = "";

        awardList.push({
            'id': unique_id,
            'title': FormState.value.title,
            'desc': FormState.value.desc,
        })
        localStorage.setItem('award',JSON.stringify(awardList));

        addaward(unique_id,FormState.value.title,FormState.value.desc);
    })
}