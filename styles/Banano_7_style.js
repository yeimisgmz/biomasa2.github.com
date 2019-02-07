var size = 0;
var placement = 'point';
function categories_Banano_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '30':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(10,227,177,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '70':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(137,207,15,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Banano_7 = function(feature, resolution){
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
    
var style = categories_Banano_7(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
