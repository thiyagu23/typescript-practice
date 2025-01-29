import React from 'react';
import logo from './logo.svg';
import './App.css';
// import DataTypes from './view/DataTypes'

function App() {

  //datatypes
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let score: any = 100;
  let unknownValue: unknown = "Hello";
  
  let ages: string = "20"
  let names: string = "ssssss"
  
  console.log(names);

  // duck typing
  let data = { id: 1, name: "thiyagu" }
  data = {name: "sss" , id: 1 }
  
  //array
  let arrNumbers = {id:1,}
  
  console.log(arrNumbers);


  
  



  return (
    <div className="App">
      <header className="App-header">
        <p>
          TS Practice
        </p>
        {/* <DataTypes/> */}
      </header>
    </div>
  );
}

export default App;
