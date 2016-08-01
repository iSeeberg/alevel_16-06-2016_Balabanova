
function generatePythagorasTable(){
    var x, y, result = {};

    for(x=2; x<=9; x++){
        result[x] = {};

        for(y=2;y<=9;y++){
            result[x][y] = x * y;
        }

    }
    return result;
}


var table = generatePythagorasTable();

var table_two = table[2];

console.log("Умножение на 2:");
console.log(table[2]);

console.log("Умножение 2 на 6:");
console.log(table[2][6]);

/*

 1. '9 x 9' // строка, getPythagoras('9 x 9')
 2. [5, 7] // массив, getPythagoras([5, 7])
 3. { exp: '9 x 9' } // getPythagoras({ exp: '9 x 9' })
 4. { values: [5, 7] }
 5. { factor: 2 }
 6. без параметров // getPythagoras()

 */

function stringToArray(input){


    return [
        input.substr(0,1),
        input.substr(4,1)
    ];


}


var getPythagoras = function(input){

    if(arguments.length===0){
        return table;
    }

    else if( typeof input.factor == 'number' ){
        return table[input.factor];
    }

    var request = []; // В этой переменной будет храниться массив вида [2,6]

    if(typeof input == "string"){ // Вариант 1
        request = stringToArray(input);
    } else if(typeof input.exp =="string"){ // Вариант 3
        request = stringToArray(input.exp);
    } else if(Array.isArray(input)){ // Вариант 2
        request = input;
    } else if(typeof input.values !== 'undefined' && Array.isArray(input.values)){
        // Вариант 4
        request = input.values;
    }

    return table[ request[0] ][ request[1] ];

};

console.log("6: getPythagoras()");
console.log( getPythagoras() );

console.log("5: getPythagoras({factor:2})");
console.log( getPythagoras({factor:2}) );

console.log("3: getPythagoras({exp:'2 x 6'})");
console.log( getPythagoras({exp:'2 x 6'}) );

console.log("1: getPythagoras('2 x 6')");
console.log( getPythagoras('2 x 6') );

console.log("2: getPythagoras([2,6])");
console.log( getPythagoras([2,6]) );

console.log("4: getPythagoras({values:[2,6]})");
console.log( getPythagoras({values:[2,6]}) );
