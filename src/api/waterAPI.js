const axios = require('axios');

const apiUrl = "https://data.cityofnewyork.us/resource/3wxk-qa8q.json"

const grabAllData = axios.get(apiUrl).then(res => res.data).catch(err => console.log(err))
    

export default {
    grabAllData 
}