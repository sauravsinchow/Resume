import { useEffect, useState } from "react";
import './App.css';
import Form from './components/organism/Form/index';
import Page from './components/organism/Resume/Page';

const initialState = {
  intro: {
      name: 'Name',
      role: 'Role',
      desc: 'Description',
  },
  skill: [],
  edu: [],
  awards: [],
  exp: [],
  ref: [],
  img: {
    url: ''
  }
}

function App() {
  const [dataModel,setDataModel] = useState(initialState);

  const onFormSubmit = (section,data) => {
    const updatedState = {...dataModel, [section]:data};
    console.log(section,data);
    setDataModel(updatedState);
    localStorage.setItem('data',JSON.stringify(updatedState));
  }

  useEffect(()=>{
    const dataFromLS = JSON.parse(localStorage.getItem('data')) || initialState;
    setDataModel(dataFromLS);
  },[]);

  return (
    <div className="layout">
      <Form onFormSubmit={onFormSubmit} dataModel={dataModel} />
      <Page data={dataModel} />
    </div>
  );
}

export default App;