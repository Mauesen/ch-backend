const fs = require('fs');

module.exports.Container = class Container{

    constructor(){

        this.fileName= 'assets/products.txt';
        
    };


    getAll(){

        let fileToRead =  fs.readFileSync(this.fileName,'utf-8');

        return fileToRead;

    };

    getById(id){

        const fileContent = this.getAll();
        const fileContentParsed = JSON.parse(fileContent);

        return fileContentParsed.filter((f)=> f.id === id);
            
    }

}







