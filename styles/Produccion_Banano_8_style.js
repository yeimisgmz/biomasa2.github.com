var size = 0;
var placement = 'point';
function categories_Produccion_Banano_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '2.24':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(39,229,26,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '2.8':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(147,242,50,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '4.76':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,75,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '8.4':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,128,37,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '9.8':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Produccion_Banano_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("BANANO");
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
    
var style = categories_Produccion_Banano_8(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
