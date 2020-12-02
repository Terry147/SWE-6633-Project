import React from 'react';
import {Link} from 'react-router-dom';



export default class ShowProjectPage extends React.Component{


   
    componentWillMount() {
        if (!this.props.project) {
            this.props.history.replace(`/`);
            return;
        }
    }

    render()
    {

        //This sets a variable that cataches a SINGULAR project
        //This is set different from the ones that catch the whole array
        const{project} = this.props;

        if (!project) {
            return null;
        }

        return(
            
            //this prints out the project information.
            //The information is pulled from the var above
            <div>
                <form onSubmit={this.handleSave}>
                <h1>{project.title}</h1>
                <div>Owner: {project.owner}</div>
                <div>Team: {project.team}</div>
                <div>Project Description: {project.description}</div>
                <div>Risk: {project.risk}</div>
                <div>Risk Status: {project.riskStatus}</div>
                <div>Functional Requirment: {project.functionalreq}</div>
                <div>Total Functional Requirment Time(Hrs): {project.totlalfunctionalreqhour}</div>
                <div>Non Functional Requirment: {project.nonfunctionalreq}</div>
                <div>Total Non Functional Requirment Time(Hrs): {project.nonfunctionalreq}</div>

                </form>
            
                <button className="btn" onClick={ (e) => this.props.onDelete(project._id) }>Delete</button>

                <Link to ="/">Back</Link>
                {/* <button> Edit </button> */}
                </div>
                
                
           

            

        );
    }
}

/* const product = data.products.find(x => x._id === props.match.params.id);

const product = data.products.find(x => Number(x._id) === Number(props.match.params.id));


 */