
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import { useState } from 'react';

function App() {

  const company = "MMMI"

  const [name, setName] =  useState("Mansoor")

  return (
    <div className="App">
      <h1>Class component</h1>
      <ClassComponent/>
      <br />
      <h1>Functional Components</h1>
      <FunctionalComponent 
        name = {name} 
        number = {45} 
        company = {company}
        setName = {setName}
        />

    </div>
  );
}

export default App;
