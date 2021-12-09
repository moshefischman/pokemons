const A =  [4, 1, -8, 0, 3, 2];
var result = 0;
var maximum = 0;
array.forEach(el => {
    var counter = 1;
    for (let index = 0; index < A.length; index++) {
        const thenumber = array[index];
        if (el !== thenumber && counter <= 3)  {
            result = el * thenumber;
            console.log('Partial result: ' + result)
            counter++;
        }
        if (result > maximum){
            maximum = result;
        }
    }
});

console.log(`The maximum posible result is ${maximum}`)