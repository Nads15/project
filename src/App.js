import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Thiw is my html h3ading</h1>
     <lable>Name of Case Study: </lable>
     <textarea id="name" name="" rows="4" cols="50"></textarea><br></br>
     {/* <input type="textarea"></input> <br></br> */}
     <lable>Topic: </lable>
     <textarea id="topic" name="" rows="4" cols="50"></textarea><br></br>
     <lable>Sub-topic: </lable>
     <textarea id="stopic" name="" rows="4" cols="50"></textarea><br></br>
     <lable>Purpose/Objective: </lable>
     <textarea id="objective" name="" rows="4" cols="50"></textarea><br></br>
     <lable>Overview: </lable>
     <textarea id="overview" name="" rows="4" cols="50"></textarea><br></br>
     <lable>Desired Information: </lable>
     <textarea id="info" name="" rows="4" cols="50"></textarea><br></br>
     <lable>What is to be studied/found by his study? </lable>
     <textarea id="ques1" name="" rows="4" cols="50"></textarea><br></br>
     <lable>What will contributor gain ? </lable>
     <textarea id="ques2" name="" rows="4" cols="50"></textarea><br></br>
     <lable>Skill Wise: </lable>
     <textarea id="skill" name="" rows="4" cols="50"></textarea><br></br>

     <input type="submit" value="Submit"></input><br></br>

    </div>
  );
}

export default App;
