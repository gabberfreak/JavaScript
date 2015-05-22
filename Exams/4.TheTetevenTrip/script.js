function array(n) {
    for (var i = 0; i < n.length; i++) {
        var current = n[i].split(" ");
        var carModel = current[0];
        var fuelType = current[1];
        var routeNumber = current[2];
        var luggageWeight = current[3];
        var fuelConsumption = 0;
        switch(fuelType) {
            case 'petrol':
                fuelConsumption = 10;
                break;
            case 'gas':
                fuelConsumption = 12;
                break;
            case 'diesel':
                fuelConsumption = 8;
                break;
            default: break;
        }

        var extraFuelConsumption = luggageWeight * 0.01;
        fuelConsumption += extraFuelConsumption;
        if(routeNumber == 1) {
            var totalConsumption = 110 * (fuelConsumption / 100);
        } else if(routeNumber == 2) {
            totalConsumption = 95 * (fuelConsumption / 100);
        }
        var extraSnowConsumption = 0.3 * fuelConsumption;
        if(routeNumber == 1) {
            extraSnowConsumption = 10 * (extraSnowConsumption / 100);
        } else if (routeNumber == 2) {
            extraSnowConsumption = 30 * (extraSnowConsumption / 100);
        }
        var total = extraSnowConsumption + totalConsumption;
        console.log(carModel + " " + fuelType + " " + routeNumber + " " + Math.round(total));
    }
}

array(['BMW petrol 1 320.5',
        'Golf petrol 2 150.75',
        'Lada gas 1 202',
        'Mercedes diesel 2 312.54']
);