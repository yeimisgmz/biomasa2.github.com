var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Limite_Municipal_1 = new ol.format.GeoJSON();
var features_Limite_Municipal_1 = format_Limite_Municipal_1.readFeatures(json_Limite_Municipal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Municipal_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Limite_Municipal_1.addFeatures(features_Limite_Municipal_1);var lyr_Limite_Municipal_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Municipal_1, 
                style: style_Limite_Municipal_1,
                title: '<img src="styles/legend/Limite_Municipal_1.png" /> Limite_Municipal'
            });var format_Corregimientos_Datos_2 = new ol.format.GeoJSON();
var features_Corregimientos_Datos_2 = format_Corregimientos_Datos_2.readFeatures(json_Corregimientos_Datos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corregimientos_Datos_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Corregimientos_Datos_2.addFeatures(features_Corregimientos_Datos_2);var lyr_Corregimientos_Datos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Corregimientos_Datos_2, 
                style: style_Corregimientos_Datos_2,
                title: '<img src="styles/legend/Corregimientos_Datos_2.png" /> Corregimientos_Datos'
            });var format_Platano_3 = new ol.format.GeoJSON();
var features_Platano_3 = format_Platano_3.readFeatures(json_Platano_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Platano_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Platano_3.addFeatures(features_Platano_3);var lyr_Platano_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Platano_3, 
                style: style_Platano_3,
    title: 'Platano<br />\
    <img src="styles/legend/Platano_3_0.png" /> 6.09%<br />\
    <img src="styles/legend/Platano_3_1.png" /> 24.35%<br />\
    <img src="styles/legend/Platano_3_2.png" /> 26.81%<br />\
    <img src="styles/legend/Platano_3_3.png" /> 42.75%<br />'
        });var format_Produccion_Platano_4 = new ol.format.GeoJSON();
var features_Produccion_Platano_4 = format_Produccion_Platano_4.readFeatures(json_Produccion_Platano_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Produccion_Platano_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Produccion_Platano_4.addFeatures(features_Produccion_Platano_4);var lyr_Produccion_Platano_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Produccion_Platano_4, 
                style: style_Produccion_Platano_4,
    title: 'Produccion_Platano<br />\
    <img src="styles/legend/Produccion_Platano_4_0.png" /> 4.2 Ha<br />\
    <img src="styles/legend/Produccion_Platano_4_1.png" /> 6.7 Ha<br />\
    <img src="styles/legend/Produccion_Platano_4_2.png" /> 10.1 Ha<br />\
    <img src="styles/legend/Produccion_Platano_4_3.png" /> 18.5 Ha<br />\
    <img src="styles/legend/Produccion_Platano_4_4.png" /> 29.5 Ha<br />'
        });var format_Palma_5 = new ol.format.GeoJSON();
var features_Palma_5 = format_Palma_5.readFeatures(json_Palma_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Palma_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Palma_5.addFeatures(features_Palma_5);var lyr_Palma_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Palma_5, 
                style: style_Palma_5,
    title: 'Palma<br />\
    <img src="styles/legend/Palma_5_0.png" /> 12.50%<br />\
    <img src="styles/legend/Palma_5_1.png" /> 26.25%<br />\
    <img src="styles/legend/Palma_5_2.png" /> 61.25%<br />'
        });var format_Produccion_Palma_6 = new ol.format.GeoJSON();
var features_Produccion_Palma_6 = format_Produccion_Palma_6.readFeatures(json_Produccion_Palma_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Produccion_Palma_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Produccion_Palma_6.addFeatures(features_Produccion_Palma_6);var lyr_Produccion_Palma_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Produccion_Palma_6, 
                style: style_Produccion_Palma_6,
    title: 'Produccion_Palma<br />\
    <img src="styles/legend/Produccion_Palma_6_0.png" /> 150.4 Ha<br />\
    <img src="styles/legend/Produccion_Palma_6_1.png" /> 315.8 Ha<br />\
    <img src="styles/legend/Produccion_Palma_6_2.png" /> 736.8 Ha<br />'
        });var format_Banano_7 = new ol.format.GeoJSON();
var features_Banano_7 = format_Banano_7.readFeatures(json_Banano_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banano_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Banano_7.addFeatures(features_Banano_7);var lyr_Banano_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Banano_7, 
                style: style_Banano_7,
    title: 'Banano<br />\
    <img src="styles/legend/Banano_7_0.png" /> 30%<br />\
    <img src="styles/legend/Banano_7_1.png" /> 70%<br />'
        });var format_Produccion_Banano_8 = new ol.format.GeoJSON();
var features_Produccion_Banano_8 = format_Produccion_Banano_8.readFeatures(json_Produccion_Banano_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Produccion_Banano_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Produccion_Banano_8.addFeatures(features_Produccion_Banano_8);var lyr_Produccion_Banano_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Produccion_Banano_8, 
                style: style_Produccion_Banano_8,
    title: 'Produccion_Banano<br />\
    <img src="styles/legend/Produccion_Banano_8_0.png" /> 2.24 Ha<br />\
    <img src="styles/legend/Produccion_Banano_8_1.png" /> 2.8 Ha<br />\
    <img src="styles/legend/Produccion_Banano_8_2.png" /> 4.76 Ha<br />\
    <img src="styles/legend/Produccion_Banano_8_3.png" /> 8.4 Ha<br />\
    <img src="styles/legend/Produccion_Banano_8_4.png" /> 9.8 Ha<br />'
        });var format_Cafe_9 = new ol.format.GeoJSON();
var features_Cafe_9 = format_Cafe_9.readFeatures(json_Cafe_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafe_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cafe_9.addFeatures(features_Cafe_9);var lyr_Cafe_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cafe_9, 
                style: style_Cafe_9,
    title: 'Cafe<br />\
    <img src="styles/legend/Cafe_9_0.png" /> 100%<br />'
        });var format_Produccion_Cafe_10 = new ol.format.GeoJSON();
var features_Produccion_Cafe_10 = format_Produccion_Cafe_10.readFeatures(json_Produccion_Cafe_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Produccion_Cafe_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Produccion_Cafe_10.addFeatures(features_Produccion_Cafe_10);var lyr_Produccion_Cafe_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Produccion_Cafe_10, 
                style: style_Produccion_Cafe_10,
    title: 'Produccion_Cafe<br />\
    <img src="styles/legend/Produccion_Cafe_10_0.png" /> 287 Ha<br />'
        });
var group_ProduccindeCaf = new ol.layer.Group({
                                layers: [lyr_Cafe_9,lyr_Produccion_Cafe_10,],
                                title: "Producción de Café"});
var group_ProduccindeBanano = new ol.layer.Group({
                                layers: [lyr_Banano_7,lyr_Produccion_Banano_8,],
                                title: "Producción de Banano"});
var group_ProduccindePalmadeaceite = new ol.layer.Group({
                                layers: [lyr_Palma_5,lyr_Produccion_Palma_6,],
                                title: "Producción de Palma de aceite"});
var group_ProduccindePltano = new ol.layer.Group({
                                layers: [lyr_Corregimientos_Datos_2,lyr_Platano_3,lyr_Produccion_Platano_4,],
                                title: "Producción de Plátano"});
var group_Base = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_Limite_Municipal_1,],
                                title: "Base"});

lyr_Limite_Municipal_1.setVisible(true);lyr_Corregimientos_Datos_2.setVisible(true);lyr_Platano_3.setVisible(false);lyr_Produccion_Platano_4.setVisible(false);lyr_Palma_5.setVisible(false);lyr_Produccion_Palma_6.setVisible(false);lyr_Banano_7.setVisible(false);lyr_Produccion_Banano_8.setVisible(false);lyr_Cafe_9.setVisible(false);lyr_Produccion_Cafe_10.setVisible(false);
var layersList = [group_Base,group_ProduccindePltano,group_ProduccindePalmadeaceite,group_ProduccindeBanano,group_ProduccindeCaf];
lyr_Limite_Municipal_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NOMBRE_ENT': 'NOMBRE_ENT', 'CATEGORIA': 'CATEGORIA', 'DEPARTAMEN': 'DEPARTAMEN', 'COD_DEPART': 'COD_DEPART', 'COD_MUNICI': 'COD_MUNICI', 'AREA_KM': 'AREA_KM', 'OBSERVACIO': 'OBSERVACIO', 'PK_CUE': 'PK_CUE', 'ACTO_ADMIN': 'ACTO_ADMIN', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Area_Km_1': 'Area_Km_1', });
lyr_Corregimientos_Datos_2.set('fieldAliases', {'Nombre': 'Nombre', 'BANANO': 'BANANO', 'PLATANO': 'PLATANO', 'CAFE': 'CAFE', 'PALMA_ACEI': 'PALMA_ACEI', });
lyr_Platano_3.set('fieldAliases', {'Nombre': 'Nombre', 'PLATANO': 'PLATANO', });
lyr_Produccion_Platano_4.set('fieldAliases', {'PUEBLO': 'PUEBLO', 'PLATANO': 'PLATANO', });
lyr_Palma_5.set('fieldAliases', {'Nombre': 'Nombre', 'PALMA_ACEI': 'PALMA_ACEI', });
lyr_Produccion_Palma_6.set('fieldAliases', {'PUEBLO': 'PUEBLO', 'PALMA_ACE': 'PALMA_ACE', });
lyr_Banano_7.set('fieldAliases', {'Nombre': 'Nombre', 'BANANO': 'BANANO', });
lyr_Produccion_Banano_8.set('fieldAliases', {'PUEBLO': 'PUEBLO', 'BANANO': 'BANANO', });
lyr_Cafe_9.set('fieldAliases', {'Nombre': 'Nombre', 'CAFE': 'CAFE', });
lyr_Produccion_Cafe_10.set('fieldAliases', {'PUEBLO': 'PUEBLO', 'CAFÃ‰': 'CAFÃ‰', });
lyr_Limite_Municipal_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NOMBRE_ENT': 'TextEdit', 'CATEGORIA': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'COD_DEPART': 'TextEdit', 'COD_MUNICI': 'TextEdit', 'AREA_KM': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'PK_CUE': 'TextEdit', 'ACTO_ADMIN': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Area_Km_1': 'TextEdit', });
lyr_Corregimientos_Datos_2.set('fieldImages', {'Nombre': 'TextEdit', 'BANANO': 'TextEdit', 'PLATANO': 'TextEdit', 'CAFE': 'TextEdit', 'PALMA_ACEI': 'TextEdit', });
lyr_Platano_3.set('fieldImages', {'Nombre': 'TextEdit', 'PLATANO': 'TextEdit', });
lyr_Produccion_Platano_4.set('fieldImages', {'PUEBLO': 'TextEdit', 'PLATANO': 'TextEdit', });
lyr_Palma_5.set('fieldImages', {'Nombre': 'TextEdit', 'PALMA_ACEI': 'TextEdit', });
lyr_Produccion_Palma_6.set('fieldImages', {'PUEBLO': 'TextEdit', 'PALMA_ACE': 'TextEdit', });
lyr_Banano_7.set('fieldImages', {'Nombre': 'TextEdit', 'BANANO': 'TextEdit', });
lyr_Produccion_Banano_8.set('fieldImages', {'PUEBLO': 'TextEdit', 'BANANO': 'TextEdit', });
lyr_Cafe_9.set('fieldImages', {'Nombre': 'TextEdit', 'CAFE': 'TextEdit', });
lyr_Produccion_Cafe_10.set('fieldImages', {'PUEBLO': 'TextEdit', 'CAFÃ‰': 'TextEdit', });
lyr_Limite_Municipal_1.set('fieldLabels', {});
lyr_Corregimientos_Datos_2.set('fieldLabels', {});
lyr_Platano_3.set('fieldLabels', {});
lyr_Produccion_Platano_4.set('fieldLabels', {});
lyr_Palma_5.set('fieldLabels', {});
lyr_Produccion_Palma_6.set('fieldLabels', {});
lyr_Banano_7.set('fieldLabels', {});
lyr_Produccion_Banano_8.set('fieldLabels', {});
lyr_Cafe_9.set('fieldLabels', {});
lyr_Produccion_Cafe_10.set('fieldLabels', {});
lyr_Produccion_Cafe_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});