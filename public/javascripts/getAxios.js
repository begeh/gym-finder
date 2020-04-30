const axios = require('axios');

function getAxios(){
  return axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+toronto+canada&key=AIzaSyB5Gt5W_NoLCy1k3_pbqPiDwjcrobZ5G7Q")
  .then(res => console.log(res.data));
}
