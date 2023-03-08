import * as Fun from './BasicFun.js';

let refList = JSON.parse(localStorage.getItem('ref')) || [];

export default function REF (FormState) {
    let refContainer = document.querySelector(".reference .content");
    let refContainerF = document.querySelector(".ref-form ul");

    document.getElementById("refName").addEventListener('input',e => {
        FormState.value.name = e.target.value;
    })
    document.getElementById("post").addEventListener('input',e => {
        FormState.value.post = e.target.value;
    })
    document.getElementById("refCompany").addEventListener('input',e => {
        FormState.value.company = e.target.value;
    })

    const addRef = (id,name, post, company) => {
        let nameElement = Fun.createElementE('h3',name);
        let nameElementF = Fun.createElementE('h3',name);

        let postElement = Fun.createElementE('p',post);
        let postElementF = Fun.createElementE('p',post);

        let companyElement = Fun.createElementE('p',company);
        let companyElementF = Fun.createElementE('p',company);

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
            Fun.del(e.target.id,'ref');
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
        let nameElementF = Fun.createElementE('h3',ref.name);
        let postElementF = Fun.createElementE('p',ref.post);
        let companyElementF = Fun.createElementE('p',ref.company);
        let SubElementF = Fun.createElementE('div','',{
            'id':ref.id+'L'
        });

        let delBtn = Fun.createElementE('input','',{
            'type':'button',
            'id':ref.id,
            'value':'X'
        });

        delBtn.addEventListener("click",e => {
            Fun.del(e.target.id,'ref');
        })

        SubElementF.appendChild(nameElementF);
        SubElementF.appendChild(postElementF);
        SubElementF.appendChild(companyElementF);

        SubElementF.appendChild(delBtn);

        refContainerF.appendChild(SubElementF);
    })

    document.getElementById("ref-btn").addEventListener("click",e => {

        let unique_id = Date.now();

        document.getElementById("refName").value = "";
        document.getElementById("post").value = "";
        document.getElementById("refCompany").value = "";

        refList.push({
            'id': unique_id,
            'name': FormState.value.name,
            'post': FormState.value.post,
            'company': FormState.value.company
        })
        localStorage.setItem('ref',JSON.stringify(refList));

        addRef(unique_id,FormState.value.name,FormState.value.post,FormState.value.company);
    })
}