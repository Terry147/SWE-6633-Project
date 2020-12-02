import React from 'react';



export default class ShowProjectPage extends React.Component{



    render()
    {

        //This sets a variable that cataches a SINGULAR project
        //This is set different from the ones that catch the whole array
        const{project} = this.props;

        if(!project){
            return null;
        }

        return(
            
            //this prints out the project information.
            //The information is pulled from the var above
            <div>
                <h1>{project.title}</h1>
                <div>Owner: {project.owner}</div>
                <div>Team: {project.team}</div>
                <div>Project Description: {project.description}</div>
                <div>Risk: {project.risk}</div>
                <div>Risk Status: {project.riskStatus}</div>
                <div>Functional Requirment: {project.functionalreq}</div>
                <div>Total Functional Requirment Time(Hrs): {project.totlalfunctionalreqhour}</div>
                <div>Non Functional Requirment: {project.nonfunctionalreq}</div>
                <div>Total Non Functional Requirment Time(Hrs): {project.totlalnonfunctionalreqhour}</div>

            
            </div>

            

        );
    }
}

/* const product = data.products.find(x => x._id === props.match.params.id);

const product = data.products.find(x => Number(x._id) === Number(props.match.params.id));


 */

