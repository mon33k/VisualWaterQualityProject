const axios = require('axios');

// const Service = require("@sap_oss/odata-library").Service;

// let service = new Service("https://username:password@localhost/path/to/service/");

// service.init.then(()=> {
//     return service.Entity_Set_Name.get(1);
// }).then((result) => {
//     console.log(result);
// });

const openDataApiUrl = "https://data.cityofnewyork.us/resource/r7js-zsqm.json"

const grabAllData = axios.get(openDataApiUrl)
    .then(res => res.data)
    .catch(err => console.log(err))

const geoDataApiUrl = "https://raw.githubusercontent.com/veltman/snd3/master/data/nyc-neighborhoods.geo.json"

const getGeoData = axios.get(geoDataApiUrl)
    .then(res => res.data)
    .catch(err => console.log(err))

    
export default {
    grabAllData,
    getGeoData
}