

document.addEventListener('DOMContentLoaded', function () {
    $("#btn-submit").on("click", function(){
        calculate();
    });

//    $("button").click(function(){
//        calculate();
//    });
});

function preis_Fuellung(price, menge){
    return (price*menge);
}

function preis_per_Fahrt(verbrauch_daily, price){
    return verbrauch_daily*price;
}

function verbrauch(menge, strecke){
    return menge/strecke*100;
}

function verbrauch_Taeglich(verbrauch,daily){
    return verbrauch/100*daily;
}

function fahrt_menge(verbrauch_daily,tank_size){
    return tank_size/verbrauch_daily;
}

function calculate(){
    var price = parseFloat($("#price").val().replace(",","."));
    var strecke = parseFloat($("#strecke").val().replace(",","."));
    var tank_size = parseFloat($("#tank-size").val().replace(",","."));
    var tank_menge = parseFloat($("#tank-menge").val().replace(",","."));
    var daily = parseFloat($("#daily").val().replace(",","."));
    $("#t-kosten").text(preis_Fuellung(price,tank_menge).toFixed(2).toString().replace(".",",")+"€");
    var g_verbrauch = verbrauch(tank_menge,strecke);
    $("#verbrauch").text(g_verbrauch.toFixed(2).toString().replace(".",",") + " l / 100 km");
    var verbrauch_daily = verbrauch_Taeglich(g_verbrauch,daily);
    $("#verbrauch-daily").text("ca. " + verbrauch_daily.toFixed(2).toString().replace(".",",") + " l");
    $("#f-kosten").text("ca. " + preis_per_Fahrt(verbrauch_daily,price).toFixed(2).toString().replace(".",",") + " €");
    $("#fahrten").text("ca. " + fahrt_menge(verbrauch_daily,tank_size).toFixed(2).toString().replace(".",",") + " Tag/e");
}