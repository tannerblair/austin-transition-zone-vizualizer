function createMap(L, boundsArray, latitude, longitude, zoom, zonecolor, width_id, offset_id) {
    "use strict";
    var T = {"map": null, "zonecolor": zonecolor, "w": null, "offset": null, "style": {"medium": null, "heavy": null, "corridor": null, "offset": null}, "update": null},
        opacity = 0.1;
    T.layers = L.layerGroup();

    T.map = L.map('mapid').setView([30.272597, -97.752100], zoom);
    
    T.offset = function () {
        return document.getElementById(offset_id).value * 3.7;
    };
    
    T.w = function (lots, totallots) {
        return (((document.querySelector('input[name= width]:checked').value * 0.3048) / totallots) * lots)  + this.offset();
    };
    T.style.medium = function () {
        return {
            corridor: T.w(6, 6),
            className: 'route-corridor',
            opacity: opacity,
            color: T.zonecolor
        };
    };
    T.style.heavy = function () {
        return {
            corridor: (T.w(3, 6)),
            className: 'route-corridor',
            opacity: opacity,
            color: T.zonecolor
        };
    };
    T.style.corridor = function () {
        return {
            corridor: T.w(1, 6),
            className: 'route-corridor',
            opacity: opacity * 2,
            color: "green"
        };
    };
    T.style.offset = function () {
        return {
            corridor: T.offset(),
            className: 'route-corridor',
            opacity: 0.5,
            color: "black"
        };
    };
    
    T.update = function () {
        T.layers.clearLayers();
        for (let b of boundsArray){
            T.addBounds(b);

        }
    };
    
    T.addBounds = function addBounds(bounds) {
        L.corridor(bounds, T.style.medium()).addTo(T.layers);
        L.corridor(bounds, T.style.heavy()).addTo(T.layers);
        L.corridor(bounds, T.style.corridor()).addTo(T.layers);
        L.corridor(bounds, T.style.offset()).addTo(T.layers);
        T.layers.addTo(T.map);
    }
    
    T.clearLayers = function() {
        T.map.clearLayers();
    }
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoidGFubmVyYmxhaXIiLCJhIjoiY2swMDU3NzY2MjR4ejNubWpidm1pNnY2diJ9.kyPKhliZeTpxlSYmkMn-nA'
    }).addTo(T.map);
    return T;
}

function initializeMap(L, bounds, width_id, offset_id) {
    "use strict";
    var mymap = createMap(L, bounds, 30.352470, -97.699587, 11, "blue", width_id, offset_id),
        offset = document.getElementById(offset_id),
        width = document.getElementById(width_id);
    
    offset.oninput = function () {
        mymap.update();
    };
    
    width.oninput = function () {
        mymap.update();
    };
    
    mymap.update();
    
    return mymap;
}

