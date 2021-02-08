const fs = require('fs');
const path = require('path');

const filePath = path.join(path.dirname(require.main.filename), 'data', 'phones.json');

module.exports = class Phone{
    constructor(phone){
        this.description = phone;
    }

    saveContact(){
        fs.readFile(filePath, (error, fileConent)=>{
            let phones = [];

            if(!error){
                phones = JSON.parse(fileConent);
            } else {
                console.log(error);
            }

            phones.push(this);
            fs.writeFile(filePath, JSON.stringify(phones), (error) => {

            });
        });
    }

    static fetchContacts(callBack){
        fs.readFile(filePath, (error, fileConent) => {
            if(error){
                callBack([]);
            }
            
            callBack(JSON.parse(fileConent));
        });
    }
    static deleteContact(phoneDescription){
        fs.readFile(filePath, (error, fileConent) =>{
            let phones = [];
            if(!error){
                phones = JSON.parse(fileConent);
            }

            for(let i = 0; i < phones.length; i++){
                if(phones[i].description === phoneDescription){
                    phones.splice(i,1);
                    break;
                }
            }

            fs.writeFile(filePath, JSON.stringify(phones), (error) => {
                console.log(error);
            });
        });
    }

}

