// Tab switching functionality
document.getElementById('currency-btn').onclick = () => showSection('currency-section');
document.getElementById('temp-btn').onclick = () => showSection('temp-section');
document.getElementById('distance-btn').onclick = () => showSection('distance-section');
document.getElementById('weight-btn').onclick = () => showSection('weight-section');
document.getElementById('bmi-btn').onclick = () => showSection('bmi-section');

function showSection(sectionId) {
    const sections = document.querySelectorAll('.converter-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Currency Converter Logic
document.getElementById('convert-currency-btn').onclick = function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;
    let rate = 0;

    if (currency === "USD") rate = 0.012;
    if (currency === "EUR") rate = 0.011;
    if (currency === "GBP") rate = 0.0098;
    if (currency === "JPY") rate = 1.8;
    if (currency === "AUD") rate = 0.018;

    const result = amount * rate;
    document.getElementById('currency-result').textContent = `${amount} INR is ${result.toFixed(2)} ${currency}`;
};

// Temperature Converter Logic
document.getElementById('convert-temp-btn').onclick = function() {
    const fahrenheit = parseFloat(document.getElementById('temp').value);
    const centigrade = (fahrenheit - 32) * 5 / 9;
    document.getElementById('temp-result').textContent = `${fahrenheit}°F is ${centigrade.toFixed(2)}°C`;
};

// Distance Converter Logic
document.getElementById('convert-distance-btn').onclick = function() {
    const kilometers = parseFloat(document.getElementById('distance').value);
    const meters = kilometers * 1000;
    const feet = kilometers * 3280.84;
    const inches = kilometers * 39370.08;

    document.getElementById('distance-result').textContent = 
        `${kilometers} km is ${meters} meters, ${feet.toFixed(2)} feet, and ${inches.toFixed(2)} inches.`;
};

// Weight Converter Logic
document.getElementById('convert-weight-btn').onclick = function() {
    const kilograms = parseFloat(document.getElementById('weight').value);
    const grams = kilograms * 1000;
    const pounds = kilograms * 2.20462;

    document.getElementById('weight-result').textContent = 
        `${kilograms} kg is ${grams} grams and ${pounds.toFixed(2)} lbs.`;
};

// BMI Calculator Logic
document.getElementById('calculate-bmi-btn').onclick = function() {
    const weight = parseFloat(document.getElementById('weight-bmi').value);
    const height = parseFloat(document.getElementById('height-bmi').value);
    const bmi = weight / (height * height);

    document.getElementById('bmi-result').textContent = `Your BMI is ${bmi.toFixed(2)}`;
};
