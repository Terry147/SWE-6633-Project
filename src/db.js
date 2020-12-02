import PouchDB from 'pouchdb';

export default class DB{

    constructor(name){
        this.db = new PouchDB(name);
    }

    async getAllProjects(){
        let allProjects = await this.db.allDocs({include_docs:true});

        let projectArray = {};

        allProjects.rows.forEach(n => projectArray[n.id] = n.doc);

        return projectArray;

    }

    async createProject(project)
    {
        const res = await this.db.post({...project});

        return res;
    }



    async deleteProject(project) {
        await this.db.remove(project);
    }

}


