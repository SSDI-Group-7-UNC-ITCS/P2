'use strict';
const arrayFilterer1 = MakeMultiFilter([4,5,6]);

arrayFilterer1(function (element) :boolean {
    return element != 4 ; // tests whether the element is 4 or not 
}, function (currentArray) :void {
    //usage of this function for call back should retrieve the predefined values those are [4,5,6].
  console.log(this); //used to print the values [4,5,6]
  console.log(currentArray); // prints [5,6]
});

//using the array to filter out array without the element 6 (no usage of this callback function). 

arrayFilterer1(function(element) :boolean {
    return element != 6; //tests whether the element is 6
});

//Calling the arrayFilterer1 without any filter criteria should get us the original currentArray.
const currentArray = arrayFilterer1();
console.log('currentArray', currentArray); //prints [5] since 4,6 where filtered when previous conditions were involved.

//Condition when arrayFilterer should return itself , thus calls can be chained.

function filterFour(element) :boolean {element != 4;}
function filterSix(element) :boolean {return element != 6;}

const arrayFilterer2 = MakeMultiFilter([4,5,6]);
const currentArray2 = arrayFilterer2(filterFour)(filterSix)();
// to print element [5] since 4, 6 will be filtered
console.log('currentArray2',currentArray2);

//To activate multiple filters at an instance
const arrayFilterer3 = MakeMultiFilter([4,5,6]);
const arrayFilterer4 = MakeMultiFilter([1,2,3]);
console.log(arrayFilterer3(filterSix)()); // prints [4,5]
console.log(arrayFilterer4(filterFour())); // prints [1,2,3]