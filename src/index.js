const mapboxgl = require("mapbox-gl");
const markerFactory = require("./marker.js")

mapboxgl.accessToken = "pk.eyJ1IjoiaXZ5dHNvaSIsImEiOiJjamltM3J2bGYwMDJhM3BxaDZ5ZGxybHo1In0.gpReoExkzZ3wbJszx7TMKg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

module.exports = map;
