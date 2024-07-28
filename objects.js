const car = {
    name: 'gwagon',
    price: 50000000,
    color: ['black', 'white', 'blue']
}

console.log(car);
console.log(car.color[2]);
console.log(car.price);
console.log(typeof (car));

const cars = [
    {
        name: 'GWagon',
        price: 50000000,
        color: ['black', 'white', 'blue']
    },
    {
        name: 'BMW',
        price: 60000000,
        color: ['red', 'black', 'yellow']
    },
    {
        name: 'Mercedes',
        price: 70000000,
        color: ['white', 'black', 'blue']
    }
]

console.log(cars);
console.log(cars[1].price);
console.log(cars[2].name);

cars[1].color.push("Grey")
console.log(cars[1]);