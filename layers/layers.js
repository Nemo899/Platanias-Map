var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Platanias_Confini_1 = new ol.format.GeoJSON();
var features_Platanias_Confini_1 = format_Platanias_Confini_1.readFeatures(json_Platanias_Confini_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Platanias_Confini_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Platanias_Confini_1.addFeatures(features_Platanias_Confini_1);
var lyr_Platanias_Confini_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Platanias_Confini_1, 
                style: style_Platanias_Confini_1,
                popuplayertitle: 'Platanias_Confini',
                interactive: true,
                title: '<img src="styles/legend/Platanias_Confini_1.png" /> Platanias_Confini'
            });
var format_Platanias_Buildingbuilding_2 = new ol.format.GeoJSON();
var features_Platanias_Buildingbuilding_2 = format_Platanias_Buildingbuilding_2.readFeatures(json_Platanias_Buildingbuilding_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Platanias_Buildingbuilding_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Platanias_Buildingbuilding_2.addFeatures(features_Platanias_Buildingbuilding_2);
var lyr_Platanias_Buildingbuilding_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Platanias_Buildingbuilding_2, 
                style: style_Platanias_Buildingbuilding_2,
                popuplayertitle: 'Platanias_Building — building',
                interactive: true,
                title: '<img src="styles/legend/Platanias_Buildingbuilding_2.png" /> Platanias_Building — building'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Platanias_Confini_1.setVisible(true);lyr_Platanias_Buildingbuilding_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Platanias_Confini_1,lyr_Platanias_Buildingbuilding_2];
lyr_Platanias_Confini_1.set('fieldAliases', {'fid': 'fid', });
lyr_Platanias_Buildingbuilding_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'Function': 'Function', 'floor': 'floor', 'Characteristic': 'Characteristic', 'roof type': 'roof type', 'PV': 'PV', });
lyr_Platanias_Confini_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_Platanias_Buildingbuilding_2.set('fieldImages', {'fid': '', 'name': '', 'Function': '', 'floor': '', 'Characteristic': '', 'roof type': '', 'PV': '', });
lyr_Platanias_Confini_1.set('fieldLabels', {'fid': 'no label', });
lyr_Platanias_Buildingbuilding_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'Function': 'no label', 'floor': 'no label', 'Characteristic': 'no label', 'roof type': 'no label', 'PV': 'no label', });
lyr_Platanias_Buildingbuilding_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});