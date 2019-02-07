var size = 0;
var placement = 'point';
function categories_Produccion_Platano_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '4.2':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(29,60,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(53,215,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '6.7':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(29,60,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(134,231,28,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '10.1':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(29,60,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(215,247,56,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '18.5':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(29,60,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,204,56,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '29.5':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(29,60,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,102,29,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Produccion_Platano_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("PLATANO");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Produccion_Platano_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
