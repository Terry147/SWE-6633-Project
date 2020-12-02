import React from 'react';
import ProjectList from '../Components/projlist';
import './proj.css';
export default class IndexPage extends React.Component{



    render()
    {
        const projects = Object.values(this.props.projects);

        return(
        <div>

            <h1> Projects</h1>

           { /*<h2>{projects[0]._title}</h2>*/}

            <ProjectList allListedProjects = {this.props.projects} />
        </div>
        )
    }

}