import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Thiw is my html h3ading</h1>
     <lable>Name of Case Study: </lable>
     <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
     {/* <input type="textarea"></input> <br></br> */}
     <lable>Topic: </lable>
     <input type="text"></input> <br></br>
     <lable>Sub-topic: </lable>
     <input type="text"></input> <br></br>
     <lable>Purpose/Objective: </lable>
     <input type="text"></input> <br></br>
     <lable>Overview: </lable>
     <input type="text"></input> <br></br>
     <lable>Desired Information: </lable>
     <input type="text"></input> <br></br>
     <lable>What is to be studied/found by his study? </lable>
     <input type="text"></input> <br></br>
     <lable>What will contributor gain ? </lable>
     <input type="text"></input> <br></br>
     <lable>Skill Wise: </lable>
     <input type="text"></input> <br></br>

    </div>
  );
}

export default App;
