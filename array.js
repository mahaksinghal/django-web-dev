const car = ['bmw', 'alto', 'nano', 12, null, undefined]
console.log(car[3]);

car[3] = 'swift'
console.log(car);

console.log(Array.isArray(car));
console.log(car.length);

const cars = []
cars[0] = 'bmw'
cars[1] = 'alto'
cars[2] = 'g wagon'
console.log(cars);

// indexing
console.log(car.indexOf(null));
console.log(car.flat(-2));

// modifying array

// adding element at last position
car.push('suzuki')
console.log(car);

// adding element at first position
car.unshift('kia')
console.log(car);

car.pop()
car.shift()
console.log(car);

// slicing
console.log(car.slice(1, 7));
console.log(car.slice(-4, -2));

// splicing
car.splice(1, 2, 'audi', 'ferrari')
console.log(car);
car.splice(3,2)
console.log(car);
