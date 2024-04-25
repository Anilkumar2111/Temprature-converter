const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff').value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (tempSelected === 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&deg; Fahrenheit";
    } else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&deg; Celsius";
    }
}
