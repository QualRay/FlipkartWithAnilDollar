const BASE_URL = 'http://localhost:1337';
//const prod_url = 'https://secret-ravine-75169.herokuapp.com';

let headers = {
    
        'Content-Type': 'application/json',
        'accept': 'application/json',
        //'Authorization': 'Bearer ' 
    
}

//how to export data in NodeJS ?
//1. Default export and 2. Named Export

//export default BASE_URL;

module.exports = { BASE_URL , headers }