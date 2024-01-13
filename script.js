function makeAdder(x) {
    function add(y){
        return y+x;
    }
    return add;
}

var pluseOne = makeAdder(1);

console.log(pluseOne(12));
console.log(pluseOne(32));

var pluseTen = makeAdder(10)

console.log(pluseTen(24));
console.log(pluseTen(54));