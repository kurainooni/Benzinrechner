

document.addEventListener('DOMContentLoaded', function () {
    $("#btn-submit").on("click", function(){
        calculate();
    });

//    $("button").click(function(){
//        calculate();
//    });
});

function preis_Fuellung(price, menge){
    return price*menge;
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
    var price = $("#price").val();
    var strecke = $("#strecke").val();
    var tank_size = $("#tank-size").val();
    var tank_menge = $("#tank-menge").val();
    var daily = $("#daily").val();
    $("#t-kosten").text(preis_Fuellung(price,tank_menge)+"€");
    var g_verbrauch = verbrauch(tank_menge,strecke);
    $("#verbrauch").text(g_verbrauch + " l / 100 km");
    var verbrauch_daily = verbrauch_Taeglich(g_verbrauch,daily);
    $("#verbrauch-daily").text("ca. " + verbrauch_daily + " l");
    $("#f-kosten").text("ca. " + preis_per_Fahrt(verbrauch_daily,price) + " €");
    $("#fahrten").text("ca. " + fahrt_menge(verbrauch_daily,tank_size) + " Tag/e");
}