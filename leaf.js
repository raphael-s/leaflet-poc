var data = [
    {
        name: "Wochenzeitung f&uuml;r das Emmental und Entlebuch",
        cords: [46.93770298799982, 7.79173590038576],
        size: 25000
    },
    {
        name: "Z&uuml;rich Nord",
        cords: [47.40794706357367, 8.546822155905124],
        size: 5000
    },
    {
        name: "Z&uuml;riberg",
        cords: [47.366405016809246, 8.58528539504685],
        size: 5000
    },
    {
        name: "K&uuml;snachter",
        cords: [47.33251892613395, 8.605495347006638],
        size: 5000
    },
    {
        name: "Z&uuml;rich 2",
        cords: [47.34967215608596, 8.51791888637591],
        size: 5000
    },
    {
        name: "Z&uuml;rich West",
        cords: [47.390398171052496, 8.49415379520855],
        size: 5000
    },
    {
        name: "GHI",
        cords: [46.197522894372796, 6.145753849641608],
        size: 10000
    },
    {
        name: "Lausanne Cites",
        cords: [46.522081847927886, 6.637948617066707],
        size: 8000
    },
    {
        name: "Bärnerbär",
        cords: [46.95247383641984, 7.470933083113587],
        size: 12000
    },
]

var map = L.map('map').setView([46.93916245910683, 7.7877298562132085], 9);

var openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var googleSattelite = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

var googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleStreets.addTo(map)

var markers = L.markerClusterGroup();
var circles = L.markerClusterGroup();

var newsIcon = L.icon({
    iconUrl: 'newspaper.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
})

function addPublisher(name, cords, size) {
    var circ = L.circle(cords, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: size
    });
    
    circles.addLayer(circ);

    var mark = L.marker(cords, /* {icon: newsIcon} */)
    mark.bindPopup(name);
    markers.addLayer(mark);
}

for (let i = 0; i < data.length; i++) {
    addPublisher(data[i].name, data[i].cords, data[i].size);
}

map.addLayer(circles);
map.addLayer(markers);