// FOR EACH //
Array.prototype.myEach = function(callbackfn) { //given
    for(let i = 0;i<this.length;i++){
        if(this[i] === undefined) continue;
        callbackfn(this[i],i,this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackfn) {
    let return_arr = [];            //creates array to return
    for(let i = 0; i < this.length; i++){
        return_arr.push(callbackfn(this[i])); //pushes the value from this into the return array after running it through the funct
    }
    return return_arr; //returns the array
};

// FILTER //
Array.prototype.myFilter = function(callbackfn) {
    arr_2 = [];                //creates array to return
    for(let i = 0; i < this.length;i++) 
    {
        if(callbackfn(this[i])) //if this item in location i returns 'true' from the cbfn, push that value into the new array
        {
            arr_2.push(this[i]);
        }
        else{
            continue;
        }
    }
    return arr_2; //returns the array
};

// SOME //
Array.prototype.mySome = function(callbackfn) {
    let is_even = false; //default to false
    
    for(let i = 0; i < this.length; i++){
        if(callbackfn(this[i])){
            is_even = true;  //if the callback function returns true for a specific item, change is_even to true
        }
        else{
            continue;
        }
    }
    return is_even; //return the bool value
};

// EVERY //
Array.prototype.myEvery = function(callbackfn) {
    let all = true; //defaults to true
    for(let i = 0; i < this.length;i++)
    {
        if(this[i]===undefined) continue;
        if(!callbackfn(this[i])) {all =false}; //if all the elements does not pass the test in the cbfn, set the bool value to false
    }
    return all; //return the bool value
};

// REDUCE //
Array.prototype.myReduce = function(callbackfn, new_num) {
    if(new_num === undefined) new_num = 0;  //if an extra number is not given, set new_num to 0
    let result = 0 + new_num;  //var to return, set as 0 + the new number
    for(let i = 0; i < this.length; i++)
    {
        result = callbackfn(result, this[i]);  //replaces return every loop for the updated value, cbfn takes in the previous result and the current value
        if(i+1 === this.length) return result; //when the end of the array, return result

    }
};

// INCLUDES //
Array.prototype.myIncludes = function(value, loc) {
    if(loc){    //if the locaton is given, start off i as loc and iterate through the array, searching for the value
        for(let i = loc; i < this.length; i++)
        {
            if(this[i] === value) return true;
        }
        return false;  //returns false if not found
    }

    else{
        for(let i = 0; i < this.length; i++)    //default at the start, iterate through the array and check if the item corresponds to the value
        {
            if(this[i] === value) return true;
        }
        return false; //returns false if not found
    }

};

// INDEXOF //
Array.prototype.myIndexOf = function(word, index) { 
    let absent = -1; //set absent to -1, indicating the word doesn't exist
    if(index){  //loop for if index is given
        for(let i = index; i < this.length;i++) //starts i off at the given index
        {
            if(this[i] ===word) return i; //if the word is found in the array, return the index it is located at
            else continue;
        }
    }
    else{
        for(let i = 0; i < this.length; i++)
        {
            if(this[i]===word) return i; //if the word is found in the array, return the index it is located at
            else continue;
        }
    }
    return absent; //returns absent if the value doesn't exist in the array
};

// PUSH //
Array.prototype.myPush = function(...args) { //given
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
    for(let i = index; i > 0;i--) //start at the given index and goes backwards until the loop reaches the front of the array
    {
        if(this[i] ===word) return i;      //if the word is found in the array, return the index it is located at
        else continue;
    }
}
else{
    for(let i = this.length; i > 0; i--) //starts at the end of the array, going backwards to search for the item
    {
        if(this[i]===word) return i;       //if the word is found in the array, return the index it is located at
        else continue;
    }
}
return absent; //return -1 if the item does not exist in the array
};

// KEYS //
Object.grabKeys = function(object) {
    let ret_arr = []; //create return array
    for(let i in object){ 
        ret_arr.push(i); //push every key in object into the new array
    }
    return ret_arr; //return the created arary
}

// VALUES //
Object.grabValues = function(object) {
    let ret_arr = []; //create return array
    for(let i in object){
        ret_arr.push(object[i]); //push back the value of each key in object into the new array
    }
    return ret_arr; //return the created array
};

//TESTS// --Below are the tests and the values I used for each of the function
//to test individually, i commented out all tests other than the one being used

const arr = [1, 2, 3];
const words = ['sam', 'tucker', 'jeff','peacon','rosa','leslie','monic', 'rosa', 'jefferson','samuael']
const numerals = [15, 23, 1, 5, 31, 311, 61];
const obj1 = {a: 'sam', b:'rem', c:'cue', b_around:'sam'};

//tests myEach
arr.myEach((x, i ,arr) => console.log(x, i, arr)); //created
console.log('\n');
arr.forEach((x, i, arr) => console.log(x, i , arr)); //default
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

//tests mysum
console.log(numerals.mySome(even = (element) => element%2 ===0, even)); //created
console.log(numerals.some(even));//default 
//needs more testing//

//tests mymap
const map1 = arr.myMap(x => x * 2); //created
console.log(map1);

const map2 = arr.map(x => x*2); //default
console.log(map2);
//end of test

//tests grabkeys
console.log(Object.grabKeys(obj1)); //created
console.log(Object.keys(obj1)); //default
//end of test

//tests grabvalues
console.log(Object.grabValues(obj1)); //created
console.log(Object.values(obj1)); //default
//end of test