const r = Number(prompt("Enter the circle radius:"));

const circle = {
    radius: r,

circumference() {
    return 2 * this.radius * Math.PI;
    },

area() {
    return this.radius ** 2 * Math.PI;
    }
};

console.log(`The circumference is ${circle.circumference()}`);
console.log(`The area is ${circle.area()}`);