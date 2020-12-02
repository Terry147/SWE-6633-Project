import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



function addReq(){
 
  console.log("ye");
}

function title(){
  return <table id="lay">
  <thead>
    <tr>
      <th colSpan = '5' > <div id = "titleDiv"><h1>Requirements</h1></div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id = "reqlabel"><div id = "Fun"><h1>Functional</h1> </div></th>
      <th><input id="funReq"></input></th>
      <th rowSpan = '3' id = "reqList"><select id = "require">Requirements</select></th>
      <th><button id="addHoursBtn">Add Hours</button></th>
      <th><input id ="hours"></input></th>
    </tr>
    <tr>
      <th id = "reqlabel"><div id = "nonFun"><h1>Non-Functional</h1> </div></th>
      <th><input id="nonFunReq"></input></th>
      <th><button id = "deleteReqBtn">Remove</button></th>
      <th></th>
    </tr>
    <tr>
      <th><button onClick={addReq} id="addReq">Add Requirement</button></th>
      <th><button id="editReq">Edit Requirement</button></th>
      <th><div id = "tot"><h2>Total Hours</h2> </div></th>
      <th><label id = "totHrs">20</label></th>
    </tr>
    <tr id="blankrow">
      <th colSpan = '5' ></th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th><button id ="utlBtn">Edit Project</button></th>
      <th><button id = "utlBtn">View Project</button></th>
      <th><button id = "utlBtn">New Project</button></th>
    </tr>
  </tbody>
</table>

}







ReactDOM.render(<App/>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
