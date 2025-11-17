//          0   1    2      3

let arr = ['a', 1, true, undefined]

let arr2 = [
    ['a', 'b'],
    [1, [true, false]],
]; 

console.log(arr2[1][1][0]);

let json = {
    name: 'abc',
    type: {
        color: 'red',
        width: 10,
        count: {
            type: 1
        },
        sum: function(x, y) {
            return x + y;
        },
        calc2: () => '10'
    },   
};

console.log(typeof json);

console.log(json.type.color)
console.log(json.type.sum(5, 15))
console.log(json.type.calc2())

json.name = "def";
console.log(json.name);

//index++ - если с начала
// ++index - если с конца
// --index 
//index = index + 1

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

let newArr = Object.entries(json)
console.log(newArr[1])

let arrValues = Object.values(json)
console.log("value:", arrValues[1].color)

let subQuery = Object.values(arrValues[1])
console.log(subQuery[1]);

let arrKeys = Object.keys(json);
console.log(arrKeys[1]);

console.log('-------')

Object.entries(json).forEach((item) => {
    console.log(item);
})

let json2 = {
    name: [ 'abc', 'def', 'ghi'],
    type: {
        color: 'red',
        width: 10,
        count: {
            type: 1
        },
        sum: function(x, y) {
            return x + y;
        },
        calc2: () => '10'
    },   
};

console.log('----', json2.name[0]), '----';

console.log(typeof json2);

//
let sJson = JSON.stringify(json2)
console.log(JSON.stringify(json2))

let tJson = '[{"name":["abc","def","ghi"],"type":{"color":"red","width":10,"count":{"type":1}}}]'
console.log(JSON.parse(tJson))