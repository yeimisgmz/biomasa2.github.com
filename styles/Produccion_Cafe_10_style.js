var size = 0;
var placement = 'point';
function categories_Produccion_Cafe_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '287':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,128,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(0,180,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Produccion_Cafe_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("CAFÃ‰");
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
    
var style = categories_Produccion_Cafe_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
