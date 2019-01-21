const calculator = {
    // areaof a parallelogram is A = b * h
    areaOfParallelogram: function(base, height, decimalPlace){
        const area = base * height;
        return area.toFixed(decimalPlace);
    },
    // Vol of a Cylinder is V = pi * r^2 * h
    volOfCylinder: function(radius, height){
        const pi = 3.142;
        const vol = pi * (radius * radius) * height;
        return vol;
    },
    // areaof a rectangle is A = W * l
    areaOfRectangle: function(width, length){
        const area = width * length;
        return area;
    }
}
console.log(calculator.areaOfParallelogram(10, 5, 2))
console.log(calculator.volOfCylinder(5, 7))
console.log(calculator.areaOfRectangle(7,10))