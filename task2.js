// Реализуйте функцию sum

function sum() {
    let sum = 0;
    this.forEach(num => {
        sum += num;
    });
    return sum;
}


console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));
