const request = require("request");

const geocode = (address, callback) => {
  const url =
    "http://api.positionstack.com/v1/forward?access_key=57af34b3609762a9b339b08c4319765c&query=" +
    encodeURIComponent(address) +
    "";

  request({ url, json: true }, (error, {body} = {}) => {
    if (error) {
      callback("Unable to connect to location services!");
    } else if (body.data.length === 0 || body.data.length === '') {
      callback("Unable to find location, try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].name,
      });
    }
  });
};

module.exports = geocode;