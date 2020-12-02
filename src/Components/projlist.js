import { render } from '@testing-library/react';
import React from 'react';
import {Link} from 'react-router-dom'

export default class ProjectList extends React.Component{

//Renders all the projects currently in Array/db
renderProject()
{
    //Creates a var to collect values of the projects array/db
    const projectListed = Object.values(this.props.allListedProjects);
    
    //This takes the collected values from the passed arrays/db and 
    //loops through to get the name of eachone
    //This needs to be returned for rendering
   return projectListed.map((n) => 
    <div>
        <h2>
            {/**I modified this so that it links based on the id of the project
             * 
             * This can be seen on the index page .
             */}
            <Link to = {`/project/${n._id}`}>{n.title} </Link>

        </h2>
    </div>);

}


render()
{
    return(

        <div>
            {/* This runs the above methods*/}
            {this.renderProject()}
        </div>

    )
}


}