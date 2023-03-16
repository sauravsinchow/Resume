
function skillDOM(data){
    let resumeElement = `<li id=${data.id+'R'}>${data.name}</li>`
    let formElement = `<li id=${data.id+'L'}>${data.name}<input id=${data.id} type="button" value="X"></li>`
    return {formElement,resumeElement}
}

function eduDOM(data){
    let resumeElement = `<div class="Sub" id=${data.id+'R'}><strong>${data.year}</strong><h3>${data.institute}</h3><p>${data.desc}</p></div>`
    let formElement = `<div id=${data.id+'L'}><strong>${data.year}</strong><h3>${data.institute}</h3><p>${data.desc}</p><input type="button" value="X" id=${data.id}><input type="button" id=${data.id+'-E'} value="Edit"></div>`
    return {formElement,resumeElement}
}

function awardDOM(data){
    let resumeElement = `<div class="Sub" id=${data.id+'R'}><h3>${data.title}</h3><p>${data.desc}</p></div>`
    let formElement = `<div id=${data.id+'L'}><h3>${data.title}</h3><p>${data.desc}</p><input id=${data.id} type="button" value="X"></div>`
    return {formElement,resumeElement}
}

function expDOM(data){
    let resumeElement = `<div class="Sub" id="${data.id+'R'}"><p>${data.year}</p><h3>${data.company}</h3><p>${data.desc}</p></div>`
    let formElement = `<div id="${data.id+'L'}"><p>${data.year}</p><h3>${data.company}</h3><p>${data.desc}</p><input type="button" id=${data.id} value="X"></div>`
    return {formElement,resumeElement}
}

function refDOM(data){
    let resumeElement = `<div class="Sub" id="${data.id+'R'}"><h3>${data.name}</h3><p>${data.post}</p><p>${data.company}</p></div>`
    let formElement = `<div id=${data.id+'L'}><h3>${data.name}</h3><p>${data.post}</p><p>${data.company}</p><input type="button" id=${data.id} value="X"></div>`
    return {formElement,resumeElement}
}

export default function(formState){
    if(formState.section==='skill'){
        return skillDOM(formState.data);
    }else if(formState.section==='edu'){
        return eduDOM(formState.data);
    }else if(formState.section==='award'){
        return awardDOM(formState.data);
    }else if(formState.section==='exp'){
        return expDOM(formState.data);
    }else if(formState.section==='ref'){
        return refDOM(formState.data);
    }
}