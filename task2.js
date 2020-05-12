// Реализуйте функцию sum

function sum() {
    let sum = 0;
    for (let argument of arguments) {
        argument.forEach(arg => {
            sum += arg;
        });
    }
    return sum;
}


console.log(sum.call(null, [5, 5, 5, 5, 5, 5, 5, 5, 5]));
