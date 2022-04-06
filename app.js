// les variable date picker

let datePicker = document.getElementById("date-picker");
let choseDate = document.getElementById("chose-date");

// les variables age calc

let ageYears = document.getElementById("ageYears");
let ageMonth = document.getElementById("ageMonth");
let ageDays = document.getElementById("ageDays");
let ageHours = document.getElementById("ageHours");
let ageSeconds = document.getElementById("ageSeconds");
let ageMiliseconds = document.getElementById("ageMiliseconds");


datePicker.addEventListener('change', function() {
    
    let option = {year: 'numeric', month: 'long', day: 'numeric'};
    let selectDate = new Date(this.value);
    let DOB = selectDate.toLocaleDateString("en-US", option);

    choseDate.innerHTML = "DOB : " + " "  +DOB;

    let miliseconds_Btw_DOB = Date.parse(DOB);
    let miliseconds_Btw_Now = Date.now();
    let age_miliseconds = miliseconds_Btw_Now - miliseconds_Btw_DOB;


    let miliseconds = age_miliseconds
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let day = hours * 24;
    let month = day * 30;
    let year = day * 365;

    let ageEnSecondes = Math.round(miliseconds / 1000);
    let ageEnMinutes = Math.round(miliseconds / minutes);
    let ageEnHeures = Math.round(miliseconds / hours);
    let ageEnJours =  Math.round(miliseconds / day);
    let ageEnMois = Math.round(miliseconds / month);
    let ageEnAnnee = Math.round(miliseconds / year);

    ageYears.innerHTML = ageEnAnnee;
    ageMonth.innerHTML = ageEnMois;
    ageDays.innerHTML = ageEnJours;
    ageHours.innerHTML = ageEnHeures;
    ageSeconds.innerHTML = ageEnSecondes;
    ageMiliseconds.innerHTML = miliseconds;

    document.querySelector(".age-calc").classList.add("expand");

})