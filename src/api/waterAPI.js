const axios = require('axios');

const apiUrl = "https://data.cityofnewyork.us/api/odata/v4/r7js-zsqm"

const grabAllData = axios.get(apiUrl).then(res => res.data).catch(err => console.log(err))
    

export default {
    grabAllData 
}