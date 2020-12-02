import logo from './logo.svg';
import './App.css';
import IndexPage from './Pages/index';
import ShowProjectPage from './Pages/showproj';
import { Component } from 'react';
import{BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import NewProject  from './Pages/newproj';
import  DB from './db';
import { render } from '@testing-library/react';

class App extends Component {
  

    //State holds an array of objects
    state = {
      db: new DB("Project DB"),
        //An array of projects
        projectsArray:{
          //First object in the Array, 
/*           1:{
            _id:1,
            title: "Example Project",
            owner: "Peter Adeojo",
            team:  "Steve , Terry",
            description:"Example Project Description",
            risk: "Current Risk Associated with the projet",
            riskStatus: "How are the risk going"
          },
          2:{
            _id:2,
            title: "Example Project 2",
            owner: "Naruto Uzamaki",
            team:  "Sasuke, Sakura",
            description:"Project for the Hidden Leaf",
            risk: "Current Risk Associated with the projet",
            riskStatus: "How are the risk going"
          },
          3:{
            _id:3,
            title: "Example Project 3",
            owner: "Monkey D. Luffy",
            team:  "Zoro, Sanji",
            description:"Project to find One Piece",
            risk: "Current Risk Associated with the projet",
            riskStatus: "How are the risk going"
          }
 */
        },
        loading:true

    }

    async componentDidMount(){

      const projectsArray = await this.state.db.getAllProjects();

      this.setState({
        projectsArray,
        loading: false
      });
    }

    handleSave = async (project) =>{
     /*  let ids = Object.keys(this.state.projectsArray);
      const id = Math.max(...ids) + 1;
   
      project['_id'] = id;
 */
      let { id } = await this.state.db.createProject(project);
      const {projectsArray} =  this.state;

      this.setState({
        projectsArray:{
          ...projectsArray,
          [id]: project
        }
      });

      return id;

    }

    async handleDelete(id) {
      let { projectsArray } = this.state;
      let project = projectsArray[id];
  
      if (projectsArray[id] && window.confirm("Are you sure you want to delete this note?")) {
        await this.state.db.deleteProject(project);
  
        delete projectsArray[id];
  
        this.setState({ projectsArray });
      }
    }

    renderContent(){

      if(this.state.loading)
      {
        return <h2>Loading.....</h2>
      }
      return(

        <div className = "app-content">

           {/* This passes the variable projects containing the the array to the index
        page*/}

        {/** Route Explanation:
         * 
         * So initially Ilinked the Indexpage  via by calling it. This is example Route1A.
         * 
         * However in order to use Browser dom (make it more web condusive) i deprecated it and used a new way.
         * 
         * The new way was the tag route. Route allowed me to set the path (check exact path in the route below)
         * 
         * However doing this caused an issue with passing the the needed paramaters to that are needed on the other web page.
         * 
         * For index, I'm testing using a static array (See above) and this needs to be passed so it can populate on the webpage.
         * 
         * Later if we are lucky, pouchdb will be be passed in the place of the arrays
         * 
         * Ass of right now from my comp the ending tags are ending with an error but the should be right
         */}

          {/* Example Route1A: <IndexPage projects = {this.state.projectsArray}/>*/}

        <Route exact path = "/" component={(props) => <IndexPage {...props} projects ={this.state.projectsArray} /> }  />


{/** For this route we need to pass a single project in order to populate the ShowProjectPage.
 * 
 * I do this by setting the paramaters passed to the web page to the project array BUT i use the [] meaning a single value
 * 
 * from the array will be choosen. From there I use props.match.params._id. This specfic call wiil match the ID to the project choosen
 * 
 * --changed projects to project because only 1 project will be passed. Semantics are important
 */}

{/* <Route exact path = "/project/:id" component={(props) => <ShowProjectPage {...props} project ={this.state.projectsArray[props.match.params.id]} /> }  /> */}


<Route exact path = "/newproj" component={(props) => <NewProject {...props} onSave={this.handleSave} /> }  />



<Route exact path= "/project/:id" component={(props) => <ShowProjectPage {...props} project={this.state.projectsArray[props.match.params.id]} onDelete={(id) => this.handleDelete(id) }/> } />


        </div>

        
      );
    }

    render()
    {
      return(
      <BrowserRouter>
        <div className = "App">
        <Navbar />
       {this.renderContent()}
       </div>

       
         
      </BrowserRouter>
      );

    }

  /*   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */


  
}

export default App;
