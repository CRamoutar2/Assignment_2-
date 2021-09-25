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
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

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
Array.prototype.myLastIndexOf = function() {

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