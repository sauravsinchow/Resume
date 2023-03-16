import * as formHTML from './formHTML.js';
import addElement from './addElement.js';
import * as utils from './utils.js';

const isEditable = {
    intro: false,
    skill: false,
    edu: true,
    award: false,
    exp: false,
    ref: false,
    img: false,
    contact: false,
}

const isIterable = {
    intro: false,
    skill: true,
    edu: true,
    award: true,
    exp: true,
    ref: true,
    img: false,
    contact: false,
}

class Model {
    constructor(){
        this.dataModel = JSON.parse(localStorage.getItem('dataModel')) || {
            section: 'none',
            data: {
                intro: {
                    name: "Name",
                    role: "Role",
                    desc: "Description"
                },
                skill: [],
                edu: [],
                award: [],
                exp: [],
                ref: [],
                img: {
                    image: 'images/profilePic.webp'
                },
                contact: {
                    mail: '',
                    linkedIn: '',
                    phone: '',
                    whatsApp: '',
                }
            }
        }
    }

    setData(formState){
        if(!isIterable[formState.section]){
            this.dataModel.data[formState.section] = {...formState.data};
        }else{
            this.dataModel.data[formState.section].push({...formState.data});
        }
        console.log(this.dataModel);
        localStorage.setItem('dataModel',JSON.stringify(this.dataModel));
    }

    setSection(section) {
        this.dataModel.section = section;
    }

    deleteItem(section,id){
        this.dataModel.data[section] = this.dataModel.data[section].filter(data => data.id!=id)
        localStorage.setItem('dataModel',JSON.stringify(this.dataModel));
    }

    getItem(section,id){
        return this.dataModel.data[section].filter(data => data.id==id)[0];
    }

    saveItem(id,formState){
        this.dataModel.data[formState.section] = this.dataModel.data[formState.section].map(data => {
            if(data.id == id){
                return {...formState.data};
            }
            return data;
        })
        localStorage.setItem('dataModel',JSON.stringify(this.dataModel));
    }

}

class View {
    constructor(){
        this.selector = this.getElement('#topic');
        this.form = this.getElement('.Sub-Form');
        this.formContent = this.getElement('.formContent');

        this.formState = {
            section: 'none',
            data: {
            },
        }

        this.formElements = {
            elements: {
            },
        }

        this.resumeElements = {
            intro: {
                name: this.getElement("#name"),
                role: this.getElement("#role"),
                desc1: this.getElement("#overviewDesc1"),
                desc2: this.getElement("#overviewDesc2"),
            },
            contact: {
                mail: this.getElement("#mail"),
                phone: this.getElement("#phone"),
                whatsApp: this.getElement("#whatsApp"),
                linkedIn: this.getElement("#linkedIn"),
            },
            skill: {
                list: this.getElement(".section.experties ul"),
            },
            edu: {
                list: this.getElement(".section.education .content"),
            },
            award: {
                list: this.getElement(".section.award .content"),
            },
            exp: {
                list: this.getElement(".section.experience .content"),
            },
            ref: {
                list: this.getElement(".section.reference .content"),
            },
            img: {
                image: this.getElement("img"),
            }
        }

        this.previewElements = {
            preview : document.getElementById("preview"),
            modal : document.getElementsByClassName("modal")[0],
            overlay : document.getElementsByClassName("overlay")[0],
            page : document.getElementsByClassName("page")[0],
            closePreview : document.getElementById("closePreview"),
        }
        
        this.bindPreviewBtn();
        this.bindClosePreviewBtn();
    }

    renderForm(section,dataModel){
        this.formContent.innerHTML = formHTML[section];

        this.formElements.elements = {};
        this.formState.data = {};
        [...this.formContent.children].forEach(child => {
            if(child.tagName == 'INPUT'){
                this.formElements.elements[child.id] = child;
            }
            if(child.tagName == 'UL'){
                this.formElements.formList = child;
            }
        })

        if(isIterable[section]){
            dataModel.data[section].forEach(data => {
                let {formElement,resumeElement} = addElement({section,data});
                this.formElements.formList.insertAdjacentHTML('beforeend',formElement);
            })
        }else{
            for(let key in this.formElements.elements){
                if(this.formElements.elements[key].type === 'text')
                this.formElements.elements[key].value = dataModel.data[section][key];
            }
            this.formState.data = {...dataModel.data[section]}
        }

        if(isEditable[section]){
            this.formElements.elements['save'] = this.getElement('.saveBtn');
            this.formElements.elements['cancel'] = this.getElement('.cancelBtn');
            this.bindCancelBtn();
        } 

        this.bindTextInput();
    }

    setResumeData(){
        if(this.formState.section === 'intro'){
            this.resumeElements.intro.name.innerHTML = this.formState.data.name;
            this.resumeElements.intro.role.innerHTML = this.formState.data.role;
            this.resumeElements.intro.desc1.innerHTML = this.formState.data.desc;
            this.resumeElements.intro.desc2.innerHTML = this.formState.data.desc;
        }else if(this.formState.section === 'contact'){
            this.resumeElements.contact.mail.innerHTML = this.formState.data.mail;
            this.resumeElements.contact.mail.href = `mailto:${this.formState.data.mail}`;
            this.resumeElements.contact.phone.innerHTML = this.formState.data.phone;
            this.resumeElements.contact.phone.href = `tel: ${this.formState.data.phone}`;
            this.resumeElements.contact.whatsApp.innerHTML = this.formState.data.whatsApp;
            this.resumeElements.contact.whatsApp.href = `https://wa.me/${this.formState.data.whatsApp}`;
            this.resumeElements.contact.linkedIn.innerHTML = this.formState.data.linkedIn;
            this.resumeElements.contact.linkedIn.href = `https://www.linkedin.com/in/${this.formState.data.linkedIn}`;
        }else if(this.formState.section === 'img'){
            this.resumeElements.img.image.setAttribute('src', this.formState.data.image);
        }else{
            let {formElement,resumeElement} = addElement(this.formState);
            this.resumeElements[this.formState.section].list.insertAdjacentHTML('beforeend',resumeElement);
            this.formElements.formList.insertAdjacentHTML('beforeend',formElement);
        }
    }

    resetForm(){
        for(let key in this.formElements.elements){
            if(this.formElements.elements[key].type === 'text'){
                this.formElements.elements[key].value = '';
                this.formState.data[key]='';
            }
        }
    }

    toggleEdit(){
        this.getElement(".edit").classList.toggle("invisible");
        this.formElements.formList.classList.toggle("invisible");
        this.formElements.elements.btn.classList.toggle("invisible");
    }

    loadResume(dataModel){
        // load Intro Section
        this.resumeElements.intro.name.innerHTML = dataModel.data.intro.name;
        this.resumeElements.intro.role.innerHTML = dataModel.data.intro.role;
        this.resumeElements.intro.desc1.innerHTML = dataModel.data.intro.desc;
        this.resumeElements.intro.desc2.innerHTML = dataModel.data.intro.desc;

        // load Contact Section
        this.resumeElements.contact.mail.innerHTML = dataModel.data.contact.mail;
        this.resumeElements.contact.phone.innerHTML = dataModel.data.contact.phone;
        this.resumeElements.contact.phone.href = `tel: ${dataModel.data.contact.phone}`;
        this.resumeElements.contact.whatsApp.innerHTML = dataModel.data.contact.whatsApp;
        this.resumeElements.contact.whatsApp.href = `https://wa.me/${dataModel.data.contact.whatsApp}`;
        this.resumeElements.contact.linkedIn.innerHTML = dataModel.data.contact.linkedIn;
        this.resumeElements.contact.linkedIn.href = `https://www.linkedin.com/in/${dataModel.data.contact.linkedIn}`;
        this.resumeElements.contact.mail.href = `mailto:${dataModel.data.contact.mail}`;

        //load Img
        this.resumeElements.img.image.setAttribute('src', dataModel.data.img.image);

        //load Iterable Sections
        for(let section in isIterable){
            if(isIterable[section]){
                dataModel.data[section].forEach(data => {
                    let {formElement,resumeElement} = addElement({section,data});
                    this.resumeElements[section].list.insertAdjacentHTML('beforeend',resumeElement);
                })
            }
        }
    }

    // Event Listners //////////////////////////////////////////////////////////////////////////////////
    bindTopicSelector(handler) {
        this.selector.addEventListener('change',e => {
            this.formState.section = this.selector.value;
            handler(this.selector.value);
        })
    }

    bindTextInput(){
        for(let key in this.formElements.elements){
            if(this.formElements.elements[key].type !== 'submit')
            this.formElements.elements[key].addEventListener('input',e => {
                if(this.formElements.elements[key].type === 'text')
                    this.formState.data[key] = e.target.value;
                else{
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        this.formState.data.image = e.target.result;
                    }
                    reader.readAsDataURL(this.formElements.elements.image.files[0]);
                }
            })
        }
    }

    bindSubmitForm(handler){
        this.form.addEventListener('submit', e=> {
            e.preventDefault();
            this.formState.data.id = utils.generateUID();
            this.setResumeData();
            handler(this.formState);
            if(isIterable[this.formState.section])
            this.resetForm();
        })
    }

    bindDeleteBtn(id,handler){
        document.getElementById(`${id}R`).remove();
        document.getElementById(`${id}L`).remove();
        handler(this.formState.section,id);
    }

    bindCancelBtn(){
        this.formElements.elements.cancel.addEventListener('click',e => {
            this.toggleEdit();
            this.resetForm();
        })
    }

    bindEditBtn(data){  
        for(let key in data){
            if(key != 'id'){
                this.formElements.elements[key].value = data[key];
            }
        }
        this.formState.data = {...data};
        this.formElements.elements.save.setAttribute('id',data.id+'-save');
        this.toggleEdit();
    }

    bindFormList(deleteHandler,getItem){
        this.formElements.formList.addEventListener('click',e => {
            if(e.target.type!='button')
            return;

            if(e.target.value == 'X'){
                this.bindDeleteBtn(e.target.id, deleteHandler);
            }
            else if(e.target.value == 'Edit'){
                const id=e.target.id.split('-')[0];
                this.bindEditBtn(getItem(this.formState.section, id));
            }  

        })
    }

    bindSaveBtn(handler){
        this.formElements.elements.save.addEventListener('click',e => {
            const id = e.target.id.split('-')[0];
            handler(id,this.formState);

            document.getElementById(id+'R').children[0].innerHTML = this.formState.data.year;
            document.getElementById(id+'R').children[1].innerHTML = this.formState.data.institute;
            document.getElementById(id+'R').children[2].innerHTML = this.formState.data.desc;

            document.getElementById(id+'L').children[0].innerHTML = this.formState.data.year;
            document.getElementById(id+'L').children[1].innerHTML = this.formState.data.institute;
            document.getElementById(id+'L').children[2].innerHTML = this.formState.data.desc;

            this.resetForm();
            this.toggleEdit();
        })
    }

    bindPreviewBtn(){
        this.previewElements.preview.addEventListener("click",() => {
            let modalContent = this.createElement('div',[],{
                class:"page"
            });
            modalContent.innerHTML = this.previewElements.page.innerHTML;
            this.previewElements.modal.appendChild(modalContent);
            this.previewElements.modal.classList.remove("hidden");
            this.previewElements.overlay.classList.remove("hidden");
        })
    }

    bindClosePreviewBtn(){
        this.previewElements.closePreview.addEventListener("click",()=>{
            this.previewElements.modal.removeChild(this.previewElements.modal.children[1]);
            this.previewElements.modal.classList.add("hidden");
            this.previewElements.overlay.classList.add("hidden");
        })
    }

    /// Basic Functions ////////////////////////////////////////////////////////////////////////////////
    createElement(tag, classNames=[], props={}){
        const element = document.createElement(tag);
        for(let cN in classNames){
            element.classList.add(cN);
        }
        for(let key in props){
            element.setAttribute(key,props[key]);
        }
        return element;
    }

    getElement(selector){
        const element = document.querySelector(selector);
        return element;
    }
}

class Controller {
    constructor(model,view){
        this.model = model;
        this.view = view;
        this.view.loadResume(this.model.dataModel);
        this.view.bindTopicSelector(this.handleTopicSelection);
        this.view.bindSubmitForm(this.handleFormSubmit);
    }

    handleTopicSelection = section => {
        this.model.setSection(section);
        this.view.renderForm(section,this.model.dataModel);
        if(isIterable[section]){
            this.view.bindFormList(this.handleDeleteBtn,this.handlerGetItem);
        }

        if(isEditable[section]){
            this.view.bindSaveBtn(this.handleSaveBtn);
        }

    }

    handleSaveBtn = (id,formState) => {
        this.model.saveItem(id,formState);
    }

    handlerGetItem = (section,id) => {
        return this.model.getItem(section,id);
    }

    handleFormSubmit = formState => {
        this.model.setData(formState);
    }

    handleDeleteBtn = (section,id) => {
        this.model.deleteItem(section,id);
    }
}

const app = new Controller(new Model, new View);