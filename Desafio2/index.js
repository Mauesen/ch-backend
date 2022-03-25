const fs = require('fs');

const filePathName = 'products/myProducts.txt';
const testProducts = require('./assets/testProducts');

const prod1 = {                                                                                                                                                 
    title: 'Libro',                                                                                                                                 
    price: 700.50,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-and-school-8/48/Book-256.png'                                     
                                                                                                                                                
};

const prod2 = {                                                                                                                                                 
    title: 'Tijeras',                                                                                                                                 
    price: 85,                                                                                                                                     
    thumbnail: 'https://cdn4.iconfinder.com/data/icons/to-cool-for-school/512/opened-scissor-250.png'                                     
                                                                                                                                                
};

class Container{

    //Constructor
    constructor(fileName){

        this.fileName     = fileName;
        
    };

    //Métodos


    setFileId(){

        try {

            let size = 0;
            let productLenght = fs.readFileSync(this.fileName,'utf-8')
            let productLenghtParsed = JSON.parse(productLenght);
            
            productLenghtParsed.forEach(e => {
                size++;
            });

            return size +1;
            
        } catch (error) {
            
        }


    }

    async resetFile(testProducts){

        try {

            await fs.promises.writeFile(this.fileName,testProducts)

            console.log('File reset.');
            
        } catch (error) {
            console.log(error);
        }
    };

    async getAll(){

        try {

            let fileToRead = await fs.promises.readFile(this.fileName,'utf-8');

            return fileToRead;
            
        } catch (error) {
            console.log(error);
        }
    };

    async getById(id){

        try {

            const fileContent = await this.getAll();
            const fileContentParsed = JSON.parse(fileContent);

            return fileContentParsed.filter((f)=> f.id === id);
            
        } catch (error) {
            
        }
    }

    async save(object){

        object.id = this.setFileId();

        try {

            await this.getAll()
                      .then(res => JSON.parse(res))
                      .then(res => [...res,object])
                      .then(res=> fs.promises.writeFile(filePathName,JSON.stringify(res,null,2)))   
                      .finally(console.log('File Saved'))                     
                      ;

            
           
        } catch (error) {
            console.log(error);
        }
    };

    async deleteAll(){

        try {

            await fs.promises.writeFile(this.fileName,'[]')

            console.log('Files deleted.');
            
        } catch (error) {
            console.log(error);
        }
    };
    
    async deleteById(id){

        try {

            
            await this.getAll()
                      .then(res => JSON.parse(res))
                      .then(res => res.filter((f)=> f.id !== id))   
                      .then(res=> fs.writeFileSync(this.fileName,JSON.stringify(res,null,2)));               
                      
            console.log(`File ${id} deleted`);
            
        } catch (error) {
            
        }


    };

    

    


}

/* DECLARO LA INSTANCIA DEL CONTENEDOR */

const myContainer = new Container(filePathName);

/* CARGO LOS DATOS DEL MOCK */

myContainer.resetFile(JSON.stringify(testProducts,null,2));

/* AGREGO PROCUTOS  */

//myContainer.save(prod1);
//myContainer.save(prod2);


/* LEO TODOS LOS PRODUCTOS */

//const allMyFiles = myContainer.getAll();

/* LEO UN PRODUCTO POR ID */

//const myFile = myContainer.getById(4)

/* BORRO UN PRODUCTO POR ID */

//myContainer.deleteById(1)

const main = async () => {

    //console.log(await allMyFiles);

    //console.log(await myFile);
   

};

main();


/* BORRO TODOS LOS PRODUCTOS */

//myContainer.deleteAll();





