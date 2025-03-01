
function calculate(){


let MHz = document.getElementById("name").value;

let wavelength = (468.00 / MHz);

let wavelengthInInches = wavelength * 12; // Convert feet to inches
let halfWavelengthInInches = wavelengthInInches / 2; // Half wavelength in inches
let wavelengthInCM = wavelength * 100; // Convert meters to centimeters
let wavelengthInMM = wavelength * 1000; // Convert meters to millimeters


document.getElementById("wavelengthInFeet").innerHTML = "Wavelength in Feet: " + wavelength.toFixed(2) + " ft - Element L";
document.getElementById("halfWavelengthInInches").innerHTML = "Half Wavelength in Inches: " + halfWavelengthInInches.toFixed(2) + " in - Element E";

}