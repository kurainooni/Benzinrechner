

document.addEventListener('DOMContentLoaded', function () {
    $("#btn-submit").on("click", function(){
        calculate();
    });

//    $("button").click(function(){
//        calculate();
//    });
});



var distFact = 1;

var distType = "km";

/**
 *
 * @param price
 * @param menge
 * @returns {number}
 */
function preis_Fuellung(price, menge){
    return (price*menge);
}

function preis_pro_Fahrt(verbrauch_daily, price){
    return verbrauch_daily*price;
}

function verbrauch(menge, strecke){
    return menge/strecke*100*distFact;
}

function verbrauch_Taeglich(verbrauch,daily){
    return verbrauch/100*daily;
}

function fahrt_menge(verbrauch_daily,tank_size){
    return tank_size/verbrauch_daily;
}

function miles_to_km( miles){
    return miles * 1.609344;
}

function km_to_miles(km){
    return km * 0.62137;
}

/**
 * calculate
 * Berechnet die notwendigen Werte
 */
function calculate(){
    var price = parseFloat($("#price").val().replace(",","."));
    var strecke = parseFloat($("#strecke").val().replace(",","."));
    var tank_size = parseFloat($("#tank-size").val().replace(",","."));
    var tank_menge = parseFloat($("#tank-menge").val().replace(",","."));
    var daily = parseFloat($("#daily").val().replace(",","."));
    var inDist = $('input[name="rad-in-unit"]:checked').val();
    var outDist = $('input[name="rad-out-unit"]:checked').val();

    if (inDist!=outDist){
        if(inDist==0){
            distFact=0.62137;
        }
        else if (inDist==1){
            distFact=1.609344;
        }
        else{
            distFact=1;
        }
    }
    else{
        distFact=1;
    }



    var g_verbrauch = verbrauch(tank_menge,strecke);
    var verbrauch_daily = verbrauch_Taeglich(g_verbrauch,daily);
    if (isNaN(price)){
        $("#t-kosten").text("Keine Angabe");
        $("#f-kosten").text("Keine Angabe");
    }
    else{
        $("#t-kosten").text(preis_Fuellung(price,tank_menge).toFixed(2).toString().replace(".",",")+"€");
        $("#f-kosten").text("ca. " + preis_pro_Fahrt(verbrauch_daily,price).toFixed(2).toString().replace(".",",") + " €");
    }
    $("#verbrauch").text(g_verbrauch.toFixed(2).toString().replace(".",",") + " l / 100 "+distType);
    if (isNaN(verbrauch_daily)){
        $("#verbrauch-daily").text("Keine Angabe");
        $("#fahrten").text("Keine Angabe");
    }
    else{
        $("#verbrauch-daily").text("ca. " + verbrauch_daily.toFixed(2).toString().replace(".",",") + " l");
        $("#fahrten").text("ca. " + fahrt_menge(verbrauch_daily,tank_size).toFixed(2).toString().replace(".",",") + " Tag/e");
    }
}