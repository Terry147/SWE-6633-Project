import React from 'react';
import {Link} from 'react-router-dom';
import './proj.css';



export default class NewProject extends React.Component{

//This allows us to add new projects to the db/browser

//We need to create an empty state , a default empty note, during the load up of the page

state = {
    project: {
        title: '',
        owner: '',
        team: '',
        description:'',
        risk:'',
        riskStatus:'',
        functionalreq:'',
        totlalfunctionalreqhour:'',
        nonfunctionalreq:'',
        totlalnonfunctionalreqhour:''
    }

}
//helps update values
updateValue = (e) => {
    const { project } = this.state;

    this.setState({
        project: { ...project, [e.target.name]: e.target.value }
    });
}


handleSave = async (e) =>{
    e.preventDefault();

    const id = await this.props.onSave(this.state.project);

    this.props.history.replace(`/project/${ id }`);
}



render()
{

    const { project } = this.state;

    return(
        <div className ="project-form">
            <h1> New Project</h1>
            <form onSubmit={this.handleSave}>
            <table id="lay" >

            <thead>
                <tr>
                    <th colSpan = '5' > <div id = "titleDiv"><h1>Requirements</h1></div></th>
                </tr>
            </thead>

            <tbody>

            <div>

            
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Project Name</h1> </div></th>
                    <th><input type ="text" id="funReq" name="title" value = {project.title} onChange={this.updateValue}></input></th>
                  {/*   <th rowSpan = '3' id = "reqList"><select id = "require">Requirements</select></th>
                    <th><button id="addHoursBtn">Add Hours</button></th>
                    <th><input id ="hours"></input></th> */}
                </tr>
                </div>

                <div>
                <tr>
                     <th id = "reqlabel"><div id = "nonFun"><h1>Project Owner</h1> </div></th>
                     <th><input type ="text" id="nonFunReq" name="owner" value = {project.owner} onChange={this.updateValue}></input></th>
                    {/*  <th><button id = "deleteReqBtn">Remove</button></th>
                     <th></th> */}
                </tr>
                </div>

                {/* <tr>
                    <th><button onClick={addReq} id="addReq">Add Requirement</button></th>
                    <th><button id="editReq">Edit Requirement</button></th>
                    <th><div id = "tot"><h2>Total Hours</h2> </div></th>
                    <th><label id = "totHrs">20</label></th>
                </tr> */}

            <div>

              <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Team Memebers</h1> </div></th>
                    <th><input type ="text" id="funReq" name="team" value = {project.team} onChange={this.updateValue}></input></th>
                  {/*   <th rowSpan = '3' id = "reqList"><select id = "require">Requirements</select></th>
                    <th><button id="addHoursBtn">Add Hours</button></th>
                    <th><input id ="hours"></input></th> */}
                </tr>
                </div>

                <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Project Description</h1> </div></th>
                    <th><input type ="text" id="funReq" name="description" value = {project.description} onChange={this.updateValue}></input></th>
                  {/*   <th rowSpan = '3' id = "reqList"><select id = "require">Requirements</select></th>
                    <th><button id="addHoursBtn">Add Hours</button></th>
                    <th><input id ="hours"></input></th> */}
                </tr>
                </div>


                <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Risks</h1> </div></th>
                    <th><input type ="text" id="funReq" name="risk" value = {project.risk} onChange={this.updateValue}></input></th>
                  {/*   <th rowSpan = '3' id = "reqList"><select id = "require">Requirements</select></th>
                    <th><button id="addHoursBtn">Add Hours</button></th>
                    <th><input id ="hours"></input></th> */}
                </tr>
                </div>


                <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Risk Status</h1> </div></th>
                    <th><input type ="text" id="funReq" name="riskStatus" value = {project.riskStatus} onChange={this.updateValue}></input></th>
                  {/*   <th rowSpan = '3' id = "reqList"><select id = "require">Requirements</select></th>
                    <th><button id="addHoursBtn">Add Hours</button></th>
                    <th><input id ="hours"></input></th> */}
                </tr>



                    <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Functional Requirment</h1> </div></th>
                    <th><input type ="text" id="funReq" name="functionalreq" value = {project.functionalreq} onChange={this.updateValue}></input></th>
                  {/*   <th rowSpan = '3' id = "reqList"><select id = "require">Requirements</select></th>
                    <th><button id="addHoursBtn">Add Hours</button></th>
                    <th><input id ="hours"></input></th> */}
                </tr>
                </div>


                <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Total Functional Requirment (HRS)</h1> </div></th>
                    <th><input type ="text" id="funReq" name="totlalfunctionalreqhour" value = {project.totlalfunctionalreqhour} onChange={this.updateValue}></input></th>
                  {/*   <th rowSpan = '3' id = "reqList"><select id = "require">Requirements</select></th>
                    <th><button id="addHoursBtn">Add Hours</button></th>
                    <th><input id ="hours"></input></th> */}
                </tr>
                </div>
                <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Non Functional Requirment</h1> </div></th>
                    <th><input type ="text" id="funReq" name="nonfunctionalreq" value = {project.nonfunctionalreq} onChange={this.updateValue}></input></th>
                  {/*   <th rowSpan = '3' id = "reqList"><select id = "require">Requirements</select></th>
                    <th><button id="addHoursBtn">Add Hours</button></th>
                    <th><input id ="hours"></input></th> */}
                </tr>
                </div>
                <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Total Non Functional Requirment (HRS) </h1> </div></th>
                    <th><input type ="text" id="funReq" name="totlalnonfunctionalreqhour" value = {project.totlalnonfunctionalreqhour} onChange={this.updateValue}></input></th>
                  {/*   <th rowSpan = '3' id = "reqList"><select id = "require">Requirements</select></th>
                    <th><button id="addHoursBtn">Add Hours</button></th>
                    <th><input id ="hours"></input></th> */}
                </tr>
                </div>






                </div>



            </tbody>

            


            </table>

            <div className="project-form-button">

                
                <button className="btn">Save</button>
                <Link to ="/">Cancel</Link>
            </div>
        </form>



        </div>

        

    );
}

}  