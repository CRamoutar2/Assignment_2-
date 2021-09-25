// FOR EACH //
Array.prototype.myEach = function(callbackfn) {
    for(let i = 0;i<this.length;i++){
        if(this[i] === undefined) continue;
        callbackfn(this[i],i,this);
    }
};

// MAP //
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function(callbackfn) {
    arr_2 = [];
    for(let i = 0; i < this.length;i++)
    {
        if(callbackfn(this[i]))
        {
            arr_2.push(this[i]);
        }
        else{
            continue;
        }
    }
    return arr_2;
};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function(callbackfn) {
    let all = true;
    for(let i = 0; i < this.length;i++)
    {
        if(this[i]===undefined) continue;
        if(!callbackfn(this[i])) {all =false};
    }
    return all;
};

// REDUCE //
Array.prototype.myReduce = function(callbackfn, new_num) {
    if(new_num === undefined) new_num = 0;
    let result = 0 + new_num;
    for(let i = 0; i < this.length; i++)
    {
        result = callbackfn(result, this[i]);
        if(i+1 === this.length) return result;

    }
};

// INCLUDES //
Array.prototype.myIncludes = function(value, loc) {
    if(loc){
        for(let i = loc; i < this.length; i++)
        {
            if(this[i] === value) return true;
        }
        return false;
    }

    else{
        for(let i = 0; i < this.length; i++)
        {
            if(this[i] === value) return true;
        }
        return false;
    }

};

// INDEXOF //
Array.prototype.myIndexOf = function(word, index) { 
    let absent = -1;
    if(index){
        for(let i = index; i < this.length;i++)
        {
            if(this[i] ===word) return i;
            else continue;
        }
    }
    else{
        for(let i = 0; i < this.length; i++)
        {
            if(this[i]===word) return i;
            else continue;
        }
    }
    return absent;
};

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i=0;
    let length=this.length;

    for(let i = length;i<length+args.length;i++){
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(word, index) {
let absent = -1;
if(index){
    for(let i = index; i > 0;i--)
    {
        if(this[i] ===word) return i;
        else continue;
    }
}
else{
    for(let i = this.length; i > 0; i--)
    {
        if(this[i]===word) return i;
        else continue;
    }
}
return absent;
};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

//TESTS//

const arr = [1, 2, 3];
const words = ['sam', 'tucker', 'jeff','peacon','rosa','leslie','monic', 'rosa', 'jefferson','samuael']
const numerals = [15, 23, 1, 5, 31, 312, 60];

//tests myEach
arr.myEach((x, i ,arr) => console.log(x, i, arr)); //created
console.log('\n');
arr.forEach((x, i, arr) => console.log(x, i , arr));
console.log('\n');

//end of test

//tests myPush
arr.myPush(4, 5); //created
console.log(arr); 
console.log('\n');
arr.push(6, 7) //default
console.log(arr);
console.log('\n');

//end of test

//tests myfilter
const result_arr = words.myFilter(word => word.length === 6); //created
console.log(result_arr, '\n');
const new_r = words.filter(word => word.length === 6); //default
console.log(new_r);
//end of test

//tests every
console.log(numerals.myEvery(Value => Value > 400)); //created
console.log(numerals.every(Value => Value > 400)); //default
//end of test


//tests indexOf
console.log(words.myIndexOf('rosa', 8)); //created
console.log(words.indexOf('rosa', 8)); //default
//end of test

//tests lastIndexOf
console.log(words.myLastIndexOf('rosa')); //created
console.log(words.lastIndexOf('rosa')); //default
//end of tests

//tests myReduce
console.log(arr.myReduce(reducer  = (current_value, next_value)=>current_value + next_value, 3)); //created
console.log(arr.reduce(reducer, 3)); //default
//end of test

//tests myincludes
console.log(words.myIncludes('rosa', 8)); //created
console.log(words.includes('rosa', 8)); //default

console.log(numerals.myIncludes(312, 3)); //created
console.log(numerals.includes(312, 3)); //default
//end of tests