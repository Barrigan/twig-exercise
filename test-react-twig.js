/**
 * 
 * @param {*} arr Input array
 * @param {*} groupsNumber Number of groups in which the array will be devided
 * @returns Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N
equally sized arrays.
 *  As it's not been requested, this function is not controlling not requested inputs like: introducing characters instead of numbers or that the number in "groupsNumber" is smaller than "1 or 0" or if "groupsNumber" is bigger than the number of elements in the array
 */

function groupArrayElements(arr, groupsNumber) {
  //Calculating the number of required groups for the output
  const groupSize = Math.ceil(arr.length / groupsNumber);
  console.log("groupSize: ", groupSize);

  //output array of grouped elements
  let output = [];
  //smaller array used to input the values
  let miniGroup = [];
  //counter to control the number of elements introduced
  let counter = 0;

  //In this function we will introduce values in an array until it reaches the "groupZize" and then push it into the output array.
  //If we reach the end of the input array "arr" before fullfilling the last smaller array, we will push it into "arr" before leaving the loop.
  arr.forEach((element, index) => {
    if (counter < groupSize - 1) {
      miniGroup.push(element);
      //console.log("option 1\n","index: ", index, " element: ", element, " counter: ", counter);
      counter++;
      if (index === arr.length - 1) {
        output.push(miniGroup);
      }
    } else {
      //console.log("option 2\n","index: ", index, " element: ", element, " counter: ", counter);
      miniGroup.push(element);
      output.push(miniGroup);
      counter = 0;
      miniGroup = [];
    }
  });

  return output;
}

console.log(
  "Grouping Arrays: ",
  groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 12)
);
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
