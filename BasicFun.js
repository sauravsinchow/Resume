let eduList = JSON.parse(localStorage.getItem('edu')) || [];
let skillArray = JSON.parse(localStorage.getItem('list')) || [];
let awardList = JSON.parse(localStorage.getItem('award')) || [];
let expList = JSON.parse(localStorage.getItem('exp')) || [];
let refList = JSON.parse(localStorage.getItem('ref')) || [];

export function createElementE (type,text,props={}){
    let res = document.createElement(type);
    res.innerHTML = text;
    for(let key in props){
        res.setAttribute(key,props[key]);
    }

    return res;
}

export function del (id,sec){
    document.getElementById(id+'L').remove();
    document.getElementById(id+'R').remove();

    if(sec == 'award'){
        awardList = awardList.filter(a => a.id!=id);
        localStorage.setItem('award',JSON.stringify(awardList));
    }else if(sec == 'skill'){
        skillArray = skillArray.filter(a => a.id!=id);
        localStorage.setItem('list',JSON.stringify(skillArray));
    }else if(sec == 'edu'){
        eduList = eduList.filter(a => a.id!=id);
        localStorage.setItem('edu',JSON.stringify(eduList));
    }else if(sec == 'exp'){
        expList = expList.filter(a => a.id!=id);
        localStorage.setItem('exp',JSON.stringify(expList));
    }else if(sec == 'ref'){
        refList = refList.filter(a => a.id!=id);
        localStorage.setItem('ref',JSON.stringify(refList));
    }
}