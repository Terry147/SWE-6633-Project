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
            <div id = "title">
            <h1> New Project</h1>
            </div>
            <form onSubmit={this.handleSave}>
            <table id="lay" >

            <tbody>

            <div>

            
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Project Name</h1> </div></th>
                    <th><input type ="text" id="funReq" name="title" value = {project.title} onChange={this.updateValue}></input></th>
                </tr>
                </div>

                <div>
                <tr>
                     <th id = "reqlabel"><div id = "Fun"><h1>Project Owner</h1> </div></th>
                     <th><input type ="text" id="funReq" name="owner" value = {project.owner} onChange={this.updateValue}></input></th>
                </tr>
                </div>

    

            <div>

              <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Team Memebers</h1> </div></th>
                    <th><input type ="text" id="funReq" name="team" value = {project.team} onChange={this.updateValue}></input></th>
                </tr>
                </div>

                <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Project Description</h1> </div></th>
                    <th><input type ="text" id="funReq" name="description" value = {project.description} onChange={this.updateValue}></input></th>
                </tr>
                </div>


                <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Risks</h1> </div></th>
                    <th><input type ="text" id="funReq" name="risk" value = {project.risk} onChange={this.updateValue}></input></th>
                </tr>
                </div>
                <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Risk Status</h1> </div></th>
                    <th><input type ="text" id="funReq" name="riskStatus" value = {project.riskStatus} onChange={this.updateValue}></input></th>
                </tr>
                </div>
                
                <div>
               <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Functional Requirements</h1> </div></th>
                    <th><input type ="text" id="funReq" name="functionalreq" value = {project.functionalreq} onChange={this.updateValue}></input></th>
                </tr>
                </div>

                <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Functional Requirement Hours</h1> </div></th>
                    <th><input type ="text" id="funReq" name="totlalfunctionalreqhour" value = {project.totlalfunctionalreqhour} onChange={this.updateValue}></input></th>
                </tr>
                </div>

                <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Non-Functional Requirements</h1> </div></th>
                    <th><input type ="text" id="funReq" name="nonfunctionalreq" value = {project.nonfunctionalreq} onChange={this.updateValue}></input></th>
                </tr>
                </div>

                <div>
                <tr>
                    <th id = "reqlabel"><div id = "Fun"><h1>Non-Functional Requirement Hours</h1> </div></th>
                    <th><input type ="text" id="funReq" name="totlalnonfunctionalreqhour" value = {project.totlalnonfunctionalreqhour} onChange={this.updateValue}></input></th>
                </tr>
                </div>
              
               </tbody>

            </table>

            <div className="project-form-button">

                
                <button className="btn" id = "save">Save</button>
                <Link id= "can" to ="/">Cancel</Link>
            </div>
        </form>

        </div>

         );
}

}  