import { useEffect } from "react";
import './App.css';
import Form from './components/organism/Form/index';
import Page from './components/organism/Resume/Page';

function App() {
  return (
    <div className="layout">
      <Form />
      <Page />
    </div>
  );
}

export default App;